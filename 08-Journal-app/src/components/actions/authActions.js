import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../../types/types";
import { startLoading, finishLoading } from "../actions/uiActions";
import Swal from "sweetalert2";

// fijate que algunos si tienen la lógica(los asincronos) mientras que los sincronos( no sé si son los de redux también) solo declaran la accion.Es un poco confusa esta forma.
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.id, user.displayName));
        dispatch(finishLoading());
      })
      .catch((e) => {
        console.log('por aqui');
        dispatch(finishLoading());
        Swal.fire("Error", e.message, "error");
      });
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    // firebase trabajará con promesas,ojo
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCred) => {
        const { user } = userCred;
        // es muy conveniente acceder a este método y subir el nombre también
        await user.updateProfile({ displayName: name });
        // console.log(user)
        dispatch(login(user.id, user.displayName));
      })
      .catch((e) => {
        console.log(e);
        Swal.fire("Error", e.message, "error");
      });
    };
  };
  
  export const startGoogleLogin = () => {
    // con esta forma thunk provee del dispatch en el return,es por esto que puedo usarlo
    //recuerda que esta forma con el return es por usar redux y no @reduxjs/toolkit.No es díficil,sólo cambia un poco
    return (dispatch) => {
      //singInWithPopup pide un proveedor y es una promesa
      firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      // la función resuelve a un UserCredential
      .then((userCred) => {
        const { user } = userCred;
        dispatch(login(user.uid, user.displayName));
      });
    };
  };
  
  export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  });
  
  // si bien es un poquito más liosa esta forma también parece interesante.
  export const startLogout = () => {
    // es asincrono porque hay comunicacion con un backend asin
    // fijate que puedo usar async en el return y trabajar con await en el interior.Realmente return sólo indica que es una instrucción terminal.
    return async (dispatch) => {
      // si bien es una Promise no se suele usar el catch pues no suele fallar
      await firebase.auth().signOut();
      dispatch(logout);
    };
  };
  
  export const logout = () => ({
    type: types.logout,
  });
  
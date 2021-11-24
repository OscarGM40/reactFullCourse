import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { startLoading, finishLoading } from "../actions/uiActions";
import Swal from "sweetalert2";
import { notesLogout } from "./notesActions";

// fijate que algunos si tienen la lógica(los asincronos) mientras que los sincronos( no sé si son los de redux también) solo declaran la accion.Es un poco confusa esta forma.
export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(startLoading());

    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch(login(user.uid, user.displayName));
      dispatch(finishLoading());
    } catch (e) {
      console.log("error en el login");
      dispatch(finishLoading());
      Swal.fire("Error", e.message, "error");
      return e.code;
    }
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return async (dispatch) => {
    // firebase trabajará con promesas,ojo
    try {
      const userCred = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const { user } = userCred;
      // es muy conveniente acceder a este método y subir el nombre también
      await user.updateProfile({ displayName: name });
      // console.log(user)
      dispatch(login(user.uid, user.displayName));
    } catch (e) {
      console.log("error en el registro");
      Swal.fire("Error", e.message, "error");
      return e.code;
    }
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
    dispatch(logout());
    dispatch(notesLogout());
  };
};

export const logout = () => ({
  type: types.logout,
});

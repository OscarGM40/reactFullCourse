import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../../types/types";
import { startLoading ,finishLoading} from "../actions/uiActions"

//es solo otra accion más,solo que devuelve una arrow fucntion con el codigo
export const startLoginEmailPassword = ( email, password ) => {
  return (dispatch) => {
    dispatch( startLoading() )
      
    firebase
      .auth()
      .signInWithEmailAndPassword( email, password)
      .then( ({ user }) => {
        dispatch( login( user.id, user.displayName) );
        dispatch( finishLoading())
      })
      .catch(e => {
        console.log(e);
        dispatch( finishLoading())
      });    
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    //de nuevo regresa una promesa
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then( async (userCred) => {
        const { user } = userCred;
        // es muy conveniente acceder a este método y subir el nombre también 
        await user.updateProfile( { displayName:  name } )
        // console.log(user)
        dispatch(login(user.id,user.displayName))
      })
      .catch( e => console.log(e))
      ; 
  };
};

export const startGoogleLogin = () => {
  //el thunk/middleware me va a proveer el dispatch
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

export const login = ( uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  },
});

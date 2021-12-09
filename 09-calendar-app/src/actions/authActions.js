import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { eventLogout } from "./eventActions";

export const startLogin = (email, password) => {
  return async (dispatch, getState) => {
    const response = await fetchSinToken(
      "auth",
      {
        email,
        password,
      },
      "POST"
    );
    const body = await response.json();
    
    if(body.ok){
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(login({
        uid:body.uid,
        name:body.name,
      }));
    // si no viene el ok a true
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  };
};

const login = (user) => ({
  type: types.authLoginSuccess,
  payload: user,
})

export  const startRegister = ( name,email,password ) => {
  return async (dispatch, getState) => {
    const response = await fetchSinToken(
      "auth/new",
      {
        name,
        email,
        password,
      },
      "POST"
    );
    const body = await response.json();
   
    if(body.ok){
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(login({
        uid:body.uid,
        name:body.name,
      }));
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  }
}

export const startChecking = () => {
  return async(dispatch, getState) => {
    const response = await fetchConToken("auth/renew");
    const body = await response.json();
    // console.log(body);

    if(body.ok){
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      
      dispatch(login({
        uid:body.uid,
        name:body.name,
      }));

    }else{
      // no hace falta el swal,ya que lo sacaremos al login
      dispatch(checkingFinish());
    }
  }
}

const checkingFinish = () => ({
  type: types.authCheckingFinish,
});

export const startLogout = () => {
  return (dispatch, getState) => {
    /* las modificaciones del localStorage se consideran asíncronas */
    localStorage.removeItem("token");
    localStorage.removeItem("token-init-date");
    dispatch(eventLogout())
    dispatch(logout());
    
  };
}

const logout = () => ({
  type: types.authLogout,
});



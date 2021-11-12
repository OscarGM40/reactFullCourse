import { types } from "../types/types";

/*
Este es el objeto
{
   uid: jdhskjfd,
   name: 'fernando'
}

*/

//State no puede devolver null o undefined asi que hay que inicializarlo
//reducer para la auth
export const authReducer = (state={ uid:'',name:'' }, action) => {
  switch (action.type) {
    //login simplemente asigna un usuario nuevo
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName
      };
    //logout restablece el user a un objeto vacío
    case types.logout:
      return {};
    default:
      return state;
  }
};

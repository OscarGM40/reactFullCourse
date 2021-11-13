import { types } from "../types/types";

/*
Este es el objeto que queremos
{
   uid: jdhskjfd,
   name: 'fernando'
}
*/
const initialState = 
{
  uid:'',
  name:''
}
// State no puede devolver null o undefined asi que hay que inicializarlo.Pues es importante esto
// fijate que esta forma implica un xxxAction + un xxxreducer por subalmacén.Aparte está el store que es atómico / único y padre de todos los subalmacenes. 
export const authReducer = (state=initialState, action) => {
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

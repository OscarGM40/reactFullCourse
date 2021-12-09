import { types } from "../types/types";

const initialState = {
  checking: true,
  uid: null,
  name: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLoginSuccess:
      return {
        ...state,
        checking: false,
        uid: action.payload.uid,
        name: action.payload.name,
      };
    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
      };
    case types.authLogout:
      return {
        ...state, 
        uid: null,
        name: null,
      };
    default:
      return state;
  }
};

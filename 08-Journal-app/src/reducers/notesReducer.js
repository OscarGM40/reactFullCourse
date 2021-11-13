import { types } from "../types/types";

/* active = { 
   id:'',
   title:'',
   body:'',
   imageUrl:'',
   date:34344552
  } la date esta en milisecs */

const initialState = {
  notes: [],
  active: null, //si no hay una nota activa cambia la UI
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
         ...state,
        active: { ...action.payload }
      };
    case types.notesLoad:
      return {
         ...state,
        notes: [...action.payload ]
      };
    case types.notesUpdate:
      return {
         ...state,
        notes : state.notes.map( 
          note => note.id === action.payload.id 
          ? action.payload
          : note)
      };
    default:
      return state;
  }
};

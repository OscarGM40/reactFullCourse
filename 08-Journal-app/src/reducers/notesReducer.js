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
        active: { ...action.payload },
      };
    case types.notesAddNew:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
        active: { ...action.payload },
      };
    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.notesUpdate:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    case types.notesDelete:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
        active: null,
      };
    case types.notesLogoutCleaning:
      return {
        ...state,
        notes: [],
        active: null,
      };
    default:
      return state;
  }
};

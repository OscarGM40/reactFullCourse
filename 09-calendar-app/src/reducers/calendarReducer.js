import { types } from "../types/types";

const initialState = {
  events: [],
  activeEvent: null,
};

/* asi luce un event.Start y end deben de ser tipo Date
{
  id: 1,
  title: "Evento 1",
  start: moment().toDate()",
  end: "moment().add(2,'hours').toDate()",
  notes:"notas del evento 1"
  user:{
    _id:1,
    name:"Juan",
  }
}*/

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };
    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case types.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      };
    case types.eventUpdate:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };
    case types.eventDelete:
      return {
        ...state,
        events: state.events.filter(
          (event) => event.id !== state.activeEvent.id
        ),
        activeEvent: null,
      };
    case types.eventLoaded:
      return {
        ...state,
        events: [...action.payload],
      };
    case types.eventLogout:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

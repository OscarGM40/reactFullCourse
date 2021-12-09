import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";

export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event,
});

export const eventStartAddNew = (event) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;
    try {
      const response = await fetchConToken("events", event, "POST");
      const body = await response.json();

      if (body.ok) {
        event.id = body.evento._id;
        event.user = {
          _id: uid,
          name: name,
        };
        dispatch(eventAddNew(event));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const eventAddNew = (event) => ({
  type: types.eventAddNew,
  payload: event,
});

export const eventStartLoading = () => {
  return async (dispatch) => {
    try {
      const response = await fetchConToken("events");
      const body = await response.json();
      const events = prepareEvents(body.eventos);

      if (body.ok) {
        dispatch(eventLoading(events));
      }

    } catch (error) {
      console.log(error);
    }
  };
};

const eventLoading = (events) => ({
  type: types.eventLoaded,
  payload: events,
});

export const eventClearActiveEvent = () => ({
  type: types.eventClearActiveEvent,
});


export const eventStartUpdate = (event) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchConToken(`events/${event.id}`, event, "PUT");
      const body = await response.json();

      if (body.ok) {  
        dispatch(eventUpdate(event));
      }else{
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const eventUpdate = (event) => ({
  type: types.eventUpdate,
  payload: event,
});

export const eventStartDeleting = () => async (dispatch, getState) => {
  const { id } = getState().calendar.activeEvent;

  try {
    const response = await fetchConToken(`events/${id}`, {}, "DELETE");
    const body = await response.json();

    if (body.ok) {
      dispatch(eventDelete());
    }else{
      Swal.fire("Error", body.msg, "error").then((result) => {
        if (result.isConfirmed) {
          dispatch(eventClearActiveEvent());
        }
      }); 
    }
  } catch (error) {
    console.log(error);
  }
};

const eventDelete = () => ({
  type: types.eventDelete,
});

export const eventLogout = () => ({
  type: types.eventLogout,
});

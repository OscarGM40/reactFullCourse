import "@testing-library/jest-dom";
import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { JournalEntry } from "../../../components/journal/JournalEntry";
import { types } from "../../../types/types";
import { activateNote } from "../../../actions/notesActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {};

let store = mockStore(initialState);
store.dispatch = jest.fn(); //usar esta funcion me permite ver con qué se disparó el dispatch

// recuerda que si un componente recibe props se las tengo que pasar simulandolas
const nota = {
  id: 10,
  date: 0,
  title: "hola",
  body: "mundo",
  url: "https://algunlugarl.com/foto.jpg",
};
const wrapper = mount(
  <Provider store={store}>
    <JournalEntry {...nota} />
  </Provider>
);

describe("Pruebas en JournalEntry", () => {

  /*   beforeEach(() => {
    store = mockStore(initialState);
    store.clearActions();
  }); */

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de activar la nota correctamente", async () => {

    wrapper.find("div.journal__entry").prop("onClick")();
    
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith({
      type: types.notesActive,
      payload: {
        id: 10,
        title: "hola",
        body: "mundo",
        date: 0,
        url: "https://algunlugarl.com/foto.jpg",
      },
    }); 
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      activateNote(nota.id,{...nota}));
  });

});

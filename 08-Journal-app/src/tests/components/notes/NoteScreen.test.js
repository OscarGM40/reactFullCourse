import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";

import { activateNote } from "../../../actions/notesActions";
import { NoteScreen } from "../../../components/notes/NoteScreen";

jest.mock("../../../actions/notesActions", () => ({
  activateNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  auth: {
    uid: "123",
    name: "John",
  },
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    active: {
      id: 1234,
      title: "hola",
      body: "mundo",
    },
    notes: [],
  },
};

let store = mockStore(initialState);
store.dispatch = jest.fn();

const wrapper = mount(
  <MemoryRouter>
    <Provider store={store}>
      <NoteScreen />
    </Provider>
  </MemoryRouter>
);

describe("Pruebas en el NoteScreen", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    store.clearActions();
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar el activateNote al cambiar el formulario", async () => {
    wrapper.find("input[name='title']").simulate("change", {
      target: { name: "title", value: "adios" },
    });
    expect(activateNote).toHaveBeenCalled();
    expect(activateNote).toHaveBeenLastCalledWith(1234, {
      title: "adios",
      id:1234,
      body: "mundo",
    });

  });
});

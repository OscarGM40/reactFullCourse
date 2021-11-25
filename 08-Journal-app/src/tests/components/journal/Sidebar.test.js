import "@testing-library/jest-dom";
import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { Sidebar } from "../../../components/journal/Sidebar";

import { startLogout } from "../../../actions/authActions";
import { startNewNote } from "../../../actions/notesActions";

jest.mock("../../../actions/authActions", () => ({
  startLogout: jest.fn(),
}));

jest.mock("../../../actions/notesActions", () => ({
  startNewNote: jest.fn(),
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
      id: "134",
    },
    notes: [],
  },
};

let store = mockStore(initialState);
store.dispatch = jest.fn();

const wrapper = mount(
  <MemoryRouter>
    <Provider store={store}>
      <Sidebar />
    </Provider>
  </MemoryRouter>
);

describe("Pruebas en Sidebar", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    store.clearActions();
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar el startLogout al tocar el enlace", async () => {
    wrapper.find("button").simulate("click");
    expect(startLogout).toHaveBeenCalled();
  });

  test("debe de llamar el startNewNote al tocar el boton", async () => {
    wrapper.find(".journal__new-entry").simulate("click");
    expect(startNewNote).toHaveBeenCalled();
  });
});

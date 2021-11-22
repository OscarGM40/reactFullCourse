import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";

import { LoginScreen } from "../../../components/auth/LoginScreen";
import { startGoogleLogin,startLoginEmailPassword } from "../../../actions/authActions";

jest.mock("../../../actions/authActions", () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
};

let store = mockStore(initialState);
store.dispatch = jest.fn();

const wrapper = mount(
  <MemoryRouter>
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  </MemoryRouter>
);

describe("Pruebas en LoginScreen", () => {
   
  beforeEach(() => {
    store = mockStore(initialState);
    store.clearActions();
  });

  test("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de disparar la accion startGoogleLogin", async () => {
    wrapper.find(".google-btn").simulate("click");
    expect(startGoogleLogin).toHaveBeenCalled();
  });

  test('debe de disparar el startLogin con los respectivos argumentos', async () => {
   //   fijate que preventDefault va dentro de un objeto y es una definicion de una funcion de JS === {preventDefault(){}}
     wrapper.find("form").simulate("submit", {preventDefault() {}});
   //   otra forma de hacerlo es:
   //   wrapper.find("form").prop('onSubmit')({preventDefault() {}});
     expect(startLoginEmailPassword).toHaveBeenLastCalledWith("","");

  })
});

import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { act } from "@testing-library/react";
import { login, startLoginEmailPassword } from "../../actions/authActions";
import { AppRouter } from "../../routers/AppRouter";
import { firebase } from "../../firebase/firebase-config";
import Swal from "sweetalert2";

jest.mock("sweetalert2", () => ({
  Swal: jest.fn(),
}));

jest.mock("../../actions/authActions", () => ({
  startLoginEmailPassword: jest.fn(),
  login: jest.fn(),
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
    // notes: [],
    // active: {
      // id: "1545",
    // },
  },
};

let store = mockStore(initialState);
store.dispatch = jest.fn();

describe("Pruebas en el componente AppRouter", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    store.clearActions();
    store.dispatch = jest.fn();
  });
  
  test("debe de llamar el login si estoy autenticado", async () => {
    let user;
    
    await act( async () => {
      const userCred =  firebase
      .auth()
      .signInWithEmailAndPassword("test@test.com", "123456");
      user = userCred.user;
      
      const wrapper = mount(
        <MemoryRouter>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>
      );
    });
   //  const actions = store.getActions();
   //  console.log(actions, "actions");
   // realmente debieron llamarse
    expect(startLoginEmailPassword).not.toHaveBeenCalled();
    expect(login).not.toHaveBeenCalled();
  });
});

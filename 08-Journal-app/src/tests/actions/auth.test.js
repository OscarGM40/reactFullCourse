import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  login,
  logout,
  startLoginEmailPassword,
  startLogout,
  startRegisterWithEmailPasswordName,
} from "../../actions/authActions";
import { types } from "../../types/types";
import "@testing-library/jest-dom";

/* const user = {uid: 1234, displayName: "John"};
 
const authMock = {
    firebase: {
        auth: () => ({
            signOut: jest.fn(),
            signInWithEmailAndPassword: jest.fn( () => Promise.resolve({user})  )
        })
    }
};
 
jest.mock('../../../components/firebase/firebase-config', () => (authMock)); */

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {};
let store = mockStore(initialState);

describe("Pruebas con las acciones de Auth", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    store.clearActions();
  });

  test("login and logout should create the respective action", () => {
    const loginAction = login("123", "Juan");

    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        uid: "123",
        displayName: "Juan",
      },
    });

    const logoutAction = logout();
    expect(logoutAction).toEqual({
      type: types.logout,
    });
  });

  test("startLogout debe de disparar el logout", async () => {
    await store.dispatch(startLogout());
    const actions = store.getActions();
    // console.log(actions);

    expect(actions[0]).toEqual({
      type: types.logout,
    });
    expect(actions[1]).toEqual({
      type: types.notesLogoutCleaning,
    });
  });

  test("debe de iniciar el startLoginEmailPassword", async () => {
    await store.dispatch(startLoginEmailPassword("test@test.com", "123456"));

    const actions = store.getActions();
    // console.log(actions);

    expect(actions[0]).toEqual({
      type: types.uiStartLoading,
    });

    expect(actions[1]).toEqual({
      type: types.login,
      payload: {
        uid: "zONtAeDyYBZjNs1pf9h3S9btJGp1",
        displayName: null,
      },
    });

    expect(actions[2]).toEqual({
      type: types.uiFinishLoading,
    });
  });

  test("should fail the startRegisterWithEmailPasswordName", async () => {
    const action = await store.dispatch(
      startRegisterWithEmailPasswordName("test@test.com", "123456")
    );
   //  console.log(action, "action");
    expect(action).toBe("auth/email-already-in-use");
  });
  
});

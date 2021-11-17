import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Pruebas en el authReducer", () => {

   const defaultState = {
    uid: "",
    name: "",
  };

  test("should authenticate and set the user", () => {
    const loginAction = {
      type: types.login,
      payload: {
        uid: "1hfkjhh4",
        displayName: "John",
      },
    };

    const state2 = authReducer(defaultState, loginAction);
    expect(state2).toEqual({
      uid: "1hfkjhh4",
      name: "John",
    });
    
  });

  test("should logout and set the user to {}", () => {
      const logoutAction = {
         type: types.logout,
      };
   
      const state2 = authReducer(defaultState, logoutAction);
      expect(state2).toEqual({});
   });

   test("should return the default state when an unkown action is sent", () => {
      const state = authReducer(defaultState, { type: "UNKNOWN" });
      expect(state).toEqual(defaultState);
   })
});

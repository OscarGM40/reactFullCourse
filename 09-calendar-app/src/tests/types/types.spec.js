import { types } from "../../types/types";

describe("Pruebas en el types.js", () => {
  test("should match the content of the types", () => {

    expect(types).toEqual({
      uiOpenModal: "[ui] Open modal",
      uiCloseModal: "[ui] Close modal",

      eventSetActive: "[event] Set active",
      eventStartAddNew: "[event] Start add new",
      eventAddNew: "[event] Add new",
      eventClearActiveEvent: "[event] Clear active event",
      eventUpdate: "[event] Update event",
      eventDelete: "[event] Delete event",
      eventLoaded: "[event] Events loaded",
      eventLogout: "[event] Logout",

      authCheckingStart: "[auth] Checking",
      authCheckingFinish: "[auth] Checking finish",
      authLoginSuccess: "[auth] Login success",
      authStartRegister: "[auth] Register start",
      authStartTokenRenewal: "[auth] Start token renewal",
      authLogout: "[auth] Logout",
    });
  });

});

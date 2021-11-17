import { types } from "../../types/types";

describe("Pruebas en el types.js", () => {
  test("should match both objects content", () => {
    expect(types).toMatchObject({
      login: "[Auth] Login",
      logout: "[Auth] Logout",

      uiSetError: "[UI] Set Error",
      uiRemoveError: "[UI] Remove Error",

      uiStartLoading: "[UI] Start loading",
      uiFinishLoading: "[UI] Finish loading",
      notesAddNew: "[Notes] Add new note",
      notesActive: "[Notes] Set Active note",
      notesLoad: "[Notes] Load all notes",
      notesUpdate: "[Notes] Update a note",
      notesFileUrl: "[Notes] Update image url",
      notesDelete: "[Notes] Delete a note",
      notesLogoutCleaning: "[Notes] Logout Cleaning",
    });
  });
});

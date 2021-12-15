import { uiCloseModal, uiOpenModal } from "../../actions/uiActions";
import { uiReducer } from "../../reducers/uiReducer";

const initialState = {
  modalOpen: false,
};

describe("Pruebas en el uiReducer", () => {
 
  test("Debe de retornar el estado por defecto", () => {
    const state = uiReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test("Debe de abrir y cerrar el modal", () => {
    let action = uiOpenModal();
    let state = uiReducer(initialState, action);

    expect(state).toEqual({
      modalOpen: true,
    });

    action = uiCloseModal();
    state = uiReducer(initialState, action);

    expect(state).toEqual({
      modalOpen: false,
    });

  });

});

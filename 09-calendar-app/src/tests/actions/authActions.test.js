/* como voy a usar el store necesito este import */
import configureMockStore from "redux-mock-store";
/* como voy a usar acciones asincronas necesito a thunk */
import thunk from "redux-thunk";
/* como quiero ayuda con el tipado me traigo a jest-dom */
import "@testing-library/jest-dom";
import { startChecking, startLogin, startLogout, startRegister } from "../../actions/authActions";
import { types } from "../../types/types";
import Swal from "sweetalert2";

import * as fetchModule from "../../helpers/fetch";

/* debo configurar el store tras importarlo */
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/* de momento uso un objeto vacio como initial State para el store */
const initState = {};
/* ya si proveo una instancia de este store fake */
let store = mockStore(initState);

/* como voy a mirar en el localStorage le hago un mock a su función setItem,ojo que cambia un poco la sintaxis */
Storage.prototype.setItem = jest.fn();
Swal.fire = jest.fn();

describe("Pruebas en el authActions.js", () => {
  /* quiero reiniciar al state inicial en cada prueba,ya que las acciones que se hayan ejecutado lo cambian */
  /* Además,es buena práctica resetear cualquier mock de funciones(siempre limpiar todo antes de cada test) */
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  });

  test("startLogin actua correctamente", async () => {
    await store.dispatch(startLogin("test@test.com", "ABCabc123"));
    const actions = store.getActions();
    // console.log(actions, 'actions');

    // console.log(actions[0], 'actions[0]');

    expect(actions[0]).toEqual({
      type: types.authLoginSuccess,
      payload: {
        uid: expect.any(String), // <- podria hardcodearlo
        name: "Jane",
      },
    });
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token",
      expect.any(String)
    );
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token-init-date",
      expect.any(Number)
    );

    /* puedo acceder a los args de una funcion mockeada con functionName.mock.calls[pos][pos] */
    // console.log(localStorage.setItem.mock.calls[0][1]);
  });

  test("startLogin con un login incorrecto actua bien", async () => {
    await store.dispatch(startLogin("test@test.com", "lkfjslkfklf"));
    const actions = store.getActions();

    expect(actions).toEqual([]);

    expect(Swal.fire).toHaveBeenCalled();
    expect(Swal.fire).toHaveBeenCalledWith(
      "Error",
      "El password es incorrecto",
      "error"
    );
    expect(Swal.fire.mock.calls[0][0]).toBe("Error");
  });

  test("startRegister actua correctamente", async () => {
    fetchModule.fetchSinToken = jest.fn(() => ({
      json() {
        return {
          ok: true,
          name: "Jane",
          uid: "123456789",
          token: "ABCabc123",
        };
      },
    }));

    await store.dispatch(
      startRegister("paco el anchoa", "test03@test.com", "ABCabc123")
    );
    const actions = store.getActions();
    // console.log(actions);

    expect(actions[0]).toEqual({
      type: types.authLoginSuccess,
      payload: {
        uid: '123456789',
        name: "Jane",
      },
    });
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token","ABCabc123")
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token-init-date",
      expect.any(Number)
    );
  });

  test("startChecking correcto",async () => {

    fetchModule.fetchConToken = jest.fn(() => ({
      json() {
        return {
          ok: true,
          name: "Jane",
          uid: "123456789",
          token: "asf",
        };
      },
    }));

    await store.dispatch(startChecking());
    const actions = store.getActions();
    // console.log(actions);

    expect(actions[0]).toEqual({
      type: types.authLoginSuccess,
      payload: {
        uid: '123456789',
        name: "Jane",
      },
    });

    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token","asf");
    
   });

   test("startLogout correcto", async () => {
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(startLogout());
    const actions = store.getActions();
    // console.log(actions);

    expect(actions[0]).toEqual({
      type: types.eventLogout,
    });

    expect(localStorage.removeItem).toHaveBeenCalledTimes(2);
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");
    expect(localStorage.removeItem).toHaveBeenCalledWith("token-init-date");
   })
});

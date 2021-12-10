/* como voy a usar el store necesito este import */
import configureMockStore from "redux-mock-store";
/* como voy a usar acciones asincronas necesito a thunk */
import thunk from "redux-thunk";
/* como quiero ayuda con el tipado me traigo a jest-dom */
import "@testing-library/jest-dom";
import { startLogin } from "../../actions/authActions";
import { types } from "../../types/types";
import Swal from "sweetalert2";


/* debo configurar el store tras importarlo */
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/* de momento uso un objeto vacio como initial State para el store */
const initState = {};
/* ya si proveo una instancia de este store fake */
let store = mockStore(initState);

/* como voy a mirar en el localStorage le hago un mock a su función setItem */
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
    expect(localStorage.setItem).toHaveBeenCalledWith("token",expect.any(String));
    expect(localStorage.setItem).toHaveBeenCalledWith("token-init-date",expect.any(Number));

    /* puedo acceder a los args de una funcion mockeada con functionName.mock.calls[pos][pos] */
    // console.log(localStorage.setItem.mock.calls[0][1]);

     });

     test("startLogin con un login incorrecto actua bien", async () => {

       await store.dispatch(startLogin("test@test.com",'lkfjslkfklf'));
       const actions = store.getActions();

      expect(actions).toEqual([]);

      expect(Swal.fire).toHaveBeenCalled();
      expect(Swal.fire).toHaveBeenCalledWith("Error","El password es incorrecto","error");
      expect(Swal.fire.mock.calls[0][0]).toBe("Error");
       
     });
     
});

import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";

import { RegisterScreen } from "../../../components/auth/RegisterScreen";
import { types } from "../../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  auth: {},
  ui: {
    msgError: null,
    loading: false,
  },
};

let store = mockStore(initialState);

const wrapper = mount(
  <MemoryRouter>
    <Provider store={store}>
      <RegisterScreen />
    </Provider>
  </MemoryRouter>
);

describe("Pruebas en el RegisterScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    store.clearActions();
  });

  test("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de hacer el dispatch de la acción respectiva", () => {
    const emailControl = wrapper.find(".auth__input[name='email']");
    //   console.log(emailControl.exists())
    // recuerda que el customHook requiere el target y el value(yo creo que es por ser un control de formulario,no por ser  un hook)
    emailControl.simulate("change", {
      target: {
        name: "email",
        value: "",
      },
    });

    wrapper.find("form").simulate("submit", { preventDefault() {} });
    const actions = store.getActions();
   //  console.log(actions);

    expect(actions[0]).toEqual({
      type: types.uiSetError,
      payload: "Email is not valid",
    });
  });

  test('debe de mostrar la caja de alerta con el error', () => {
    const initialState = {
      auth: {},
      ui: {
        msgError: "Email is not valid",
        loading: false,
      },
    };
    const store = mockStore(initialState);

    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <RegisterScreen />
        </Provider>
      </MemoryRouter>
    );

    expect(wrapper.find(".auth__alert-error").text().trim()).toBe(initialState.ui.msgError);
    expect(wrapper.find(".auth__alert-error").exists()).toBe(true);

    
  })
  
});

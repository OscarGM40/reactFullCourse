import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import AppRouter from "../../routers/AppRouter";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Pruebas en el componente AppRouter", () => {
  test("Debe de hacer match con la snapshot", () => {
    const initialState = {
      auth: {
        checking: true,
      },
    };
    const store = mockStore(initialState);

    const wrapper = mount(
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h5").exists()).toBe(true);
  });

  test("Debe de mostrar la ruta pública", () => {
    const initialState = {
      auth: {
        checking: false,
        uid: null, //no autenticado
      },
    };
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".login-container").exists()).toBe(true);
  });

  test("Debe de mostrar la ruta privada", () => {
    const initialState = {
      auth: {
        checking: false,
        uid: "ABC123", //autenticado
      },
      calendar: {
        events: [],
        activeEvent: null,
      },
      ui: {
        modalOpen: false,
      },
    };
    const store = mockStore(initialState);

    const wrapper = mount(
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".calendar-screen").exists()).toBe(true);
  });
});

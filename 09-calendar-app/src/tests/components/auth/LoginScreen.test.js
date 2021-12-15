import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import LoginScreen from "../../../components/auth/LoginScreen";
import { startLogin, startRegister } from "../../../actions/authActions";
import Swal from "sweetalert2";

jest.mock("../../../actions/authActions", () => ({
  startLogin: jest.fn(),
  startRegister: jest.fn(),
}));

jest.mock('sweetalert2', () => ({
  fire: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {};
const store = mockStore(initialState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <LoginScreen />
  </Provider>
);

describe("Pruebas en el LoginScreen", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  })
  
  test("Debe de hacer match con la snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de llamar a startLogin", () => {
    wrapper.find('input[name="lEmail"]').simulate("change", {
      target: { name: "email", value: "test@test.com" },
    });

    wrapper
      .find('input[name="lPassword"]')
      .simulate("change", { target: { name: "password", value: "ABCabc123" } });

    wrapper
      .find("form")
      .at(0)
      .simulate("submit", {
        preventDefault: () => {},
      });
    expect(startLogin).toHaveBeenCalled();
    expect(startLogin.mock.calls[0][0]).toBe("test@test.com");
    expect(startLogin.mock.calls[0][1]).toBe("ABCabc123");
  });

  test("No hay registro si las contraseñas son diferentes", () => {
    
    wrapper
      .find('input[name="rPassword"]')
      .simulate("change", {
        target: { name: "rPassword", value: "ABCabc123" },
      });
      
    wrapper
      .find('input[name="rPassword2"]')
      .simulate("change", {
        target: { name: "rPassword2", value: "ABCabc12345" },
      });
      
    wrapper
      .find("form").at(1).prop('onSubmit')({preventDefault(){} });

    expect(startRegister).not.toHaveBeenCalled();
    expect(Swal.fire).toHaveBeenCalled();

  });

  test("Debe de llamar a startRegister con campos válidos", () => {
    wrapper.find('input[name="rName"]').simulate("change", {
      target: { name: "rName", value: "randomName" },
    });

    wrapper
      .find('input[name="rEmail"]')
      .simulate("change", { target: { name: "rEmail", value: "test04@test.com" } });    
    
    wrapper
      .find('input[name="rPassword"]')
      .simulate("change", { target: { name: "rPassword", value: "ABCabc123" } });
    
    wrapper
      .find('input[name="rPassword2"]')
      .simulate("change", { target: { name: "rPassword2", value: "ABCabc123" } });
    
    wrapper
      .find("form").at(1).prop('onSubmit')({preventDefault(){} });
    
    expect(startRegister).toHaveBeenCalled();
    expect(startRegister.mock.calls[0][0]).toBe("randomName");
    expect(startRegister.mock.calls[0][1]).toBe("test04@test.com");
    expect(startRegister.mock.calls[0][2]).toBe("ABCabc123");


  });   
});

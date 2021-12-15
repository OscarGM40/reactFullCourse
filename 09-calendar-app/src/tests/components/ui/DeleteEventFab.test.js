import React from "react";
import '@testing-library/jest-dom';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";


import { DeleteEventFab } from "../../../components/ui/DeleteEventFab";
import { eventStartDeleting } from "../../../actions/eventActions";

jest.mock('../../../actions/eventActions', () => ({
    eventStartDeleting: jest.fn()
    }));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const initialState = {}

const store = mockStore(initialState);
/* realmente sólo quiero saber con qué se dispara el dispatch,asi que le hago un mock */
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <DeleteEventFab />
  </Provider>
);

describe("Pruebas en el DeleteEventFab", () => {

  test("Debe de hacer match con el snapshot", () => {
   
    expect(wrapper).toMatchSnapshot();
    
  });

  test("Debe de llamar al eventStartDelete", () => {
    const button = wrapper.find("button");
    button.simulate("click");
    
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledTimes(1);

  });

});

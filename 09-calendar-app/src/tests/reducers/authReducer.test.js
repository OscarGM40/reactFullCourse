import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";
import '@testing-library/jest-dom';

const initialState = {
  checking: true,
  uid: null,
  name: null,
};

describe('Pruebas en el authReducer', () => {

  test('el authLogin funciona correctamente', async () => {
    const action = {
      type: types.authLoginSuccess,
      payload: {
        uid: '123',
        name: 'Juan',
      },
    };

    const state = authReducer(initialState, action);

    expect(state).toEqual({
      checking: false,
      uid: '123',
      name: 'Juan',
    });
  });

  test('el checking finish funciona correctamente', async () => {
    const action = {
      type: types.authCheckingFinish,
    };

    const state = authReducer(initialState, action);

    expect(state).toStrictEqual(
      expect.objectContaining({
      checking: false,
      uid: null,
      name: null,
      })
    );
  });

  test('el authLogout funciona correctamente', async () => {
    const action = {
      type: types.authLogout,
    };

    const state = authReducer(initialState, action);

    expect(state).toEqual(expect.objectContaining({
      checking: false,
      uid: null,
      name: null,
    }));
  });

  test('retorna el initialState si la action no existe', async () => {
    const action = {
      type: 'SOME_ACTION',
    };

    const state = authReducer(initialState, action);

    expect(state).toEqual(initialState);
  })
  
})

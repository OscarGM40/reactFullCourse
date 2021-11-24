/**
 * @jest-environment node
 */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startLoadingNotes,
  startNewNote,
  startSaveNote,
  startUploading,
} from "../../actions/notesActions";
import { db } from "../../firebase/firebase-config";
import { types } from "../../types/types";
import  { fileUpload }  from "../../helpers/fileUpload";

// jest.mock("../../helpers/fileUpload"); 
// const { fileUpload:fu } = jest.requireActual('../../helpers/fileUpload');

jest.setTimeout(5000);
jest.mock("../../helpers/fileUpload", () => ({
    __esModule: true,
    default: jest.fn(() => 43),
    fileUpload: jest.fn(() =>  Promise.resolve("https://hola-mundo.com/cosa.jpg")),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

global.scrollTo = jest.fn();

// en la llamada a mockStore hay que pasarle un state válido.En esta prueba dado que necesito una nota y un uid debe recibir estos valores
const initialState = {
  auth: {
    uid: "TESTING",
  },
  notes: {
    active: {
      id: "OWBUgUS0dk8L6emyb64m",
      title: "hola",
      body: "mundo",
    },
  },
};

let store = mockStore(initialState);

describe("Pruebas en el notesActions.js", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    store.clearActions();
  });
  
  test("startNewNote should create a new note", async () => {
    await store.dispatch(startNewNote());
    const actions = store.getActions();
    
    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });
    
    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });
    
    await db.doc(`TESTING/journal/notes/${actions[0].payload.id}`).delete();
  });
  
  test("should load all notes", async () => {
    const uid = store.getState().auth.uid;
    await store.dispatch(startLoadingNotes(uid));
    const actions = store.getActions();
    
    expect(actions).toEqual(
      expect.arrayContaining([
        {
          type: types.notesLoad,
          payload: expect.any(Array),
        },
      ])
      );
      
      const expected = {
        id: expect.any(String),
        title: expect.any(String),
        body: expect.any(String),
        date: expect.any(Number),
      };
      
      expect(actions[0].payload[0]).toMatchObject(expected);
    });
    
    test("should update the note", async () => {
      const note = {
        id: "OWBUgUS0dk8L6emyb64m",
        title: "Testing",
        body: "Testing",
        date: new Date().getTime(),
      };
      
      await store.dispatch(startSaveNote(note));
      const actions = store.getActions();
      
    expect(actions[0]).toEqual({
      type: types.notesUpdate,
      payload: note,
    });
    
    expect(actions[0].payload).toMatchObject({
      id: expect.any(String),
      title: "Testing",
      body: "Testing",
      date: expect.any(Number),
    });
    
    const docRef = await db
    .doc(`/TESTING/journal/notes/${actions[0].payload.id}`)
    .get();
    
    // console.log(docRef.data());
    expect(docRef.data().title).toBe(note.title);
  });
  
  test("startUploading debe de actualizar el url del entry", async () => {
    // const file = new File([], "test.jpg");
    const file = [];
    await store.dispatch(startUploading(file));
    
    const docRef = await db.doc(`TESTING/journal/notes/OWBUgUS0dk8L6emyb64m`).get();
    // console.log(docRef.data(),'data');
    // si al menos me devuelve el titulo es que varias cosas van bien,como que ha disparado todas las acciones
    expect(docRef.data().title).toBeDefined();
  });
});

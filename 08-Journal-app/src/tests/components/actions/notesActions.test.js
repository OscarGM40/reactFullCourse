/**
 * @jest-environment node
 */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startLoadingNotes,
  startNewNote,
  startSaveNote,
} from "../../../components/actions/notesActions";
import { db } from "../../../components/firebase/firebase-config";
import { types } from "../../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// en la llamada a mockStore hay que pasarle un state válido.En esta prueba dado que necesito una nota y un uid debe recibir estos valores
const initialState = {
  auth: {
    uid: "TESTING",
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
    // console.log(actions)

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

  /* export const startSaveNote = ( note ) => {
  return async(dispatch,getState) => {
    const uid = getState().auth.uid;

     const { id, url=null,...rest} = note;

    try {
      await db.doc(`${uid}/journal/notes/${note.id}`)
      .update({ url, ...rest })  
      dispatch(refreshNote(note))
      Swal.fire("Saved",rest.title, 'success');
    } catch (error) {
      console.log(error)
    }
  }  
} */
  test("should update the note", async () => {
    const note = {
      id: "OWBUgUS0dk8L6emyb64m",
      title: "Testing",
      body: "Testing",
      date: new Date().getTime(),
    };

    await store.dispatch(startSaveNote(note));
    const actions = store.getActions();
    // console.log(actions)

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

     console.log(docRef.data());
    expect(docRef.data().title).toBe(note.title);
  });
});

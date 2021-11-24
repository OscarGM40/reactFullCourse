import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import { db } from "../firebase/firebase-config";

// podriamos pasar el uid de cada usuario que tiene en Firebase como argumento pero también podemos usar una callback que nos proporciona thunk y nos devuelve el state.El nombre el que quiera,es el segundo argumento del return(getState aqui)
export const startNewNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(), //mls actuales
    };
    
    try {
      /* Desde firebase 9 el método es addDoc y no add */
      const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
      // console.log(docRef);
      dispatch(activateNote(docRef.id,newNote))
      dispatch(addNewNote(docRef.id,newNote))
      
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNewNote = (id,note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note,
  },
});

export const startSaveNote = ( note ) => {
  return async(dispatch,getState) => {
    // fijate que necesito el uid del usuario luego uso la cb
    const uid = getState().auth.uid;

    //  si no viene el url lo borro pues da error el undefined
    /* if(!note.url){
      delete note.url;
    } */
    
    // en realidad no necesito el delete,puedo cambiar el undefined por un null ya que puedo guardar un null  
    // saco las propiedades
     const { id, url=null,...rest} = note;
    //  console.log(url)
     /*  console.log(note,'note')
      console.log(id,'id') */

    /* const noteToFirestore = { ...note };
    delete noteToFirestore.id; */

    try {
      // db.collection es para trabajar en una coleccion
      // await db.collection(`path...`)
      // lo que quiero ahora es trabajar en un documento,
      await db.doc(`${uid}/journal/notes/${note.id}`)
      .update({ url, ...rest })  
      dispatch(refreshNote(note))
      Swal.fire("Saved",rest.title, 'success');
    } catch (error) {
      console.log(error)
    }

  }  
}

export const refreshNote = (note) => ({
  type:types.notesUpdate,
  payload: note
})

export const activateNote = (id,note) => ({
  type: types.notesActive,
  payload: { id, ...note }
}) // <- fijate que de esta forma las acciones sincronas devuelven un objeto luego return => ({})


export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid)
    dispatch(setNotes(notes))
  }
}

// no haría falta romper la referencia porque estoy creando un nuevo arreglo y no apunto al de el state!
export const setNotes = (notes) => ({
  type:types.notesLoad,
  payload: notes
})

// como es una tarea asincrona es obvio qué debo usar
export const startUploading = (file) => {
  return async ( dispatch, getState ) => {
    const { active: activeNote } = getState().notes;

    Swal.fire({ 
      title: 'Uploading...',
      text: 'Please wait...',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });
    // llamo a mi helper que me devuelve el campo secure_url
    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;
    // console.log(fileUrl,'fileUrl')

    dispatch(startSaveNote(activeNote))
    Swal.close();
    
  }
}

export const startDeleteNote = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    
    try {
      await db.doc(`${uid}/journal/notes/${id}`).delete();
      dispatch(deleteNote(id));
    } catch (error) {
      console.log(error);
    }
  }
}

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id
})

export const notesLogout = () => ({
  type: types.notesLogoutCleaning
})


import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { activateNote } from "../actions/notesActions";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  // ojo con el renombramiento del prehistoric
  const dispatch = useDispatch()
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange,reset ] = useForm(note);

  /* al pasarle un initial state al hook los formValues ya estan poblados luego puedo desestructuralo */
  const { body, title } = formValues;

  // useRef permite almacenar una variable mutable que no va a redibujar todo el componente si cambia
  const activeId = useRef(note.id);

  //   diria que sólo usó el useRef para almacenar la variable,pero creo que me equivoco y realmente tenia que hacerlo asi
   useEffect(() => {
     if(note.id !== activeId.current){
        reset(note);
        activeId.current = note.id;
      }  
   },[ note, reset ])
   
/* Sin el efecto tambień funciona  
  if(note.id !== formValues.id) {
     reset(note);
  }
esto confirma que no era necesario el useRef.Porque se vuelve a redibujar el componente?? */

  // fijate que el custom hook me hace todo ya,asinto
  useEffect(() => {
    // console.log(formValues)
    dispatch(activateNote(formValues.id, { ...formValues}))
  },[formValues,dispatch])

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          name="body"
          cols="30"
          rows="2"
          placeholder="What happened today"
          className="notes__textarea"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        { note.url && (
          <div
            className="notes__image"
            style={{
              backgroundSize: "cover",
              backgroundImage: "url(https://picsum.photos/400/250?random=2)",
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

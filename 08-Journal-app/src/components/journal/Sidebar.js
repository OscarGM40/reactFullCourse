import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/authActions";
import { startNewNote } from "../../actions/notesActions";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  

  const dispatch = useDispatch()
  const { name } = useSelector( state => state.auth) 

  // fijate que con esta forma disparo aqui la accion y en el otro file este método a su vez también dispara tras la asincronia el borrado de redux.Interesante,realmente puede programarse lo que se quiera
  const handleLogout = () => {
    dispatch(startLogout());
    // setTimeout(() => window.location.href="/auth/login",300)
  }

  const handleAddNew = () => {
    dispatch(startNewNote());
  }
  
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> {name}</span>
        </h3>

        <button className="btn"
          onClick={handleLogout}>Logout</button>
      </div>

      <div className="journal__new-entry"
        onClick={handleAddNew}>
        <i className="far fa-calendar-plus fa-5x "></i>
        <p className="mt-5">New Entry</p>
      </div>

      <JournalEntries />
      
    </aside>
  );
};

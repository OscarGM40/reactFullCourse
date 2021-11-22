import React from "react";
import moment from "moment";
// si quiero la traduccion importar esto ↓↓
// import "moment/locale/es";
import { useDispatch } from "react-redux";
import { activateNote } from "../../actions/notesActions"



export const JournalEntry = ({ id, title, body, date,url }) => {

  const dispatch = useDispatch()
  const noteDate = moment(date);

  const setActiveNote = () => {
      dispatch(activateNote(id,{title,body,date,url}));
  }
  
  
  return (
    <div className="journal__entry pointer animate__animated animate__flipInY animate__fast"
      onClick={setActiveNote}>
      {
        url &&
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        >
        </div>
      }
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{ noteDate.format("dddd") }</span>
        <h4>{ noteDate.format("Do") }</h4>
      </div>
    </div>
  );
};

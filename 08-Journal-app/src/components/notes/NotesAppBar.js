import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notesActions";
import moment from "moment";
import "moment/locale/es"

export const NotesAppBar = () => {
   
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const inputRef = useRef();
  // console.log(active,'active')

  const handleSave = (e) => {
    e.preventDefault()
    dispatch(startSaveNote(active));
  };

  const handlePicture = (e) => {
   //   no necesito ni siquiera una label,solo simular el click,pero que grande eres Fernando
   //  document.querySelector("#fileSelector").click();
   inputRef.current.click()
  }

  const handleFile = (e) => {
   const file = e.target.files[0];
   if(file){
      dispatch(startUploading(file))
   }
  }

  return (
    <div className="notes__appbar">
      <span>{moment().format("LL")}</span>


      <input 
      //   id="fileSelector"
        ref={inputRef}
        type="file"
        style={{display:"none"}}
        onChange={(e) => handleFile(e)} />


      <div className="">
        <button onClick={handlePicture} className="btn">
          Picture
        </button>
        <button onClick={handleSave} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};

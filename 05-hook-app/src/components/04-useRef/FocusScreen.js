import React, { useRef } from "react";
import "../02-useEffect/effects.css";

const FocusScreen = () => {

   const inputRef = useRef();

const handleClick = () => {
   // document.querySelector('input').select();
   inputRef.current.select();
}

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input 
       ref={inputRef}
       type="text"
       className="form-control" 
       placeholder="Su nombre" 
       />

      <button 
      className="btn btn-outline-primary mt-3"
      onClick={handleClick}
      >Focus</button>
    </>
  );
};

export default FocusScreen;

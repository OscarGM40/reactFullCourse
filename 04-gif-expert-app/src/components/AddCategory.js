import React, { useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    //console.log("HandleInputChange llamado")
  };

  const handleSetCategory = (oldArray, category) => {
    if (!category) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Debes ingresar un texto",
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
      });

      setInputValue("");
      return [...oldArray];
    } else {
      const existe = oldArray.find(
        (categoryValue) => categoryValue === category
      );

      setInputValue("");
      return existe ? [...oldArray] : [category,...oldArray];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("handlesubmit")

    /*   if(inputValue.trim().length > 2){
     setCategories((cat) => [...cat,inputValue])
     setInputValue('')
      } */
    setCategories((oldArray) => handleSetCategory(oldArray, inputValue));
    //console.log("Submit hecho");
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* <p>{inputValue}</p> */}
      <input type="text" value={inputValue} onChange={handleInputChange} 
      placeholder="Buscar gifs..."/>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;

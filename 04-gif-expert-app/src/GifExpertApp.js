import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ( { defaultCategories= ["Dragon Ball"] } ) => {
  const [categories, setCategories] = useState(defaultCategories);

  /* const handleAdd = () => {
   //Forma Uno: directamente lo asignamos
    setCategories(
      [ ...categories,"Hunter X"]); 
   //forma Dos: con una Arrow Function.muy util desde otro componente
   setCategories(cats => [...cats,"Hunter X"])
} */

  return (
    <>
      <h1 className="titulo">Gif Expert App</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;

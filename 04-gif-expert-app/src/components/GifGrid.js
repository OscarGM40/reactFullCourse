import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p className="animate__animated animate__flash">Loading...</p>}

      <div className="card-grid">
        {images.map((img) => (
          // console.log(img) con el operador spread mando todas
          // despues recojo solo las que quiera.Muy útil
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}


export default GifGrid;

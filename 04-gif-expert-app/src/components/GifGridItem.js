import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({title,url}) => {
   
   return (
      <div className="card animate__animated animate__bounce">
         <img src={url} alt={title}></img>
         <p>{title}</p>
      </div>
   )
}

GifGridItem.propTypes = {

   title: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
}

export default GifGridItem;


//Tarea 
// 1- Configurar Enzyme
// 2- Configurar Enzyme to JSON
// 3- debe de mostrar el componente correctamente
// * shallow + wrapper.toMatchSnapShot()

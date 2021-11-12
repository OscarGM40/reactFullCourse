import React from "react";
import PropTypes from "prop-types";

//functional component
//const PrimeraApp = ({saludo:salute="moncho"}) => {
const PrimeraApp = ({saludo,subtitulo}) => {

/* if(!saludo) {
  throw new Error("El saludo es necesario")
} */ //Esto no es eficiente para controlar el Error

  /*  const saludo = {
    nombre: 'Fernando',
    edad:34
  } */ //Los objetos no pueden ser interpretados en una expresioon embebida(podria usar JSON.stringify)

  return (
    <>
      <h1> {saludo} </h1>
      {/* <pre>{JSON.stringify(saludo,null,2)}</pre> */}
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.propTypes ={
  saludo : PropTypes.any.isRequired,
  otra: PropTypes.number
}
PrimeraApp.defaultProps = {
  subtitulo:'Soy un subtitulo'
}

export default PrimeraApp;

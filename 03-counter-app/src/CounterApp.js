import React,{useState} from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

   const [ counter, setCounter ] = useState(value);

  const handleAdd = (e) => {
    setCounter(counter + 1)
  //  setCounter(_=>_+1);
  };

  const handleSubstract = () => {
     setCounter(counter-1)
  }

  const handleReset = () => {
     setCounter(value)

  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+1</button>
      {/*2 <button onClick={handleAdd()}>+1</button> MAL,no se debe ejecutar en este punto*/}
      {/* <button onClick={(e)=> handleAdd(e)}>+1</button> */}
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.any,
};

CounterApp.defaultProps = {
   value: 10
}

export default CounterApp;

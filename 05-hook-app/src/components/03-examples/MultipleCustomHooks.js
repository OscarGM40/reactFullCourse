import React from "react";
import useCounter from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

const MultipleCustomHooks = () => {

  const { counter,increment,decrement } = useCounter(1);

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
  //console.log(state)
  const { author ,quote } = !!data && data[0];
//console.log(data)
  

  

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
      loading ? 
         (
            <div className="alert alert-info text-center">Loading...</div>
         ) : 
         (
            <blockquote className="blockquote text-right mb-2">
               <p className="mb-0">{quote}</p>
               <footer className="blockquote-footer">{author}</footer>
            </blockquote>
         )
      }


      <button 
      className="btn btn-primary mb-0"
      onClick={() => increment(1)}>
         Siguiente Quote
      </button>

      <button 
      className="btn btn-primary mb-0"
      onClick={() => decrement(1)}>
   Anterior Quote
      </button>

    </>
  );
};

export default MultipleCustomHooks;

import React, { useLayoutEffect, useRef, useState } from "react";
import useCounter from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

const pTag = useRef()
const [boxSize, setboxSize,] = useState({})

  useLayoutEffect(() => {
console.log(pTag.current.getBoundingClientRect())
setboxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-right mb-2">
        <p 
        className="mb-0"
        ref={pTag}
        >{quote}</p>
      </blockquote>

<pre>
   {JSON.stringify(boxSize,null,2)}
</pre>


      <button className="btn btn-primary mb-0" onClick={() => increment(1)}>
        Siguiente Quote
      </button>

      <button className="btn btn-primary mb-0" onClick={() => decrement(1)}>
        Anterior Quote
      </button>
    </>
  );
};

import React, { useMemo, useState } from "react";
import "../02-useEffect/effects.css";
import useCounter from "../../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";


export const MemoHook = () => {

  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <>
    <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />

{/* <p>{ procesoPesado(counter) }</p> */}
<p>{ memoProcesoPesado }</p>


      <button className="btn btn-secondary" onClick={() => increment(1)}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

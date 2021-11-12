import React, { useState } from 'react';
import '../02-useEffect/effects.css'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

const RealExampleRef = () => {

const [show, setShow] = useState(false);

   return (
      <>
       <h1>Real Example ref</h1>  
       <hr />
       { show && <MultipleCustomHooks />}

       <button 
       className="btn btn-primary mt-1 d-block"
       onClick={() =>
       setShow(!show)}

       >
          Show/HIde
         </button>
      </>
   )
}

export default RealExampleRef

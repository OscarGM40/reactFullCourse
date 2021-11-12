import React, { useEffect, useState } from "react";

const Message = () => {

const [coords,  setCoords,  ] = useState({
   x:0,
   y:0
})
const { x , y } =coords;


  useEffect(() => {
    //console.log("Componente montado");
    const mouseMove = (e) => {
       const coords = { x: e.x , y: e.y };
       setCoords(coords);
       //console.log(coors)
       //console.log(" :D ");
    }

    window.addEventListener('mousemove', mouseMove)

/*    window.addEventListener('mousemove', (e) =>{
      //console.log(e)
      const coors = { x: e.x , y: e.y };
      console.log(coors)
   }) */

    return () => {
     
      window.removeEventListener('mousemove', mouseMove);

       console.log("Componente desmontado");

    };
  }, []);

  return (
    <>
      <h3>Eres genial</h3>
      <p>
         x:{x} y:{y}
      </p>
    </>
  );
};

export default Message;

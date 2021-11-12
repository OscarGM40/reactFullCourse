import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


//este hook almacena un objeto como estado.El objeto tiene dos props,un array llamado data y un boleano para el loading.El array lo llenara getGifs en base al valor del input(category).
export const useFetchGifs = (category) => {
  
   const [state, setState] = useState({
    data: [],
    loading: true,
  });


  useEffect(() => {
        
      setTimeout(() => {
           
           getGifs(category)
           .then(imgs => //imgs es el array que devuelve getGifs.
              setState({
                 data: imgs,
                 loading: false
              })
           );
        },200)

    }, [category]); 


  return state; //state es un objeto con un array y un boleano <- es el estado de este custom hook.El setter sólo lo usé aqui
};

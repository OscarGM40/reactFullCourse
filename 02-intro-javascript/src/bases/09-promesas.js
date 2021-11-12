//PROMESAS
import { getHeroesById} from "./../bases/08-import-export";

/* const promesa = new Promise((resolve, reject) => {
   setTimeout(() => {
      //Tarea importar getHeroeById
      //console.log("Promesa ejecutada al de dos segundos")
      const TylerHerro = getHeroesById(2);
      console.table(TylerHerro)
     // resolve(TylerHerro)
      reject("no se pudo encontrar el héroe")
   }, 2000);
});

promesa
.then((x) => {
   console.log("Then de la promesa",x)
})
.catch((err) => {
   console.warn(err," <- warning")
}) */

//En cuanto hagamos que una funcion devuelva una promesa esa funcion es una promesa
const getHeroesByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let heroe1 = getHeroesById(id);
      if(!heroe1){
         reject("No hay heroe pa ese id")
      } 
     resolve(heroe1);
    }, 2000);
  });
  //return promesa; <- mejor retornar la funcion de orden superior sin almacenarla
};

getHeroesByIdAsync(4)
//.then((x)=> console.table(x))
.then(console.table)
//.catch((err) => console.error(err)) <- no hace falta pasarles la referencia
//algunas funciones van a imprimir el primer argumento que reciban,como warn,log,table o error 
.catch(console.error)



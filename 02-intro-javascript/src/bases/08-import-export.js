//IMPORT-EXPORT Y METODOS PARA ARRAYS
//HAY VARIAS FORMAS DE IMPORTAR;LA PRIMERA ES CON IMPORT
//EN EL ARCHIVO A EXPORTAR HAY QUE EXPORTARLO CON EXPORT
//importamos por defecto tras configurar el ESLINT
import heroes,{owners}  from './../data/heroes'; //usa el atajo imp
//a las exportaciones no pr defecto se las llama con importaciones individuales

//el metodo find devuelve el primero que coincida con el filtro
const getHeroesById = (idUser) => heroes.find(({id}) => id === idUser); //<-incluso podemos desestructurar
//heroes.find(hero => hero.id === idUser);

//el metodo filter se usa caundo queremos todas las coincidencias
const getHeroesByOwner = (ownerGiven) => heroes.filter(({owner}) => owner === ownerGiven);

console.log(getHeroesById(2),"id2");

console.log(getHeroesByOwner('DC'),'by owner');

console.log(owners,'owners')

export { 
   getHeroesById,
   getHeroesByOwner
}
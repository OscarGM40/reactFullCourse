//exportaciones multiples.Se declaran constantes
//export const heroes = [
//si es una sola podemos usar por defecto.No se usa const

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
//export default [
    const heroes =[
   {
       id: 1,
       name: 'Batman',
       owner: 'DC'
   },
   {
       id: 2,
       name: 'Spiderman',
       owner: 'Marvel'
   },
   {
       id: 3,
       name: 'Superman',
       owner: 'DC'
   },
   {
       id: 4,
       name: 'Flash',
       owner: 'DC'
   },
   {
       id: 5,
       name: 'Wolverine',
       owner: 'Marvel'
   },
];

const owners = ['DC','Marvel'];

//export default heroes;

export {
    owners,
    heroes as default,
}
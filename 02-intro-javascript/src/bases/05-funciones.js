//FUNCIONES EN JS

//No se recomienda usar funciones asi
/* function saludar(nombre){
   return `Hola, ${nombre}`;
} */

const saludar = function(nombre){
   return `Hola, ${nombre}`;
} //estas funciones se pueden transformar a funciones lambda

const saludar2 = (nombre) => {
   return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;


//saludar=30;

console.log(saludar('Goku'))
console.log(saludar2('Vegeta'))
console.log(saludar3('Gohan'))

const getUser = () => ({
   uid:'ABC123',
   username:'El_Papi1502'
})

console.log(getUser(),'getUser')

//Tarea
//Transformar a funcion flecha que devulva el objeto implicito.Probarlo
/* function getUsuarioActivo(nombre){
   return{
      uid:'ABC456',
      username:nombre
   }
}; */
const getUsuarioActivo = (nombre) => ({
   uid:'ABC456',
   username:nombre
})

const usuarioActivo = getUsuarioActivo('Fernando')
console.log(usuarioActivo)
//Desestructuracion

const persona = {
   nombre:'Tony',
   edad:45,
   clave:'IronMan',
   rango:'Soldado'
}
//PODEMOS desestructurar y reasignar esa propiedad con otro nombre
const {edad,nombre:nombre2,clave} = persona;

//es  muy tedioso tener que usar la instancia
/* console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.clave) */

console.log(nombre2)
console.log(edad)
console.log(clave,"clave")

//Algo que es muy usado es usar la desestruracion directamente en el argumento.
//Tmb es muy usado poner valores por defecto
const retornaPersona = ({clave,nombre,edad,rango="Capitan"}) => {
   //const {edad,clave,nombre} = usuario
  // console.log(edad,nombre,rango);

  return {
     nombreClave:clave,
     años:edad,
     latlng:{
        lat:14.2343,
        lng:34.34343
     }
  }
}

//const avenger = retornaPersona(persona);
//podemos profundizar mas de un nivel en la desestructuracion
const {nombreClave,años,latlng:{lat,lng}} =retornaPersona(persona);
console.log(nombreClave,años,"wewe")
console.log(lat,lng,"lat")
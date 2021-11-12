//OPERADOR CONDICIONAL TERNARIO Y SU VERSION CORTA

const activo = true;

//FORMA NORMAL
/* let mensaje='';

if(activo){
   mensaje = 'activo'
}else{
   mensaje = 'inactivo'
} */

const mensaje = (!activo) ? "activo" : "inactivo";

//Esto es ultraeficaz, ya que nunca a va procesar lo de la derecha si es false,hay que usar esto
const mensaje2 = activo && 'Activo'

console.log(mensaje)
console.log(mensaje2)
console.log("Hola mundo");
//Variables y constantes

//valores que no cambian se les debe declarar como constantes 
const nombre ='Fernando';
const apellido = "Herrera"

let valorDado = 5;
//let y const nunca se re-inicializan pues da error
valorDado = 4;
console.log(nombre,apellido,valorDado)

if(true){
   //esta variable es de ambito local
   let valorDado = 6;
   console.log(valorDado,"dentro");
}
//son ambitos o scopes diferentes
console.log(valorDado,"afuera");
//ARREGLOS EN JAVASCRIPT

//const arreglo = new Array(100);
const arreglo = [1,2,3,4];
/* arreglo.push(1)
arreglo.push(2)
arreglo.push(3)
arreglo.push(4) *///No deberiamos usar push pues modifica el objeto,Se añade con SPREAD

//let arregloDos = arreglo;
let arregloDos = [...arreglo,5];
//arregloDos.push(5)
//la funcion map necesita una funcion callback y devuelve un array nuevo
const arregloTres = arregloDos.map(function(numero){
   return numero*2;
});

console.log(arreglo);
console.log(arregloDos);
console.log(arregloTres);
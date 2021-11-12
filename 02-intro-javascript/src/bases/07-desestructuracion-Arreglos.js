//ASIGNACION DESESTRUCTURANTE DE ARREGLOS

const personajes =['goku','vegeta','trunks'];

//Si necesitamos extraer un valor del arreglo hay una manera
//como estamos con arreglos se usan corchetes y no llaves

//el nombre no es importante,va a sacar los elementos por su posicion
const [ saiyan1,saiyan2 ] = personajes;
console.log(saiyan1,saiyan2);

//Entonces,debemos sacar los anteriores si por ejemplo quiero a trunks solo? NO
const [,,calzon]= personajes;
console.log(calzon,'calzon');

//queremos extraer las letras y numeros de esta funcion
const retornaArreglo = () => {
   return ['ABC',123]
}

const [letras,numeros] = retornaArreglo();
console.log(letras,'<-letras',numeros,'<-numeros');

//Tarea 
//1.el pimer valor del areglo se llamara nombre
//2. el segundo se llamara setNombre
const usaEstado = (valor)   => {
   return [valor, ()=>{ console.log('hola mundo')}]
}

const arr = usaEstado('Fernando');
console.log(arr);
arr[1](); //es mucho mas logico desestructurar el array

const [nombre,setNombre] = usaEstado('goku');
console.log(nombre)
setNombre();










/* console.log(personajes[0])
console.log(personajes[1])
console.log(personajes[2]) *///No se recomienda esta forma
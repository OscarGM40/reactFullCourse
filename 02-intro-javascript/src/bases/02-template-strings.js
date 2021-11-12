//TEMPLATE STRINGS
const nombre = 'Fernando';
const apellido = 'Herrera';

//const nombreCompleto = nombre + ' ' + apellido;
//Los template Strings interpretan hasta los espacios y saltos de linea.OJO!
const nombreCompleto = `
${nombre}
${apellido}
${1+1}
 `;
console.log(nombreCompleto);

 function getSaludo(nombre){
    return 'Hola '+ nombre;
 }

//las template strings tmb interpretan la ejecucion de funciones
console.log(`Este es un texto: ${getSaludo('Juan')}`);
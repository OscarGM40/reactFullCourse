//OBJETOS LITERALES

const persona = {
   nombre: 'tony',
   apellido:'Stark',
   edad:45,
   direccion:{
      ciudad:'New York',
      zip:545545,
      lat:14.3232,
      lng:34.923232323
   }
};
//para que no salga un objeto sin nombre podemos darle uno
//usa console.table para mejor visualizacion
console.table({persona});
console.table(persona);

//Si queremos hacer una copia del objeto asignarlo a otro no es copiarlo
//ambas variables apuntan al mismo objeto,comparten la misma referencia
/* const persona2 = persona;
persona2.nombre='Peter';
console.table(persona2);
console.table(persona) */
//NUNCA SE DEBEN COPIAR OBJETOS ASI,POR REFERENCIA,React no acepta este tipo de mutaciones

//SE DEBE USAR EL SPREAD OPERATOR
//EL SPREAD OPERATOR COPIA EL OBJETO POR VALOR,NO POR REFERENCIA,SIENDO DOS OBJETOS DIFERENTES
const persona2 = {...persona}
persona2.nombre='Peter';
console.table(persona2,"persona2");
console.table(persona,"persona") 
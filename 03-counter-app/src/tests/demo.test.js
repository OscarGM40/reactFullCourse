//Siempre debe contener al menos una prueba
//Es bueno englobar los test es un describe
describe('Pruebas en el archivo demo.test.js',()=>{
   
   test('deben de ser iguales los strings', () => {
      //1-Inicializacion Arrange
      const mensaje ="Hola mundo";
   
      //2-Estimulo Act
      const mensaje2 = `Hola mundo`;
   
      //3-Observar y afirmar Assert
      expect(mensaje).toBe(mensaje2);
      expect(mensaje).not.toBe(mensaje2+"fsdf");

   })
})


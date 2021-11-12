import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
   
   test('get saludo debe retornar hola y el nombre dado', () => {
      
      const nombre = 'Fernando';

      const saludo = getSaludo(nombre)

      expect(saludo).toBe('Hola ' + nombre);
   })
   
   test('getSaludo debe de retornar hola asinto', () => {
      const nombre = 'Asinto';
      expect(getSaludo(nombre)).toBe('Hola Asinto');
      expect(getSaludo(nombre)).not.toBe('Hola asinto');
   })
   
   //getSaludo debe de retornar Hola Carlos si no hay argumento

   test('getSaludo debe de retornar Carlos por defecto', () => {
      
      expect(getSaludo()).toBe('Hola Carlos');
   })
   
})

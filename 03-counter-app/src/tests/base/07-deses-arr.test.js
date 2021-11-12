import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en desestructuracion', () => {
   test('debe de retornar un String y un numero', () => {
      
      // const arr = retornaArreglo();
      const [letras,numeros] = retornaArreglo();

      // expect(arr).toEqual(['ABC', 123]);

      expect(typeof letras).toBe('string')
      expect(letras).toBe('ABC')

      expect(typeof numeros).toBe('number')
      expect(numeros).toBe(123);

   })
   
})

import { getImagen } from "../../base/11-async-await"

describe('Pruebas con async-await y fetch', () => {
   
   test('debe de retornar el url de la imagen', async() => {
      //la funcion ya entra hasta adentro
      const url = await getImagen();

      expect(url.includes('https://')).toBe(true);
   })
   
})

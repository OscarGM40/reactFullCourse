import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con el helper getGifs', () => {
   
   test('Debe de traer 4 elementos', async () => {
      
      const gifs = await getGifs("One punch");

      expect(gifs.length).toBe(4);
   })

   test('Debe de proporcionarse una categoria', async() => {
      
      const gifs = await getGifs("");

      expect(gifs.length).toBe(0);
   })
   
   
})

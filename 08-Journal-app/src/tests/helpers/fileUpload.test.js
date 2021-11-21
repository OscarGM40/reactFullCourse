import { fileUpload } from "../../helpers/fileUpload";
import cloudinary from "cloudinary"


cloudinary.config({ 
   cloud_name: 'oscargm40', 
   api_key: '945155439291529', 
   api_secret: 'FDFZ6-ew1dWVJ-TOhjfvOOcInP0',
   secure: true
 });

describe('Pruebas en el helper fileUpload', () => {
   
   it('should upload a file and return the URL', async () => {
      const resp = await fetch("https://cdn.pixabay.com/photo/2021/10/23/17/19/horse-6735455_960_720.jpg");
      
         const blob = await resp.blob();
         const file = new File([blob], 'horse.jpg')
         const url = await fileUpload(file);

         // console.log(url)
         
         expect(typeof url).toBe('string');

         // borrar imagen por id
         const segments = url.split('/');
         const imageId = segments[segments.length - 1].split(".")[0];
         const folderName = "react-journal-app"

         cloudinary.v2.api.delete_resources(`${folderName}/${imageId}`,{},() => {

         }     
         );

   })

   test('should return an error',async () => {
      const file = new File([], 'horse.jpg');
      const url = await fileUpload(file);
      
      expect(url).toBe(null);
      
   })
   
   
})



export const fileUpload = async (file) => {

   const cloudUrl='https://api.cloudinary.com/v1_1/oscargm40/upload';

   const form = new FormData();
   form.append('file', file);
   form.append('upload_preset','react-journal-app')
   form.append('folder', 'react-journal-app');
   
   try {
      const resp = await fetch(cloudUrl,{
         method: 'POST',
         body: form
      });
      if(resp.ok){
         const cloudRest = await resp.json();
         // recuerda que debo retornar el campo secure_url
         return cloudRest.secure_url;
      }else {
         return null;
         // throw await resp.json();
      }
   } catch (error) {
      console.log(error)
   }
}
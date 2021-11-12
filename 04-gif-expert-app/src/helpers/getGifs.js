
// hace la peticion y devuelve un array de objetos con las 3 propiedades que usamos en la app,el id,el title y la url como string.A getGifs le llama el customHook useFetchGifs
export  const getGifs = async ( category ) => {
   const url =
     `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=4&api_key=mSBe4KgXuI2eCZduwNIPriQqbmzIAlX5`;

   const resp = await fetch(url);
   const { data } = await resp.json();

   const gifs = data.map((img) => {
     return {
       id: img.id,
       title: img.title,
       url: img.images?.downsized_medium.url,
     };
   });

   return gifs;
   
 }; 
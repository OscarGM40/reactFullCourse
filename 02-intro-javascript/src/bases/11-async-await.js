//ASYNC Y AWAIT
//Esta seria la forma con promesas
/* const getImagenPromesa = () => 
   new Promise(resolve => 
   resolve('https//gfjvkldfgkldfj'))

getImagenPromesa()
.then(console.log) */

//Vamos a crear lo mismo pero usando async-await

(async () => {
  try {
    const apiKey = "mSBe4KgXuI2eCZduwNIPriQqbmzIAlX5";
    const respuesta = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const data = await respuesta.json();
    const { url } = data.data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
})()

//getImagen();

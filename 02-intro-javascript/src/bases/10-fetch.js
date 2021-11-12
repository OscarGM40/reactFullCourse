//API FETCH
const apiKey ='mSBe4KgXuI2eCZduwNIPriQqbmzIAlX5';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then(response => response.json())
.then(({ data })=> {
    const {url} = data.images.original;
    console.log(url);
    const img =document.createElement('img');
    img.src= url;
    document.body.append(img);
})
.catch(console.warn);


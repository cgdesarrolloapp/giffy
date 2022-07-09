   
   
const apiKey = 'j7Id1OsREtGQ58dSYf9z4bfNcAgl1b4J'

//parametro si no se manda es objeto vacio y si no sera mapache   
export default function getGifs({keyword = 'mapache'} = {}){  
//fetch no lo soportan todos los navegadores
//template string `   
const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
   return fetch(apiURL)
   .then(res => res.json())
   .then(response =>{
     const {data = []} = response
     const gifs = data.map(image =>{
        const {images, title, id} = image
        const {url} = images.downsized_medium
        return {title, id, url}
     })
     return gifs
   })
}
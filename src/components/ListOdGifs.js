import React, { useEffect, useState } from 'react';
import Gif from "./Gif";
import getGifs from '../services/getGifs';

export default function ListOfGifs({params}){
    const {keyword} = params 
    console.log("keyword",keyword)
    const [gifs, setGifs] = useState([])
    useEffect(function () {
      getGifs({keyword})
        .then(gifs => setGifs(gifs))
        //El segundo parametro de la funcion ahorita indica que solo se ejecutara 1 vez (arreglo vacio) sin ese paremtro se ejecutaria cada vez que se renderiza el componente OJO Loop Infinito
        //En este caso se coloco keyword como dependencia del efecto entonces cada q cambie la keyword se redenerizara de nuevo
    }, [keyword])
        //formas de llama componente
          //gifs.map(singleGif => <Gif key={singleGif.id} title={singleGif.title} id={singleGif.id} url={singleGif.url} />)
          //gifs.map(singleGif => <Gif key={singleGif.id} {...singleGif} />)
    return gifs.map(({id, title, url}) => 
            <Gif 
                id={id}
                key={id} 
                title={title} 
                url={url} />)
        
}
import React from "react";
import './Gif.css'

export default function Gif({title, id, url}){
            return (
            <a href={`#${id}`} className="Gif">
              <h4>{title}</h4>
              {/* <small>{id}</small> */}
              <img id={id} src={url} alt={title} />
            </a>)
}
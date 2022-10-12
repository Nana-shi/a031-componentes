import React from "react"
import {InfoUsuario} from "./InfoUsuario"
export function CardVideo(){
    const titulo = "Título do vídeo"
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")}
    return(
    <div className="box-pagina-principal media1" onClick={reproduzVideo}>
        <img src="https://picsum.photos/400/400?a=1 " alt=""></img>
        <h4>{titulo}</h4>
        <InfoUsuario/>
    </div>
    )
}
import React from 'react'
import NavBar from '../Component/NavBar/NavBar'
import Titulo from '../Component/Titulo/Titulo'

function RoutesApp() {

  let variableTitulo = '10% Descuento'
  //ESTADOS PARA PROPS

  let variableSubtitulo = 'Con pago en efectivo'
  
  return (
    
    <div>

    <NavBar/>

    <Titulo titulo={variableTitulo} subtitulo={variableSubtitulo}/> 
    {/*PROPS QUE SE KUEGO SE RECUPERAN EN TITULO Y SE APLICAN*/}

    </div>

  )
}

export default RoutesApp
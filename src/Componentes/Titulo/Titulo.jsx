import React from 'react'

function Titulo(props) {
  //RECUPERAMOS LAS PROPS
  
  return (

    <div>
      
      <h1>{props.titulo}</h1>
      {/*RECIBIMOS COMO OBJETO LA PROP PARA QUE SE MUESTRE, PERO LO PUEDO UTILIZAR EN UN CONSOLE LOG, ETC */}

      <h2>{props.subtitulo}</h2>

    </div>
 
  )

}

export default Titulo
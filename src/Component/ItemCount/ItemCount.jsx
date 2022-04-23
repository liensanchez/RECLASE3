import React from 'react'
import {useState, useEffect} from 'react'

function ItemCount() {
  const [ count, setCount] = useState(0)
  //con el array nombramo lo q va dentro del useState,van 2 cosas, lo que ponemos y una funcion, nombrandolo en un array nos facilita su uso despues, 
  //nombramos count y por convencion tenemos que usar SET, entonces ahora la funcion se llama setCount


  const manejarCount =()=>{

    setCount(count+1)
    //setCount, para setear los nuevos valores con esta funcion
    //usamos count +1 xq es el nombre de la constante y no usamos otras opciones como count++, count +=1 

  }


  //useEffect es una funcionn 
  useEffect(()=>{
    console.log('llamada a api1 esta primera pero se ejecuta con useEffect se ejecuta siempre')
  })
  //react carga linea x linea entonces con useEffect, se 'salta ' en el orden de ejecucion, renderiza todo y LUEGO se ejecuta el useEffect,
  //llamadas de APIS y cargas pesadas van con useEffect

  useEffect(()=>{
    console.log('llamada a api2')//solo se ejecuta una sola vez luego de montado el componente
  })


  console.log('llamada a api3 normal')
  return (

    <>  

    <label >{count} </label>
    <button onClick={manejarCount}>+1</button>
    {/*llamamos a count xq asi se llama esa constante */}
    </>

  )
}

export default ItemCount
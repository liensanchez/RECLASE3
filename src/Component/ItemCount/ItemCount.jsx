import React from 'react'
import {useState, useEffect} from 'react'

function ItemCount() {
  const [ count, setCount] = useState(0)
  //con el array nombramo lo q va dentro del useState,van 2 cosas, lo que ponemos y una funcion, nombrandolo en un array nos facilita su uso despues, 
  //nombramos count y por convencion tenemos que usar SET, entonces ahora la funcion se llama setCount

  const[bool, setBool]= useState(true)


  const manejarCount =()=>{

    //ponemos un limite en la cantidad de produtos
    if (count==10){

      //sumamos 0 a partir del 10
      setCount(count+0)

    }else{

      //mientras no lleguemos a 10 nos suma +1
      setCount(count+1)

    }

    //EXPLICACION SET========================================setCount(count+1)
    //setCount, para setear los nuevos valores con esta funcion
    //usamos count +1 xq es el nombre de la constante y no usamos otras opciones como count++, count +=1 

  }


  //useEffect es una funcionn 
  useEffect(()=>{
    console.log('llamada a api1 esta primera pero se ejecuta con useEffect se ejecuta siempre')
  })
  //react carga linea x linea entonces con useEffect, se 'salta ' en el orden de ejecucion, renderiza todo y LUEGO se ejecuta el useEffect,
  //llamadas de APIS y cargas pesadas van con useEffect


  useEffect(()=>{ //  CON DEPENDECIA VACIA (ARRAY VACIO)
    console.log('llamada a api2 dependecia vacia')//solo se ejecuta una sola vez luego de montado el componente
  }, []) //solo se acutaliza cuando su dependecia(LO Q ESTA ENTRE CORCHETES CAMBIIE]



  useEffect(()=>{ //CON DEPENDENCIA
    console.log('llamada a api3 CON DEPENDENCIA')
  }, [bool]) // este solo se acutaliza cuando su dependecia(bool) cambie


  console.log('llamada a api3 normal')
  return (

    <>  

    <label >{count} </label>
    <button onClick={manejarCount}>+1</button>

    <button onClick={()=>setBool(!bool)}>cambio booleanos</button>
    {/*llamamos a count xq asi se llama esa constante */}
    </>

  )
}

export default ItemCount
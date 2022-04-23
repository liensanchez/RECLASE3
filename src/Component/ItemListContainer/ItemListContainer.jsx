import React from 'react';
import { Card, Button} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';


function ItemListContainer(props) {
  return (
    <>
      <h3>{props.greeting} </h3>

      <ItemCount/>
    </>
  )
}

export default ItemListContainer
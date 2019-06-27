import Item from '../Item'
import React from 'react'
import './ItemList.css'
import {CardGroup} from 'react-bootstrap'

const ItemList = (props) => {

  const items = props.items.map((item) => {
    return (
      <Item 
        onAddToCart={props.addToCart}
        key={item.id}
        item={item} 
      />
    )
  })

  return (
    <CardGroup>
      {items}
    </CardGroup>
  )
}

export default ItemList
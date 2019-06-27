import React from 'react'
import './Item.css'
import {Card, Button} from 'react-bootstrap'

const Item = (props) => (
<Card>
  <Card.Img  
    src={props.item.thumbnail} 
    alt={props.item.name}
    className="thumbnail"
  />
  <Card.Body>
    <Card.Title className="name">
      {props.item.name}
    </Card.Title>
    <Card.Text>
      Price: ${props.item.unitPrice}
    </Card.Text>
    <Button variant="secondary"className="btn-add"
        onClick={() => props.onAddToCart(props.item)}>
        Add to Cart
    </Button>
  </Card.Body>
</Card>
)

export default Item
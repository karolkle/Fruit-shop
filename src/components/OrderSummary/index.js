//import './OrderSummary.css'
import React from 'react'
import './OrderSummary.css'
import {Button} from 'react-bootstrap'

const OrderSummary = (props) => {

  const { cart, onRemoveFromCart } = props

  const cartItems = Object.values(cart.itemsMap).map((cartItem) => {
      
      return (
      
      <div key={cartItem.id} className="item-row">
        <div className="card-item">{cartItem.name}</div>
        <div className="card-quantity">{cartItem.quantity}</div>
        <button onClick={() => onRemoveFromCart(cartItem.id)}
            className="btn-remove">
           x
          </button>
      </div>
  )})
      
  return (
    
    
    <div className="order-summary">
      <div className="cost">
        <h3><b>Total Cost: </b></h3> ${props.cart.totalCost}
      </div>
      <div class="cart-header">
        <div class="cart-item-title">Item</div>
        <div class="cart-quantity-title">Quantity</div>
        <div></div>
       
        </div>

      <div className="cart-items">
        { cartItems }
      </div>
      
      <Button variant="secondary" onClick={props.onCheckout}
        disabled={(props.cart.totalCost === 0)}
        className="btn-secondary">
        Check Out
      </Button> 
    </div>
  )
}

export default OrderSummary
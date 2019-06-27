import OrderSummary from '../../components/OrderSummary'
import ItemList from '../../components/ItemList'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './home.css'

//import './Home.css'
import {
  removeFromCart,
  addToCart,
} from '../../reducer/cart'


const Home = (props) => (
  <div className="home">
    <Row className="Desktop">
      <Col xs={10}>
    <ItemList 
      addToCart={props.addToCart}
      items={props.items} 
    /></Col>
    <Col xs={2}>
    <OrderSummary 
      onRemoveFromCart={props.removeFromCart}
      onCheckout={props.checkout}
      items={props.items}
      cart={props.cart}
    /></Col></Row>
     <Row className="Mobile">
      <Col xs={8}>
    <ItemList 
      addToCart={props.addToCart}
      items={props.items} 
    /></Col>
    <Col xs={4}>
    <OrderSummary 
      onRemoveFromCart={props.removeFromCart}
      onCheckout={props.checkout}
      items={props.items}
      cart={props.cart}
    /></Col></Row>
  </div>
)

const mapStateToProps = state => ({
  items: state.items,
  cart: state.cart
})

const mapDispatchToProps = dispatch => bindActionCreators({
  checkout: () => push('/checkout'),
  removeFromCart,
  addToCart,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
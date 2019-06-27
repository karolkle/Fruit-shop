import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import { Container} from 'react-bootstrap'
import Home from './containers/home'
import {Navbar, Nav} from 'react-bootstrap';
import CheckOut from './containers/checkout'
//import ItemList from './components/ItemList'


const App = () => (
  <div>
  <Navbar bg="light" variant="secondary">
                <Navbar.Brand>
                    <Link to="/">Fruits Shop</Link>
                </Navbar.Brand>
            <Nav className="mr-auto">
                   <Nav.Link href="/">Shop</Nav.Link>
                   <Nav.Link href="/about">About</Nav.Link>
                   <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
            </Navbar>
  
  <Container>
    <Route exact path="/checkout" component={CheckOut}/>
    <Route exact path="/" component={Home}/>
    
   
  </Container>
</div>
)

export default App;


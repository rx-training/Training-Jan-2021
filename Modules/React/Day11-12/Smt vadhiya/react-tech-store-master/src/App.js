import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {FaHome} from 'react-icons/fa'
import styled from 'styled-components'

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/Default.js";
import Cart from './pages/CartPage'



import {Route, Switch} from 'react-router-dom'
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { SideCart } from "./components/SideCart";
import { Footer } from "./components/Footer";

class App extends Component {
  render() {  
    return (
    <>
      {/** navbar sidebar cart, footer */}
      <Navbar />
      <Sidebar />
      <SideCart />
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" exact component={SingleProduct} />

        <Route path="/cart" exact component={Cart} />
        <Route component={Default} />
      </Switch>
      
      <Footer />
    </>  
    ) 
  }
}

export default App;

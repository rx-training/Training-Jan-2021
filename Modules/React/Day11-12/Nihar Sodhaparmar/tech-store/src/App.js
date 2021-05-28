import React, { Component } from "react";
import "./App.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";
import Contact from "./pages/ContactPage";
import Cart from "./pages/CartPage";
import Default from "./pages/Default";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar, cart, footer */}
        <Navbar />
        <Sidebar />
        <SideCart />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>

        <Footer />
      </>
    );
  }
}

export default App;

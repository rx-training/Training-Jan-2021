import React, { Component } from "react";
import "./App.css";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import Cart from "./pages/CartPage";
import Default from "./pages/DefaultPage";
import SingleProduct from "./pages/SingleProductPage";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <>
        {/* navbar , sidebar , cart */}
        <Navbar />
        <Sidebar />
        <SideCart />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" exact component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/products/:id" exact component={SingleProduct} />
          <Route path="/cart" exact component={Cart} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </>
    );
  }
}

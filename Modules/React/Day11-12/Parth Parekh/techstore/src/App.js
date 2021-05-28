import React, { Component } from "react";
import "./App.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/Default.js";
import Cart from "./pages/CartPage";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SideCart from "./components/SideCart";
class App extends Component {
    render() {
        return (
            <>
                {/* navbar , sidebar ,cart */}
                <Navbar />
                <Sidebar></Sidebar>
                <SideCart />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route exact path="/products" component={Products} />
                    <Route path="/products/:id" component={SingleProduct} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Default} />
                </Switch>
                <Footer></Footer>
            </>
        );
    }
}

export default App;

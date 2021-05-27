import './App.css';
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/HomePage.js';
import Products from './pages/ProductsPage.js';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import SingleProduct from './pages/SingleProductPage';
import Default from './pages/Default.js';
import Cart from './pages/CartPage';
import {Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidecart from './components/SideCart';
import Footer from './components/Footer';
class App extends React.Component {
  render()
  {
    return <>
    {/*navbar,sidebar,cart,footer */}
    <Navbar/>
    <Sidebar/>
    <Sidecart/>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about"  component={About}/>
          <Route path="/contact"  component={Contact}/>
          <Route path="/Products" exact component={Products}/>
          <Route path="/Products/:id" component={SingleProduct}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
      </Switch>
      <Footer/>
    </>;
  }
}

export default App;

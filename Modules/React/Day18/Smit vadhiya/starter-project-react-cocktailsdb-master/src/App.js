import React from "react";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/cocktail/:id"  component={SingleCocktail} />
        <Route path="*"  component={Error} />
      </Switch>
    </Router>
  )
}

import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import SingleCocktail from './pages/SingleCocktail'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/cocktail/:id' exact component={SingleCocktail} />
          <Route path='*' exact component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

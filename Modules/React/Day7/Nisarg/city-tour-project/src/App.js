import './App.scss';
import { render } from '@testing-library/react';
import NavBar from './components/NavBar/Navbar';
import React from 'react';
import TourList from "./components/TourList";
function App() {
  render()
  {
    return(<React.Fragment>
      <NavBar/>
      <TourList/>
    </React.Fragment>
    );
  }
}

export default App;

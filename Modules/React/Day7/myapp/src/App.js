import React from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ToureList from './components/TourList';

function App() {
  return (
    
      <React.Fragment>
        <Navbar></Navbar>
        <ToureList></ToureList>
      </React.Fragment>
   
  );
}

export default App;

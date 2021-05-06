import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*1st*/
function Greeting()
{
  return "Hello world";
}
ReactDOM.render(
  <Greeting/>,
  <StudentIDCard/>,
  document.getElementById('root')
);



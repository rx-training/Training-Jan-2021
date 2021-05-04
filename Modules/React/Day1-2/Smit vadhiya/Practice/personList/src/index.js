import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './index.css'

const Person = ({img,name,job,children}) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (
    <div className ="person">
      <img src={url} alt="personImage"/>
      <h4>{name}</h4>
      <h4>{job}</h4>
    {children}
    </div>
  )
}

const PersonList = () => {
  return (
    <div className="personlist">
      <Person img ="34" name="john"  job="developer" />
      <Person img ="22" name="bob"  job="designer" >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, sit.</p>
      </Person>
      <Person img ="35" name="david"  job="the boss" />
    </div>
  )
}

ReactDOM.render(<PersonList />,
  document.getElementById("root"))

reportWebVitals();

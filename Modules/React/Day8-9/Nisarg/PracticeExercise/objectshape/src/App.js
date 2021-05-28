import React, { Component } from 'react'
import "./App.css";
import PropTypes from "prop-types";
//object with particular shape
const Person=({person:{img,name,age,info}})=>{
  console.log(info);
  return (
    <article>
      <img src={img} alt="person"/>
      <h4>Name:{name}</h4>
      <h4>Age:{age}</h4>
      <h4>Info:{info || "default info about the person"}</h4>
    </article>
  );
};
/*
Person.PropTypes={
  person:PropTypes.shape({
  img:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  age:PropTypes.number.isRequired,
  info:PropTypes.string.isRequired
})};
*/
Person.defaultProps={
  person:{
    info:"default info about the person"
  }
}
class PersonList extends Component
{
  state=
  {
    people:[
      {
        id:1,
        img:"https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name:"John",
        age:24
      },
      {
        id:2,
        img:"https://randomuser.me/api/portraits/thumb/men/34.jpg",
        name:"Bob",
        age:27
      },
      {
        id:3,
        img:"https://randomuser.me/api/portraits/thumb/men/87.jpg",
        name:"Peter",
        age:36,
        info:'some info about peter'
      }
    ]
  };
  render()
  {
    return(
      <section>
        {this.state.people.map((person)=>(
          <Person 
              key={person.id} 
              person={person}

              />
        ))}
      </section>
    );
  }
}

 class App extends Component {
  render() {
    return <PersonList/>;
    
  }
}
export default App;


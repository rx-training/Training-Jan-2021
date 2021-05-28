import React, { Component } from 'react'
import "./App.css";
import PropTypes from 'prop-types';
const Person=({img,name,age,info})=>{
  return (
    <article>
      <img src={img} alt="person"/>
      <h4>Name:{name}</h4>
      <h4>Age:{age}</h4>
      <h4>Info:{info}</h4>
    </article>
  );
};
/*
Person.PropTypes={
img:PropTypes.string.isRequired,
name:PropTypes.string.isRequired,
age:PropTypes.number.isRequired
};
*/
Person.defaultProps={
  img:"https://randomuser.me/api/portraits/thumb/men/45.jpg",
  names:"James doe",
  age:34,
  info:"default info about person"
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
              img={person.img} 
              name={person.name} 
              age={person.age}
              info={person.info}

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

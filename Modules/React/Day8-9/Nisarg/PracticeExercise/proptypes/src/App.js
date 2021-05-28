import React, { Component } from 'react'
import "./App.css";
import PropTypes from 'prop-types';
const Person=({img,name,age})=>{
  return (
    <article>
      <img src={img} alt="person"/>
      <h4>Name:{name}</h4>
      <h4>Age:{age}</h4>
    </article>
  );
};
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
import React, { Component } from 'react'
import PropTypes from 'prop-types'


const Person = ({person:{img,name,age,info}}) =>{
  return(
    <article>
      <img src={img} alt="person" />
      <h4>Name: {name}</h4>
      <h4>Age: {age}</h4>
      <h4>Info: {info || "Some info about person"}</h4>
    </article>
  )
}
Person.propTypes = {
  // img: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // age: PropTypes.number.isRequired,
  // info: PropTypes.string.isRequired
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired
  })
}
Person.defaultProps = {
  // img: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
  // name: "Chirag",
  // age: 22,
  // info: "Some info about person"
  person:{
    img: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
    name: "Chirag",
    age: 22,
    info: "Some info about person"
  }
}

class PersonList extends Component {
  state={
    people:[
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name: "John",
        age: 24
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/men/25.jpg",
        name: "Bob",
        age: 27
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
        name: "James",
        age: 34,
        info: "Some info about James"
      }
    ]
  }

  render(){
    return(
      <section>
        {this.state.people.map(person=>(
          <Person key={person.id} person={person} />
        ))}
      </section>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <PersonList />
      </div>
    )
  }
}


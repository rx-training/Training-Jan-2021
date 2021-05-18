import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Person = ({person : {img, name , age, info}}) => {
    return (
        <article>
            <img src={img} alt="ie" />
            <h3>{name}</h3>
            <h4>{age}</h4>
            <h5>{info || "default info"}</h5>
        </article>
    )
}

Person.propTypes = {
    person : PropTypes.shape({
        name : PropTypes.string.isRequired,
        img : PropTypes.string.isRequired,
        age : PropTypes.number.isRequired,
        info : PropTypes.string.isRequired
    })
} 

export default class PersonList extends Component {
    state = {
        data : [
            {
                id : 1,
                img : "https://randomuser.me/api/portraits/thumb/men/75.jpg",
                name : "Navin",
                age : 24,
                info : "this is something like info"
            },
            {
                id : 2,
                img : "https://randomuser.me/api/portraits/thumb/men/71.jpg",
                name : "Bavin",
                age : 25,
                info : "this is something like info"
            },
            {
                id : 3,
                img : "https://randomuser.me/api/portraits/thumb/men/11.jpg",
                name : "Kevin",
                age : 27,
                info : "this is something like info"
            },
        ]
    }
    render() {
        return (
            
            <div>
                {this.state.data.map((person)=> 
                    <Person 
                        key={person.id}
                        person={person}
                    />
                )}
            </div>
        )
    }
}

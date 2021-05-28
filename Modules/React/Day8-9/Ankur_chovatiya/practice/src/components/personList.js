import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Person = ({img , name , age , info , address:{city , pincode , state}}) => {
    return(
        <article>
            <img src={img}></img>
            <h4>Name : {name}</h4>
            <h4>age : {age}</h4>
            <h5>Info : {info}</h5>
            <p>Address : {city || 'india'}  {pincode}  {state} </p> 
        </article>
    )
}

Person.propTypes = {
    img : PropTypes.string.isRequired , 
    name : PropTypes.string.isRequired ,
    age : PropTypes.number.isRequired,
    info : PropTypes.string.isRequired,
    address : PropTypes.shape({
        city : PropTypes.string,
        pincode : PropTypes.number.isRequired,
        state : PropTypes.string.isRequired
    })
}

Person.defaultProps = {
    img : "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    name : 'Default Name',
    age : 25,
    info : 'this is default info'
}

export default class PersonList extends Component {

    state = {
        people : [
            {
                id : 1 ,
                img : "https://randomuser.me/api/portraits/thumb/men/75.jpg",
                name : 15,
                age : 22,
                address : {
                    // city : "ahmedabad",
                    // pincode : 380009,
                    // state : "gujrat"
                }

            },
            {
                id : 2 ,
                img : "https://randomuser.me/api/portraits/thumb/men/65.jpg",
                // name : "Raj Patel",
                age : 25,
                address : {
                    city : "ahmedabad",
                    pincode : 380009,
                    state : "gujrat"
                }

            },
            {
                id : 3 ,
                img : "https://randomuser.me/api/portraits/thumb/men/55.jpg",
                name : "Kishan Patel",
                age : 27,
                info  : "some info aboute Kishan patel",
                address : {
                    city : "ahmedabad",
                    pincode : 380009,
                    state : "gujrat"
                }

            }
        ]
    }


    render() {
        return (
            <div>
                {this.state.people.map((person)=>(
                    <Person key={person.id} img={person.img} name={person.name} age={person.age} info = {person.info} address = {person.address}></Person>
                ))}
                    
            </div>
        )
    }
}

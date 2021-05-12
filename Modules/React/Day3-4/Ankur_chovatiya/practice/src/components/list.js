import React, { Component } from 'react'


const numbers = [1, 2, 3, 4, 5];
//     const listItems = numbers.map((number , index) =>
//   <li>{number}</li>);


export default class List extends Component {
    
    // render() {
    //     return (
    //             <ul>{listItems}</ul>
    //     )
    // }
    render(){
        return (
            <ul>
                {numbers.map((number)=> <li key={number.toString()}>{number}</li>)}
            </ul>
        )
    }
}

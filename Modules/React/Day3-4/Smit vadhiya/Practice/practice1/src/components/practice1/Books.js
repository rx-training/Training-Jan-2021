import React, { Component } from 'react'
import '../../App.css'

export default class Book extends Component {
    render() {
        const { img, author, title } = this.props.info
        return (
            <div className ="book">
                <img src={img} alt="Book"/>
                <div>
                    <h4>Title : {title}</h4>
                    <h6>Author : {author}</h6>
                </div>
            </div>
        )
    }
}

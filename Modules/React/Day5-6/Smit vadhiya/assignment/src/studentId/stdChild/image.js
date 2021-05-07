/* import React from 'react'

export const Image = (props) => {
    return <img src={props.src} alt="this is image" 
        className="img-fluid rounded m-2 w-100 border border-rounded border-success"/>
    
} */
import React, { Component } from 'react'

export  class Image extends Component {
    constructor(props){
        super(props)
        this.state = {
            src : this.props.src
        }
    }
    render() {
        return (
            <img src={this.state.src} alt="this is student" 
        className="img-fluid rounded m-2 w-100 border border-rounded border-success"/>
        )
    }
}

import React, { Component } from 'react'

export  class Collage extends Component {
    
    state = {
        name : "Mount Marty",
        address : "Ahmedabad,Gujrat",
        logo : "/img/clg1.png"
    }

    render() {
        return (
            <div className="row m-0 bg-primary text-white">
            <div className="col-9 text-center">
                <h2>{this.state.name}</h2> 
                <h4 className="capitalized">{this.state.address}</h4>         
            </div>
            <div className="col-3 p-1">
                <img src={this.state.logo} alt="schoool logo" className="img-fluid  i-50"/>
            </div>
        </div>
        )
    }
}

import React, { Component } from 'react'
import './tour.scss'
export default class Tour extends Component {
    state ={
        showData : false
    }
    dataToggle = () =>{
        this.setState({showData : !this.state.showData})
    }
    render() {
        const {id,city,img,name,info} = this.props.tour
        const { deleteTour } = this.props
        return (
            <div className="tour">
                <div className="img-container">
                    <img src={img} alt="this is tour image"/>
                    <span className="close-btn" onClick={() => deleteTour(id)}>
                        <i className="fa fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info{" "}
                        <span onClick={this.dataToggle}>
                            <i className="fa fa-caret-down"></i>
                        </span>
                    </h5>
                    <p>
                        {this.state.showData ? info : null}
                    </p>
                </div>
            </div>
        )
    }
}

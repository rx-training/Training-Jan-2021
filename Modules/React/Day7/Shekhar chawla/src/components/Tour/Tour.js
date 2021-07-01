import React, { Component } from 'react'
import './tour.scss'

class Tour extends Component {
    state = {
        showInfo: false
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        const { id, city, image, name, info, price } = this.props.tour
        const { removeTour } = this.props


        return (
            <article className="tour">
                <div className="img-container">
                    <img src={image} alt={name} ></img>
                    <span className="close-btn" onClick={() => removeTour(id)}>
                        <i className="fas fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h3 className="price">
                        <span>
                            <i className="fas fa-rupee-sign" />
                        </span>
                        {"  "+price}
                    </h3>
                    <h5>info {" "}
                        <span onClick={this.handleInfo}>
                            <i className="fas fa-caret-square-down" />
                        </span>
                        {this.state.showInfo && <p>{info}</p>}
                    </h5>







                </div>
            </article>
        )
    }
}


export default Tour
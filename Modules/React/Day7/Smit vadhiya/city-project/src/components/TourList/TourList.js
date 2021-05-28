import React, { Component } from 'react'
import Tour from '../Tour'
import {tourData} from '../../tourData'
import './TourList.scss'
export default class TourList extends Component {
    state ={
        tour : tourData
    }
    deleteTour = id => {
        const newTour = this.state.tour.filter((data) => data.id !== id)
        this.setState({tour : newTour})
    }
    render() {
        const {tour} = this.state 
        return (
            <div className="tourList">
                {tour.map((data) => <Tour key={data.id} tour={data}  deleteTour={this.deleteTour}/>)}
            </div>
        )
    }
}

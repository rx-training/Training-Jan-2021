import React, { Component } from 'react'
import { tourData } from '../../tourData';
import Tour from '../Tour/Tour';
import './tourlist.scss';
export default class TourList extends Component {
    state={
        tours:tourData
    };
    removeTour=id=>{
        const {tours}=this.state;
        const sortedTours=tours.filter(tour=>tour.id!==id);
        this.setState({
            tours:sortedTours
        })
        }
    render() {
        const {tours}=this.state;
        console.log(this.state.tours);

        return (<section className="tourlist">
                {
                    tours.map(tour=>(<Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>))
                }
                </section>
            );

    }
}

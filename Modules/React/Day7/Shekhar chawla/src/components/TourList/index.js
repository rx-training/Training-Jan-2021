import React, { Component } from 'react'
import Tour from '../Tour'
import { tourData } from '../../tourData'
import './tourlist.scss'

class TourList extends Component {
    state = {
        tours : tourData
    }
    
    removeTour = (id) => {
        const { tours } = this.state
        const sortedTours = tours.filter(t => t.id !== id)
        this.setState({
            tours : sortedTours
        })
    }
    render() {
        return(
            <section>
                {
                    this.state.tours.map( (item) => (
                        <div className="tourlist" key={item.id}>
                            <Tour tour={item} removeTour={this.removeTour} />
                        </div>
                    ))
                }
            </section>
        )
    }
}


export default TourList
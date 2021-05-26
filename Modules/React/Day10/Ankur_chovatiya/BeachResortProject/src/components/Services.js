import React, { Component } from 'react'
import Title from './Title'

import { FaCocktail , FaHiking , FaShuttleVan , FaBeer } from 'react-icons/fa'

export default class Services extends Component {

    state = {
        services : [
            {
                icon:<FaCocktail></FaCocktail>,
                title: "Free Cocktails",
                info : "lorem ipsum dolor sit amet consertedr adipisinging elit. magnicorpis!"
            },
            {
                icon:<FaHiking></FaHiking>,
                title: "Endless Hiking",
                info : "lorem ipsum dolor sit amet consertedr adipisinging elit. magnicorpis!"
            },
            {
                icon:<FaShuttleVan></FaShuttleVan>,
                title: "Free shuttle",
                info : "lorem ipsum dolor sit amet consertedr adipisinging elit. magnicorpis!"
            },
            {
                icon:<FaBeer></FaBeer> ,
                title: "strongest Beer",
                info : "lorem ipsum dolor sit amet consertedr adipisinging elit. magnicorpis!"
            }

        ]
    }

    render() {
        return (
            <section className="services">
               <Title title="services"></Title>
                   <div className="services-center">
                    {this.state.services.map((item , index)=> {
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>    
                            </article>
                        )
                    })}
                   </div>
               
            </section>
        )
    }
}

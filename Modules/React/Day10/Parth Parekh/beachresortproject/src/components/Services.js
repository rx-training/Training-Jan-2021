import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
    state = {
        servies: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, dolore",
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, dolore",
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, dolore",
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, dolore",
            },
        ],
    };
    render() {
        return (
            <div>
                <Title title="services" />
                <div className="services-center">
                    {this.state.servies.map((item, index) => {
                        return (
                            <article key={index} className="services">
                                <span> {item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        );
    }
}

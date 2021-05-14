import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "Free Cocktails",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, tenetur!",
        },
        {
          icon: <FaHiking />,
          title: "Endless Hiking",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, tenetur!",
        },
        {
          icon: <FaShuttleVan />,
          title: "Free Shuttle",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, tenetur!",
        },
        {
          icon: <FaBeer />,
          title: "Strongest Beer",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, tenetur!",
        },
      ],
    };
  }
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

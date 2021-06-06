import React, { Component } from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel nam ducimus in eos sunt inventore, molestiae, cumque ex consequatur quia, error impedit accusamus unde repellendus nulla quisquam sequi consectetur.",
      },
      {
        icon: <FaHiking />,
        title: "free hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel nam ducimus in eos sunt inventore, molestiae, cumque ex consequatur quia, error impedit accusamus unde repellendus nulla quisquam sequi consectetur.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel nam ducimus in eos sunt inventore, molestiae, cumque ex consequatur quia, error impedit accusamus unde repellendus nulla quisquam sequi consectetur.",
      },
      {
        icon: <FaBeer />,
        title: "free beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel nam ducimus in eos sunt inventore, molestiae, cumque ex consequatur quia, error impedit accusamus unde repellendus nulla quisquam sequi consectetur.",
      }
    ]
  }

  render() {
    return (
      <section className="services">
        <Title title='services' />
        <div className="services-center">
          {this.state.services.map((item, index) => (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    )
  }
}

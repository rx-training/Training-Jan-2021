import React from 'react'
import Carousel from './Carousel'
import Card from './Card'


export default function CardCarousel({ data }) {
  return (
    <div className="mb-4">
      <Carousel>

        {data.map((item, index) => {
          return (
            <Card image={item.image} title={item.title} link={item.link} linkName={item.linkName} key={index} subtitle={item.subtitle} price={item.price} mutedText={item.mutedText} btnLink={item.showBtn} card={true} reviewCard={item.reviewCard} />

          )
        })}
      </Carousel>
    </div>
  )
}

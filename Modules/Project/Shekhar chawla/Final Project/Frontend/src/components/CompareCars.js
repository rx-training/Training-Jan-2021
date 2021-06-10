import React from 'react'
import CompareCard from './CompareCard'
import Car from '../assets/cars/swift.webp'
import Carousel from './Carousel'


export default function CompareCars({ data }) {
  data = [ 
    {cars: [carsData[0], carsData[1]] } ,
    {cars: [carsData[0], carsData[1]] } ,
    {cars: [carsData[0], carsData[1]] } ,
    {cars: [carsData[0], carsData[1]] } ,
    {cars: [carsData[0], carsData[1]] } ,
  ]
  return (
    <div className="">
      <h4 className="">Compare Cars</h4>
      <Carousel>

        {data.map((item, index) => {
          return (
            <CompareCard car1={item.cars[0]} car2={item.cars[1]} />
          )   
        })}
      </Carousel>
    </div>
  )
}

const carsData = [
  { image:Car, title: 'MG', price: '$ 4.4 Lakh', link: '/mg', mutedText: 'onwards', subtitle:'subtitle' },
  { image:Car, title: 'MG', price: '$ 4.4 Lakh', link: '/mg', mutedText: 'onwards', subtitle:'subtitle' },
  { image:Car, title: 'MG', price: '$ 4.4 Lakh', link: '/mg', mutedText: 'onwards', subtitle:'subtitle' },
  { image:Car, title: 'MG', price: '$ 4.4 Lakh', link: '/mg', mutedText: 'onwards', subtitle:'subtitle' },
  { image:Car, title: 'MG', price: '$ 4.4 Lakh', link: '/mg', mutedText: 'onwards', subtitle:'subtitle' },
]
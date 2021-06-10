import React from 'react'
import CardCarousel from './CardCarousel'
import CarImg from '../assets/cars/swift.webp'


export default function UsedCars() {

  return (
    <div>
      <h4 className="mb-3">Used Cars</h4>
      <CardCarousel data={carsData} />
    </div>
  )
}


const carsData = [
  { image: CarImg, link: '/swift',title: 'Used Car', price: '$ 40K', showBtn: false, mutedText:'Starting Price' },
  { image: CarImg, link: '/swift',title: 'Used Car', price: '$ 40K', showBtn: false, mutedText:'Starting Price' },
  { image: CarImg, link: '/swift',title: 'Used Car', price: '$ 40K', showBtn: false, mutedText:'Starting Price' },
  { image: CarImg, link: '/swift',title: 'Used Car', price: '$ 40K', showBtn: false, mutedText:'Starting Price' },
  { image: CarImg, link: '/swift',title: 'Used Car', price: '$ 40K', showBtn: false, mutedText:'Starting Price' }
]


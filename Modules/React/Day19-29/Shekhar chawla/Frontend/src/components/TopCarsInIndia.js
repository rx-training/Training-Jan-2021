import React from 'react'
import CardCarousel from './CardCarousel'
import CarImg from '../assets/cars/swift.webp'


export default function TopCars() {

  return (
    <div>
      <h4 className="mb-3">Top Cars In India</h4>
      <CardCarousel data={carsData} />
    </div>
  )
}


const carsData = [
  { image: CarImg, link: '/swift', price: 'Top SUVs in India', subtitle: 'Hyundai Creta, Kia Seltos', showBtn: false },
  { image: CarImg, link: '/swift', price: 'Top SUVs in India', subtitle: 'Hyundai Creta, Kia Seltos', showBtn: false },
  { image: CarImg, link: '/swift', price: 'Top SUVs in India', subtitle: 'Hyundai Creta, Kia Seltos', showBtn: false },
  { image: CarImg, link: '/swift', price: 'Top SUVs in India', subtitle: 'Hyundai Creta, Kia Seltos', showBtn: false },
  { image: CarImg, link: '/swift', price: 'Top SUVs in India', subtitle: 'Hyundai Creta, Kia Seltos', showBtn: false }
]


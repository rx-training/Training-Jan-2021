import React, { useState } from 'react'
import NavTabs from './NavTabs'
import CardCarousel from './CardCarousel'
import CarImg from '../assets/cars/swift.webp'


export default function LatestCarUpdates() {
  const [activeNav, setActiveNav] = useState(0)
  const [cars, setCars] = useState(carsData)

  const navTabs = [{ 
    title: 'Car News', onClick: function () {
      setActiveNav(0)
      setCars(carsData)
    }
  }, {
    title: 'Expert Reviews', onClick: function () {
      setActiveNav(1)
      setCars([{ image: CarImg, title: 'A', link: '/swift', linkName: 'Know More', price: 'Gajanan', mutedText: '39 minutes ago', subtitle: 'On-Road Price, Bangalore', showBtn: false, reviewCard:true }])
    }
  }, {
    title: 'Videos', onClick: function () {
      setActiveNav(2)
      setCars([{ image: CarImg, title: 'A', link: '/swift', linkName: 'Know More', price: 'Gajanan', mutedText: '39 minutes ago', subtitle: 'On-Road Price, Bangalore', showBtn: false, reviewCard:true }])
    }
  }]

  return (
    <>
      <NavTabs header={'Latest Car Updates'} data={navTabs} activeNav={activeNav} />
      <CardCarousel data={cars} />

      <h6 className="text-primary"><a>View All Latest Updates {'>'}</a></h6>
    </>
  )
}


const carsData = [
  { image: CarImg, title: 'A', link: '/swift', linkName: 'Know More', price: 'Gajanan', mutedText: '39 minutes ago', subtitle: 'On-Road Price, Bangalore', showBtn: false, reviewCard:true },
  { image: CarImg, title: 'B', link: '/swift', linkName: 'Know More', price: 'Gajanan', mutedText: '39 minutes ago', subtitle: 'On-Road Price, Bangalore', showBtn: false, reviewCard:true },
  { image: CarImg, title: 'C', link: '/swift', linkName: 'Know More', price: 'Gajanan', mutedText: '39 minutes ago', subtitle: 'On-Road Price, Bangalore', showBtn: false, reviewCard:true },
  { image: CarImg, title: 'D', link: '/swift', linkName: 'Know More', price: 'Gajanan', mutedText: '39 minutes ago', subtitle: 'On-Road Price, Bangalore', showBtn: false, reviewCard:true },
  { image: CarImg, title: 'E', link: '/swift', linkName: 'Know More', price: 'Gajanan', mutedText: '39 minutes ago', subtitle: 'On-Road Price, Bangalore', showBtn: false, reviewCard:true },
  { image: CarImg, title: 'F', link: '/swift', linkName: 'Know More', price: 'Gajanan', mutedText: '39 minutes ago', subtitle: 'On-Road Price, Bangalore', showBtn: false, reviewCard:true },
  { image: CarImg, title: 'Swift', link: '/swift', linkName: 'Know More', price: 'Gajanan', mutedText: '39 minutes ago', subtitle: 'On-Road Price, Bangalore', showBtn: false, reviewCard:true },
  { image: CarImg, title: 'Swift', link: '/swift', linkName: 'Know More', price: 'Gajanan', mutedText: '39 minutes ago', subtitle: 'On-Road Price, Bangalore', showBtn: false, reviewCard:true },
]


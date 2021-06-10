import React, { useState, useEffect } from 'react'
import NavTabs from './NavTabs'
import CardCarousel from './CardCarousel'
import CarImg from '../assets/cars/swift.webp'
import axios from 'axios'


export default function FeaturedCars() {
  const [activeNav, setActiveNav] = useState(0)
  const [cars, setCars] = useState(carsData)

  useEffect( () => {
    axios.get('http://localhost:3001/sdlf').then( res => {
      console.log(res)
    })
  }, [])

  const navTabs = [{ 
    title: 'Popular', onClick: function () {
      setActiveNav(0)
      setCars(carsData)
    }
  }, {
    title: 'Just Launched', onClick: function () {
      setActiveNav(1)
      setCars([{ image: CarImg, title: 'Maeker', link: '/swift', linkName: 'Know More',price: '$ 23 Lakh', mutedText: 'onwards', subtitle: 'On-Road Price, Bangalore', showBtn: true }])
    }
  }, {
    title: 'Upcoming Cars', onClick: function () {
      setActiveNav(2)
      setCars([{ image: CarImg, title: 'Beaker', link: '/swift', linkName: 'Know More', price: '$ 23 Lakh', mutedText: 'onwards', subtitle: 'On-Road Price, Bangalore', showBtn: true }])
    }
  }]

  return (
    <>
      <NavTabs header={'Featured Cars'} data={navTabs} activeNav={activeNav} />
      <CardCarousel data={cars} />

      <h6 className="text-primary"><a>View All Popular Cars {'>'}</a></h6>
    </>
  )
}


const carsData = [
  { image: CarImg, title: 'A', link: '/swift', linkName: 'Know More', price: '$ 23 Lakh', mutedText: 'onwards', subtitle: 'On-Road Price, Bangalore', showBtn: true },
  { image: CarImg, title: 'B', link: '/swift', linkName: 'Know More', price: '$ 23 Lakh', mutedText: 'onwards', subtitle: 'On-Road Price, Bangalore', showBtn: true },
  { image: CarImg, title: 'C', link: '/swift', linkName: 'Know More', price: '$ 23 Lakh', mutedText: 'onwards', subtitle: 'On-Road Price, Bangalore', showBtn: true },
  { image: CarImg, title: 'D', link: '/swift', linkName: 'Know More', price: '$ 23 Lakh', mutedText: 'onwards', subtitle: 'On-Road Price, Bangalore', showBtn: true },
  { image: CarImg, title: 'E', link: '/swift', linkName: 'Know More', price: '$ 23 Lakh', mutedText: 'onwards', subtitle: 'On-Road Price, Bangalore', showBtn: true },
  { image: CarImg, title: 'F', link: '/swift', linkName: 'Know More', price: '$ 23 Lakh', mutedText: 'onwards', subtitle: 'On-Road Price, Bangalore', showBtn: true },
  { image: CarImg, title: 'Swift', link: '/swift', linkName: 'Know More', price: '$ 23 Lakh', mutedText: 'onwards', subtitle: 'On-Road Price, Bangalore', showBtn: true },
  { image: CarImg, title: 'Swift', link: '/swift', linkName: 'Know More', price: '$ 23 Lakh', mutedText: 'onwards', subtitle: 'On-Road Price, Bangalore', showBtn: true },
]


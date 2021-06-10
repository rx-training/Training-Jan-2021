import React from 'react'
import Car from '../assets/cars/swift.webp'
import NavChildLayout from './NavChildLayout'
import Card from './Card'


export default function NewCarsNav() {
  return (
    <div className="row">
      <div className="col col-2"></div>
      <div className="col col-8">
        <NavChildLayout links={newCarLinks}>
          <div className="row">
            <div className="col-6">
              <Card badge={'Just Launched'} subtitle={'Mercedes'} link={'/mercedes'} linkName={'Know More'} image={Car} btnLink={false} />
            </div>
          </div>
        </NavChildLayout>
      </div>
    </div>
  )
}

const newCarLinks = [{ name: 'Find New Cars', href: '/' }, { name: 'Check On-Road Price', href: '/' }, { name: 'Upcoming Cars', href: '/' }, { name: 'New Car Loan', href: '/' }, { name: 'New Launches', href: '/' }, { name: 'Electric Cars', href: '/' }, { name: 'Compare Cars', href: '/' }, { name: 'Find Dealer', href: '/' }, { name: 'New Car Offers', href: '/' }]


import React from 'react'

import Jumbo from '../components/Jumbo'
import SearchBar from '../components/SearchBar'
import FeaturedCars from '../components/FeaturedCars'
import AllBrands from '../components/AllBrands'
import FindTheCarOfYourChoice from '../components/FindTheCarOfYourChoice'
import TopCarsInIndia from '../components/TopCarsInIndia'
import CheckOnRoadPrice from '../components/CheckOnRoadPrice'
import CompareCars from '../components/CompareCars'
import UsedCars from '../components/UsedCars'
import LatestCarUpdates from '../components/LatestCarUpdates'



export default function Home() {
  return (
    <div className="mb-5">
      <Jumbo>
        <SearchBar />
      </Jumbo>

      <div className="container">
        <div className="my-5">
          <FeaturedCars />
        </div>
        <div className="mb-5">
          <AllBrands />
        </div>
        <div className="mb-5">
          <FindTheCarOfYourChoice />
        </div>
        <div className="mb-5">
          <TopCarsInIndia />
        </div>
      </div>

      <CheckOnRoadPrice />

      <div className="container">
        <div className="mb-5">
          <CompareCars />
        </div>
        <div className="mb-5">
          <UsedCars />
        </div>
        <div className="mb-5">
          <LatestCarUpdates />
        </div>
      </div>
    </div>
  )
}

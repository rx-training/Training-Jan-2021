import React from 'react'

import NewCarBanner from '../../assets/main/new-cars-banner.jpg'
import Jumbo from '../../components/Jumbo'
import FeaturedCars from '../../components/FeaturedCars'
import AllBrands from '../../components/AllBrands'
import FindTheCarOfYourChoice from '../../components/FindTheCarOfYourChoice'
import TopCarsInIndia from '../../components/TopCarsInIndia'
import CompareCars from '../../components/CompareCars'
import CarBuyingTools from '../../components/CarBuyingTools'
import FAQs from '../../components/Faqs'



export default function FindNewCars() {
  return (
    <div className="mb-5">
      <Jumbo image={NewCarBanner}></Jumbo>

      <div className="container">
        <h1>New Cars</h1>
        <p>Information on all new and upcoming cars in India.</p>

        <div className="mb-5">
          <AllBrands />
        </div>
        <div className="mb-5">
          <FindTheCarOfYourChoice />
        </div>
        <div className="mb-5">
          <FeaturedCars />
        </div>
        <div className="mb-5">
          <TopCarsInIndia />
        </div>
        <div className="mb-5">
          <CompareCars />
        </div>
        <div className="mb-5">
          <CarBuyingTools />
        </div>
        <div className="mb-5">
          <FAQs header={'New Car FAQs'} data={faqData} />
        </div>
        <div className="mb-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
          </nav>
        </div>


      </div>
    </div>
  )
}

const faqData = [
  { q: 'Which are the popular new cars available in India in 2021?', a: 'Top 3 popular new cars available in India in 2021 are Renault Kwid, Renault Kiger and Hyundai Creta. To checkout more popular models, click here.' }
]
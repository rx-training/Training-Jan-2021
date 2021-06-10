import React from 'react'
import Jumbo from './Jumbo'
import bannerImage from '../assets/main/get-final-price-banner.jpg'
import InputTextField from './InputTextField'

export default function CheckOnRoadPrice() {
  return (
    <Jumbo image={bannerImage} >
      <div class="container d-flex flex-row-reverse m-5 h-100" style={{ opacity: '0.9'}}>
        <div class="d-flex flex-column p-4 bg-dark align-self-center bg-primary">
          <div class="h4 text-white mb-4">
            Check On-Road Price
			    </div>
          <div>
            <InputTextField placeholder={'Type to select Car name'} />
          </div>
          <div className="mt-3">
            <small class="text-white">Its private, no need to share your number and email</small>
          </div>
        </div>
      </div>
    </Jumbo>
  )
}

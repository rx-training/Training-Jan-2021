import React from 'react'
import Car from '../assets/cars/swift.webp'
import NavChildLayout from './NavChildLayout'
import Card from './Card'
import styled from 'styled-components'

const Styles = styled.div`
  .card-header-info {
    font-size: 85%;
  }
`;


export default function ReviewNewsNav() {
  return (
    <Styles>
      <div className="row">
        <div className="col col-2"></div>
        <div className="col col-8">
          <NavChildLayout links={reviewsLinks}>
            <p className="card-header-info">Latest Articles</p>
            <div className="row">
              <div className="col col-5 ">
                <Card badge={'News'} subtitle={'Mercedes'} link={'/mercedes'} image={Car} btnLink={false} />
              </div>
              <div className="col col-5 ">
                <Card badge={'News'} subtitle={'Mercedes'} link={'/mercedes'} image={Car} btnLink={false} />
              </div>
            </div>
          </NavChildLayout>
        </div>
      </div>
    </Styles>
  )
}

const reviewsLinks = [{ name: 'News', href: '/' }, { name: 'Expert Reviews', href: '/' }, { name: 'User Reviews', href: '/' }, { name: 'Special Reports', href: '/' }, { name: 'Images', href: '/' }, { name: 'Videos', href: '/' }, { name: 'Tips And Advice', href: '/' }, { name: 'Forums', href: '/' }]

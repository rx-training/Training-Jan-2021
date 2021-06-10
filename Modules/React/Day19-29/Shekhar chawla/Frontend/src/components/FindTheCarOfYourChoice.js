import React, { useState } from 'react'
import TypeCards from './TypeCards'
import NavTabs from './NavTabs'
import styled from 'styled-components'

export default function FindTheCarOfYourChoice() {
  const [activeNav, setActiveNav] = useState(0)
  const [activeNavContent, setActiveNavContent] = useState(<Budget />)

  const navTabs = [{
    title: 'Budget', onClick: function () {
      setActiveNav(0)
      setActiveNavContent(<Budget />)
    }
  }, {
    title: 'Body Type', onClick: function () {
      setActiveNav(1)
      setActiveNavContent(<BodyType />)
    }
  }, {
    title: 'Fuel Type', onClick: function () {
      setActiveNav(2)
      setActiveNavContent(<FuelType />)
    }
  }, {
    title: 'Transmission', onClick: function () {
      setActiveNav(3)
      setActiveNavContent(<Transmission />)
    }
  }, {
    title: 'Seating Capacity', onClick: function () {
      setActiveNav(4)
      setActiveNavContent(<SeatingCapacity />)
    }
  }]


  return (
    <div className="">
      <NavTabs header={'Find The Cars Of Your Choice'} data={navTabs} activeNav={activeNav} />
      <div className="">
        {activeNavContent}
      </div>
    </div>
  )
}




const ButtonGroupStyles = styled.div`
  .rounded-pill {
    color: #aaaaaa;
    font-weight: bold;
    font-size: 95%;
    border: 1px solid #aaa;
  }
  .rounded-pill:active, .rounded-pill:hover, .rounded-pill:focus {
    border-color: teal;
    color: teal;
  }
.btn-group-container {
  background-color: #f4f4f4;
}
`;

const ButtonGroup = ({ data }) => {

  return (
    <ButtonGroupStyles>
      <div class="d-flex flex-wrap btn-group-container">
        {data.map((item, index) => {
          return (
            <div>
              <a class="btn rounded-pill ml-4 my-4 px-4 py-2" href={item.href} key={index}> {item.name} </a>
            </div>
          )
        })}
      </div>
    </ButtonGroupStyles>
  )
}



function Budget() {
  const data = [
    { name: 'Under 4 Lakh', href: '/new/best-cars-under-4-lakh' },
    { name: 'Under 5 Lakh', href: '/new/best-cars-under-4-lakh' },
    { name: 'Under 6 Lakh', href: '/new/best-cars-under-4-lakh' },
    { name: 'Under 7 Lakh', href: '/new/best-cars-under-4-lakh' },
    { name: 'Under 8 Lakh', href: '/new/best-cars-under-4-lakh' },
    { name: 'Under 10 Lakh', href: '/new/best-cars-under-4-lakh' },
    { name: 'Under 15 Lakh', href: '/new/best-cars-under-4-lakh' },
    { name: 'Under 20 Lakh', href: '/new/best-cars-under-4-lakh' },
    { name: 'Under 30 Lakh', href: '/new/best-cars-under-4-lakh' },
    { name: 'Luxury Cars', href: '/new/best-cars-under-4-lakh' }
  ]
  return (
    <ButtonGroup data={data} />
  )
}




const BodyType = () => {
  const data = [
    { image: "images/suv_clr.svg", title: 'SUV', link: '/hello', rightArrow: true },
    { image: "images/suv_clr.svg", title: 'Sedan', link: '/hello', rightArrow: true },
    { image: "images/suv_clr.svg", title: 'HatchBatch', link: '/hello', rightArrow: true },
    { image: "images/suv_clr.svg", title: 'Compact SUV', link: '/hello', rightArrow: true },
    { image: "images/suv_clr.svg", title: 'Compact Sedan', link: '/hello', rightArrow: true },
    { image: "images/suv_clr.svg", title: 'MUV', link: '/hello', rightArrow: true },
    { image: "images/suv_clr.svg", title: 'Convertible', link: '/hello', rightArrow: true },
    { image: "images/suv_clr.svg", title: 'Coupe', link: '/hello', rightArrow: true },
    { image: "images/suv_clr.svg", title: 'Station Wagon', link: '/hello', rightArrow: true },
    { image: "images/suv_clr.svg", title: 'Minivan', link: '/hello', rightArrow: true },
  ]
  return (
    <div className="container">
      <div className="row" style={{ backgroundColor: "#f4f4f4" }}>
        {data.map((item, index) => {
          return (
            <div className="col col-4" style={{ paddingRight: "0", paddingLeft: "0" }}>
              <TypeCards image={item.image} title={item.title} link={item.link} rightArrow={true} />
            </div>
          )
        })}
      </div>
    </div>
  )
}


const FuelType = () => {
  const data = [
    { image: "images/suv_clr.svg", title: 'Petrol', link: '/hello', rightArrow: true },
    { image: "images/suv_clr.svg", title: 'Diesel', link: '/hello', rightArrow: true },
    { image: "images/suv_clr.svg", title: 'CNG', link: '/hello', rightArrow: true },
    { image: "images/suv_clr.svg", title: 'Electric', link: '/hello', rightArrow: true },
  ]
  return (
    <div className="container">
      <div className="row" style={{ backgroundColor: "#f4f4f4" }}>
        {data.map((item, index) => {
          return (
            <div className="col col-4" style={{ paddingRight: "0", paddingLeft: "0" }}>

              <TypeCards image={item.image} title={item.title} link={item.link} rightArrow={true} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Transmission = () => {
  const data = [
    { image: "images/suv_clr.svg", title: 'Automatic', link: '/hello', rightArrow: true },
    { image: "images/suv_clr.svg", title: 'Manual', link: '/hello', rightArrow: true }
  ]

  return (
    <div className="container">
      <div className="row" style={{ backgroundColor: "#f4f4f4" }}>
        {data.map((item, index) => {
          return (
            <div className="col col-4" style={{ paddingRight: "0", paddingLeft: "0" }}>
              <TypeCards image={item.image} title={item.title} link={item.link} rightArrow={true} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function SeatingCapacity() {
  const data = [
    { name: '5 seats', href: '/new/best-cars-under-4-lakh' },
    { name: '6 seats', href: '/new/best-cars-under-4-lakh' },
    { name: '7 seats', href: '/new/best-cars-under-4-lakh' },
    { name: '8 seats', href: '/new/best-cars-under-4-lakh' },
    { name: '9 seats', href: '/new/best-cars-under-4-lakh' }
  ]
  return (
    <ButtonGroup data={data} />
  )
}
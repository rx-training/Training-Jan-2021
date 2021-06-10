import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import NavTabs from './NavTabs'
import Carousel from './Carousel'
import CarImg from '../assets/cars/swift.webp'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import SecondaryButton from '../components/Buttons/SecondaryTeal'
import PrimaryButton from '../components/Buttons/PrimaryRed'


const Styles = styled.div`
  .info-btn {
    font-size: 40%;
    padding: 0 auto;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
  }
  .car-info-tooltip  {
    font-size: 70%;
  }
  .emi-tooltip {
    color: orange
  }
`;

const Rating = styled.div`
  
  --star-size: 75%;
  --star-color: lightgray;
  --star-background: teal  ;
  --rating: ${props => props.rating};

  .Stars {
    --percent: calc(var(--rating) / 5 * 100%);
    
    display: inline-block;
    font-size: var(--star-size);
    font-family: Times; // make sure ★ appears correctly
    line-height: 1;
    
    &:before {
      content: '⭐⭐⭐⭐⭐';
      letter-spacing: 3px;
      color: white;
      background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .review-text {
    font-size: 75%;
  }


`;
export default function CarView() {
  const [activeNav, setActiveNav] = useState(0)
  // const [cars, setCars] = useState(carsData)

  const navTabs = [{
    title: 'Kwid', onClick: function () {
      setActiveNav(0)
      // setCars(carsData)
    }
  }, {
    title: 'Versions', onClick: function () {
      setActiveNav(1)
    }
  }, {
    title: 'Images', onClick: function () {
      setActiveNav(2)
    }
  }, {
    title: 'Expert Reviews', onClick: function () {
      setActiveNav(3)
    }
  }, {
    title: 'Colours', onClick: function () {
      setActiveNav(4)
    }
  }, {
    title: 'Videos', onClick: function () {
      setActiveNav(5)
    }
  }, {
    title: 'Mileage', onClick: function () {
      setActiveNav(6)
    }
  }, {
    title: 'Used Kwid', onClick: function () {
      setActiveNav(7)
    }
  }]

  return (
    <Styles>
      <div className="">

        <div className="my-4">
          <h2 className="title">Renault
          <span className="info-btn p-0 pl-2">
              <OverlayTrigger
                placement={'bottom'}
                overlay={
                  <Tooltip id={`tooltip`}>
                    <p className="car-info-tooltip">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi placeat minima eius tenetur enim, fugit iure! Earum esse suscipit soluta beatae quos doloremque voluptas, est illum, voluptate dolores eius numquam.</p>
                  </Tooltip>
                }
              >
                <AiOutlineInfoCircle />
              </OverlayTrigger>
            </span>
          </h2>
          <Rating rating={4.1}>
            <div class="Stars" aria-label="Rating of this product is 2.3 out of 5.">
            </div>
            <span className="mx-2">
              <span className="review-text text-primary">217 Reviews | Write a review</span>
            </span>
          </Rating>
        </div>


        <NavTabs data={navTabs} activeNav={activeNav} />


        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-6">

              <div className="d-flex flex-column">
                <div >
                  <Carousel scroll={1} show={1}>
                    <div className="">
                      <img src={CarImg} alt="car"></img>
                    </div>
                    <div>
                      <img src={CarImg} alt="car" ></img>
                    </div>
                    <div>
                      <img src={CarImg} alt="car" ></img>
                    </div>
                  </Carousel>
                </div>
                <div className="px-4">
                  <div className="d-flex flex-row">
                    <div className="">
                      colors
                    </div>
                    <div>
                      images
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-md-6">
              <div class="card-body">


                <div className="row">
                  <div className="col">
                    <select class="custom-select">
                      <option selected>Select your version</option>
                      <option value="1">One </option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col">2</div>
                </div>

                <div className="my-3 mx-1">
                  <span className="h4">$ 24.34 Lakh</span>
                  <small className="text-primary mx-3"><strong>View Price break up</strong></small>
                  <p className="my-1 text-muted">On Road Price Pune</p>
                </div>

                <div className="d-flex">
                  <div className="col col-6 my-3 mx-1 ">
                    <span className="">EMI $2332 </span>
                    <OverlayTrigger
                      placement={'top'}
                      overlay={
                        <Tooltip id={`tooltip`}>
                          Tax Basis
                    </Tooltip>
                      }
                    >
                      <AiOutlineInfoCircle className="emi-tooltip" />
                    </OverlayTrigger>
                    <small className="mx-2">For 7 years</small>
                    <div className="my-2">
                      <u className="h6 text-primary h6">Get EMI Assistance</u>
                    </div>
                  </div>
                  <div className="col col-6">
                    <SecondaryButton href={'/'}>Customise Your Emi</SecondaryButton>
                  </div>
                </div>

                <div className="row">
                  <div className="col col-8">
                    <PrimaryButton href={'/'}>Get June Offers</PrimaryButton>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


      </div >
    </Styles >
  )
}

import React from 'react'
import Car from '../assets/cars/swift.webp'
import styled from 'styled-components'
import { BsChevronRight } from "react-icons/bs";

const Styles = styled.div`
  .vs-part {
    position: absolute;
    top: 35%;
    left: 46.5%;
    border-radius: 50%;
    background-color: white;
    border: 1px solid blue;
    color: red;
    padding: 0px 6px 3px 6px;
    z-index: 99;
  }
  .card-footer {
    font-size: 83%;
  }
  .divider-vertical {
    width: 2px;
    background-color: #f1f1f1;
    height: auto;
  }
`;

export default function CompareCard({ car1, car2 }) {
  return (
    <Styles>
      <div className="col p-0">
        <div className="card">
          <div className="d-flex">
            <div className="">
              <Card image={car1.image} title={car1.title} price={car1.price} link={car1.link} mutedText={car1.mutedText} subtitle={car1.subtitle} btnLink={false} />
            </div>
            
            <div className="divider-vertical"></div>
            <div className="vs-part">
              vs
            </div>
            <div className="">
              <Card image={car2.image} title={car2.title} price={car2.price} link={car2.link} mutedText={car2.mutedText} subtitle={car2.subtitle} btnLink={false} footer={true} />
            </div>
          </div>

          <div className="card-footer text-left text-primary">
            {`Compare ${car1.title} vs ${car2.title}` }
            <BsChevronRight className="mx-2" />
          </div>

        </div>

      </div>
    </Styles>
  )
}



const CardStyles = styled.div`
  .card-body {
    background-color: white;
    & > h6 {
      font-weight: bold;
    }
  }
  .text-muted , .info{
    font-size: 80%;
  }
  p, h6 {
    margin: 5px 0;
  }
  .subtitle {
    color: gray;
  }
  .btn-primary, .btn-primary:focus, .btn-primary:hover, .btn-primary:active {
    border-radius: 0 !important;
    border-color: teal !important;
    background-color: white !important;
    color: teal !important;
    outline: none !important;
    box-shadow: none !important;
    font-weight: bold;
    font-size: 80%;
  }
`;
function Card({ image, badge, title, subtitle, linkName, link, price, mutedText, btnLink, children }) {

  return (
    <CardStyles>
      <div className='card border-0'>
        {badge && <span className="badge badge-danger w-50">{badge}</span>}
        <div className="img-container">
          {image && link &&
            <a href={link}>
              <img src={image ? image : Car} className="card-img-top" alt={title}></img>
            </a>
          }
        </div>
        <div className="card-body">
          {title && <p className="card-title lead ">{title}</p>}
          <p className="card-text">
            {price && <span className="h6">{price} {' '}</span>}
            {mutedText && <span className="text-muted">{mutedText}</span>}
          </p>
          {subtitle && <p className="card-text info subtitle">{subtitle}</p>}
          {btnLink && <a href={link} className="btn btn-primary">{linkName}</a>}

          {children}
        </div>
      </div>
    </CardStyles>
  )
}


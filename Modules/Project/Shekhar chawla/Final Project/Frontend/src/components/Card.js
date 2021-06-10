import React from 'react'
import Car from '../assets/cars/swift.webp'
import styled from 'styled-components'
import Button from './Buttons/SecondaryTeal'

const Styles = styled.div`
  .card-body {
    background-color: #f4f4f4;
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
  .card-img-top {
    width: 100%;
    height: 100%;
  }
`;
export default function Card({ image, badge, title, subtitle, linkName, link, price, mutedText, btnLink, reviewCard, children }) {

  return (
    <Styles>
      <div className='card mx-0'>
        {badge && <span className="badge badge-danger w-50">{badge}</span>}
        <div className="img-container">
          {image && link &&
            <a href={link}>
              <img src={image ? image : Car} className="card-img-top" alt={title}></img>
            </a>
          }
        </div>
        <div className="card-body bg-light">
          {title && <h6 className="card-title lead ">{title}</h6>}
          <p className="card-text">
            {reviewCard && <span className="text-muted mr-3">By</span>}
            {price && <span className="h6">{price} {' '}</span>}
            {mutedText && <span className="text-muted ml-2">{mutedText}</span>}
          </p>
          {subtitle && <p className="card-text info subtitle">{subtitle}</p>}
          {btnLink && <Button href={link}>{linkName}</Button>}


          {reviewCard && <a href={link} className="btn float-right">Read More</a>}

          {children}
        </div>

        
      </div>
    </Styles>
  )
}

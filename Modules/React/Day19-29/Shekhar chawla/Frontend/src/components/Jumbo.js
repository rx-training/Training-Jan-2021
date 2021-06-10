import React from 'react'
import styled from 'styled-components'
import banner from '../assets/main/home-page-banner-400.webp'


const Styles = styled.div`
  .jumbo {
    background: url(${props => props.image}) no-repeat center top;
    background-size: auto  ;
    color: #ccc;
    height: 400px;
    postition: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #fff;
    opacity: 0.6;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

export default function Banner({ children, image }) {
  return (
    <Styles image={image ? image : banner}>
      <div fluid className="jumbotron-fluid jumbo d-flex flex-column-reverse bg-dark">
        <div className="overlay"></div>
        { children }
      </div>

    </Styles>
  )
}

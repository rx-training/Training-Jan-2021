import React from 'react'
import CarView from '../components/CarView'
import styled from 'styled-components'

const Styles = styled.div`
  .container {
    margin: 5% auto;
  }
`;

export default function SingleCar() {
  return (
    <Styles>
      <div className="container">
        <CarView />
      </div>
    </Styles>
  )
}



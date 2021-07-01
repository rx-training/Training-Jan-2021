import React from 'react'
import NavChildLayout from './NavChildLayout'
import SmallCardBox from './SmallCardBox'
import styled from 'styled-components'

const Styles = styled.div`
  .card-header-info {
    font-size: 85%;
  }
`;

export default function UsedCarsNav() {
  return (
    <Styles>
      <div className="row">
        <div className="col col-2"></div>
        <div className="col col-8">
          <NavChildLayout links={usedCarLinks}>
            <p className="card-header-info">Search Car By Your Budget</p>
            <div className="row">
              <div className="col col-4">
                <SmallCardBox />
              </div>
              <div className="col col-4">
                <SmallCardBox />
              </div>
            </div>
          </NavChildLayout>
        </div>
      </div>
    </Styles>
  )
}

const usedCarLinks = [{ name: 'Find Used Cars', href: '/' }, { name: 'Check Car Evaluation', href: '/' }, { name: 'Sell Your Car', href: '/' }, { name: 'Used Car Loan', href: '/' }, { name: 'Explore Used Cars', href: '/' }, { name: 'Find Dealers', href: '/' }]


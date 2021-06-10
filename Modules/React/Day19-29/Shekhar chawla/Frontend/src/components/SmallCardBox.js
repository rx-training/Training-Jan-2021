import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .small-card {
    border-radius: 8px;
    border: gray solid 1px;
    background-color: #f4f4f4;

    .small-card-footer-info {
      font-size: 80%;
    }
    .small-card-header {
      font-size: 75%;
    }
  }
`;

export default function SmallCardBox() {
  return (
    <Styles>
      <div className="small-card text-center">
        <div className="small-card-header my-1">Upto</div>
        <div className="h6 my-2">$ 4Lakh</div>
        <p className="small-card-footer-info py-0 my-1"><a href="/sldfj" className="btn text-primary m-0">View All</a></p>
      </div>
    </Styles>
  )
}

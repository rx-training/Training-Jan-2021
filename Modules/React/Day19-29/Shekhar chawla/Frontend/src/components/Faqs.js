import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`

`;

export default function Faqs({ header , data }) {
  return (
    <Styles>
      <div>
        <h4>{header ? header : 'FAQs' }</h4>

        <div>
          <h6>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit?</h6>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio repellat placeat aperiam quibusdam itaque consectetur rem aspernatur soluta corporis ipsa obcaecati maxime asperiores libero accusamus praesentium ipsum, officia odio? Provident.</p>
          <hr></hr>
        </div>
      </div>
    </Styles>
  )
}

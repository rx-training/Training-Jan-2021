import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
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
export default function SecondaryTeal({ href, children }) {

  return (
    <Styles>
      <a href={href} className="btn btn-primary">
        {children}
      </a>
    </Styles>
  )
}

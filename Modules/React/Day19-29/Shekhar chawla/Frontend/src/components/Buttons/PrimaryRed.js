import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .btn-primary, .btn-primary:focus, .btn-primary:hover, .btn-primary:active {
    border-radius: 4px !important;
    border: 0px solid red;
    background-color: red !important;
    color: white !important;
    outline: none !important;
    box-shadow: none !important;
    font-weight: bold;
    font-size: 110%;
  }
`;
export default function SecondaryTeal({ href, children }) {

  return (
    <Styles>
      <a href={href} className="btn btn-primary w-100 text-center py-2">
        {children}
      </a>
    </Styles>
  )
}

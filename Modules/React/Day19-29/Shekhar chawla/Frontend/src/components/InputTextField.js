import React from 'react'
import { BiSearch } from "react-icons/bi";
import styled from 'styled-components'

const Styles = styled.div`
  input , input:focus {
    position: relative;
    outline: none;
    box-shadow: none;
    border-radius: 0;
    padding: 7% 5%;
  }
  .search-icon {
    font-size: 24px;
    position: absolute;
    z-index: 5;
    right: 7%;
    top: 25%;
    color: gray;
  }
`;

export default function InputField({ placeholder }) {
  return (
    <Styles>

      <form className="form-inline my-2 my-lg-0">
        <div className="input-group w-100">
          <input className="form-control mr-sm-2 w-100" type="search" placeholder={placeholder ? placeholder : 'Search'} aria-label="Search"></input>
          <BiSearch className="icons search-icon" />
        </div>
      </form>


    </Styles>
  )
}

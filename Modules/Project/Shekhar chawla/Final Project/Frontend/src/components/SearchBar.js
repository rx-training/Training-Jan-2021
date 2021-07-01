import React from 'react'
import styled from 'styled-components'
import { BiSearch } from "react-icons/bi";

const Styles = styled.div`
  .bar-header {
    text-transform: uppercase;
  }
  .input-group-append {
    .input-group-text {
      background-color: tomato;
      color: #fff;
    }
  }
  .input-group-prepend {
    button {
      border-radius: 0;
    }
  }
  input {
    padding-left: 7%;
  }
  input:focus, .btn {
    border-color: none;
    box-shadow: none;
    outline: 0 none;
  }
  .searchBar {
    height: 50px;
    border-radius: 0;
    postition: relative;
    z-index: 1;
  }
  .search-links {
    div {
      p {
        font-size: 12px;
        color: #fff;
      }
    }
  }
  .search-btn {
    border: 3px solid white;
  }
  .search-icon {
    font-size: 28px;
    position: absolute;
    z-index: 1;
    left: 10%;
    top: 25%;
    color: #aaaaaa;
  }
`;

export default function SearchBar() {
  return (
    <Styles>
      <div className="d-flex flex-column pb-5">
        <div className="p-2">
          <h2 className="text-center bar-header">Find the right Car</h2>
        </div>


        <div className="d-flex align-items-center flex-column justify-content-center">
          <div className="input-group mb-3 w-50 searchBar d-flex bg-dark">
            <div className="input-group-prepend">
              <button className="btn dropdown-toggle input-group-text" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                New
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/">Used</a>
              </div>
            </div>

            <div className="searchBar flex-grow-1">
              <BiSearch className="icons search-icon" />
              <input type="text" className="form-control searchBar" placeholder="Type to select car name eg. Skoda" aria-label="Type to select car name eg. Skoda" aria-describedby="basic-addon2"></input>
            </div>

            <div className="input-group-append">
              <span className="input-group-text btn px-lg-5 px-md-2 px-sm-0 px-xs-0 search-btn" id="basic-addon2" >Search</span>
            </div>
          </div>

          <div className="d-flex search-links flex-row w-50 my-0">
            <div className="mr-auto px-1">
              <p>e.g. Skoda Rapid TSI</p>
            </div>
            <div className="px-1">
              <p>New Car Discounts |</p>
            </div>
            <div className="px-1">
              <p>Help Me find a Car |</p>
            </div >
            <div className="px-1">
              <p>
                Sell A Car
                </p>
            </div>
          </div>
        </div>


      </div>

    </Styles>
  )
}

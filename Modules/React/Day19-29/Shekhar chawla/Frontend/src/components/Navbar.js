import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/main/logo.svg'

import NavbarRight from './NavbarRight'
import NavChild1 from './NavChild1'
import NavChild2 from './NavChild2'
import NavChild3 from './NavChild3'


const Styles = styled.div`
  nav {
    position: fixed;
    width: 100%;
    z-index: 9999;
  }
  .navbar-brand {
    img {
      width: 100%;
      padding: 0 10%;
      height: 28px;
      width: 100;
    }
  }
  .navbar-brand, .navbar-nav, .nav-link {
    color: #222;
  }
  .nav {
    justify-content: center;

    & > .nav-item > .nav-link {
      border-bottom: 3px solid white;
      margin: 0 30px;
      text-transform: uppercase;
      border-radius: 0;

      &:hover {
        border-bottom: 3px solid teal;
      }
    }
  }
  
  
`;

export default function MyNavbar() {
  const [isNavItem1Shown, setNavItem1Shown] = useState(false)
  const [isNavItem2Shown, setNavItem2Shown] = useState(false)
  const [isNavItem3Shown, setNavItem3Shown] = useState(false)

  return (
    <Styles>

      <div className="d-flex flex-column">

        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="col ">
              <div className="row">
                <div className="col col-2">
                  <a className="navbar-brand" href="#">
                    <img src={logo} alt="carwale"></img>
                  </a>
                </div>

                <div className="col">
                  <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link btn nav-link-items px-0 nav-link-1" aria-current="page" href="/" onMouseEnter={() => setNavItem1Shown(true)} onMouseLeave={() => setNavItem1Shown(false)}>New cars</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link btn nav-link-items px-0" aria-current="page" href="/" onMouseEnter={() => setNavItem2Shown(true)} onMouseLeave={() => setNavItem2Shown(false)}>Used cars</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link btn nav-link-items px-0" aria-current="page" href="/" onMouseEnter={() => setNavItem3Shown(true)} onMouseLeave={() => setNavItem3Shown(false)}>Review&News</a>
                    </li>
                  </ul>
                </div>
                <div className="col col-4">
                  <NavbarRight />
                </div>
              </div>

              {isNavItem1Shown &&
                <div className="nav-child" onMouseEnter={() => setNavItem1Shown(true)} onMouseLeave={() => setNavItem1Shown(false)}>
                  <NavChild1 />
                </div>
              }


              {isNavItem2Shown &&
                <div className="nav-child" onMouseEnter={() => setNavItem2Shown(true)} onMouseLeave={() => setNavItem2Shown(false)}>
                  <NavChild2 />
                </div>
              }
              {isNavItem3Shown &&
                <div className="nav-child" onMouseEnter={() => setNavItem3Shown(true)} onMouseLeave={() => setNavItem3Shown(false)}>
                  <NavChild3 />
                </div>
              }
            </div>
          </nav>
        </div>


      </div>





    </Styles >
  )
}

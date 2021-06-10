import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  a {
    text-transform: uppercase;
    font-size: 82%;
    font-weight: bold;
    padding: 10px 0;
    border-radius: 0;
    color: #aaaaaa;
    border-bottom: 4px solid white;
    border-right: 0px;
    border-left: 0px;
    margin-right: 30px;

    &:hover , &:focus {
      border-bottom: 4px solid teal;
      color: teal;
    }
  }
  .active {
    border-bottom: 4px solid teal;
    color: teal;
  }
`;

export default function NavTabs({ header, data, activeNav }) {

  return (
    <Styles>
      <div className="mb-3">
        { header && <h4>{header}</h4> }

        <ul className="nav">
          {
            data.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className={index === activeNav ? 'nav-link btn active' : 'nav-link btn'}
                  onClick={item.onClick}> {item.title} </a>
              </li>
            ))
          }
        </ul>
        <hr className="my-0"></hr>
      </div>
    </Styles>
  )
}


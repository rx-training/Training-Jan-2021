import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .btn {
    font-size: 81%;
    font-weight: bold;
    color: gray;
    border-radius: 0;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;


export default function NavItem1({ links, children }) {
  // marking items into array of three eg. [[1,2,3], [4,5,6]]
  const threeItems = (arr) => {
    var op = []
    for (let i = 0; i < arr.length; i = i + 3) {
      var temp = []
      temp = arr.slice(i, i + 3)
      op.push(temp)
    }
    return op
  }
  const linksToTraverse = threeItems(links)

  return (
    <Styles>
      <div className="row mt-3" >
        <div className="col-6">
          {linksToTraverse.map((items, index) => {

            return (
              <div className="row" key={index}>
                {items.map((item, index) => (
                  <div className="col col-4" key={index}>
                    <a className="btn px-0 py-3 w-100 pl-3 text-left" href={item.href}>{item.name}</a>
                  </div>
                ))}
              </div>
            )
          })}
        </div>

        <div className="col col-6">
          {children}
        </div>
      </div >
    </Styles>
  )
}

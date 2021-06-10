import React from 'react'
import styled from 'styled-components'
import { BsChevronRight } from "react-icons/bs";

const Styles = styled.div`
  img {
    width: 100px;
  }
  .d-flex {
    background-color: #f4f4f4;
    border: 0.1px solid lightgray;

    & > div {
      padding: 8% 3%;
    }
  }
`;

export default function TypeCards({ image, title, link, rightArrow, children }) {
  return (
    <Styles>
      <div className="d-flex btn">
        { image && <div className="">
          <a href={link ? link : '/'}><img src={ image ? image : "images/suv_clr.svg"} alt={title}></img></a>
        </div> }
        <div className="mr-auto  my-auto ">
          <h6>{title ? title : 'title'}</h6>
          { children }
        </div>
        {rightArrow && <div className=" my-auto"><BsChevronRight /></div>}
      </div>
    </Styles>
  )
}

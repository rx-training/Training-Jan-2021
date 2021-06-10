import React from "react";
import Slider from "react-slick";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className = props.onClick === null ? className+=' slick-disabled' : className+=''
  className += " arrow";
  const char = props.type === "next" ? <BsChevronRight /> : <BsChevronLeft />;
  
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

export default function Carousel({ show , scroll, children }) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: show ? show : 3,
    slidesToScroll: scroll ? scroll : 1,
  };

  return (  
    <div className="">

      <Slider {...settings} nextArrow={<Arrow type="next" />} prevArrow={<Arrow type="prev" />} >
        { children }
      </Slider>
    </div >
  );

}
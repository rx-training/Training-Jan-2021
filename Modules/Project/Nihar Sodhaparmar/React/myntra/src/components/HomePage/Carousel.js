import React from "react";

export default function Carousel({ images }) {
  return (
    <section>
      <div className="container-fluid">
        <div
          id="main_slider"
          className="carousel slider1 mb-5"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li data-target="#main_slider" data-slide-to="0"></li>
            <li data-target="#main_slider" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                className="d-block img-fluid"
                src={images[0]}
                alt="First Slide"
                style={{ width: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block img-fluid"
                src={images[1]}
                alt="Second Slide"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

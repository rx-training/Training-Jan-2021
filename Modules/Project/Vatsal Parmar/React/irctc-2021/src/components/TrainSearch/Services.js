import React from "react";
import {
  FaPlane,
  FaHome,
  FaHotel,
  FaBell,
  FaTrain,
  FaBriefcase,
  FaSubway,
  FaHSquare,
  FaUniversity,
} from "react-icons/fa";

const Services = () => {
  return (
    <section className="d-none d-md-block">
      <div className="container text-center py-5">
        <h2>Have you not found the right one?</h2>
        <h2>Find a service suitable for you here.</h2>
        <div className="row justify-content-center">
          <span className="icon-container">
            <FaPlane className="icons" />
            <p>FLIGHTS</p>
          </span>
          <span className="icon-container">
            <FaHotel className="icons" />
            <p>STAY</p>
          </span>
          <span className="icon-container">
            <FaHome className="icons" />
            <p>RAIL DRIDHTI</p>
          </span>
          <span className="icon-container">
            <FaBell className="icons" />
            <p>E-CATERING</p>
          </span>
        </div>
        <div className="row justify-content-center">
          <span className="icon-container">
            <FaBriefcase className="icons" />
            <p>HOLIDAY PACKAGES</p>
          </span>
          <span className="icon-container">
            <FaTrain className="icons" />
            <p>TOURIST TRAIN</p>
          </span>
          <span className="icon-container">
            <FaHSquare className="icons" />
            <p>HILL RAILWAYS</p>
          </span>
          <span className="icon-container">
            <FaSubway className="icons" />
            <p>CHARTER TRAIN</p>
          </span>
          <span className="icon-container">
            <FaUniversity className="icons" />
            <p>GALLERY</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;

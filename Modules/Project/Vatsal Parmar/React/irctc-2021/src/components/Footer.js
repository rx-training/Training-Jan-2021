import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container mx-auto pt-3 pb-1 row">
        <div className="col-md-6 text-center">
          <p>
            Copyright &copy; {new Date().getFullYear()} IRCTC All Rights
            Reserved
          </p>
        </div>
        <div className="col-md-6 text-center">
          <FaFacebook className="footer-icon" />
          <FaYoutube className="footer-icon" />
          <FaInstagram className="footer-icon" />
          <FaTwitter className="footer-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

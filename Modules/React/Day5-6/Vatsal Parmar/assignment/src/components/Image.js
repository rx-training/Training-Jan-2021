import React from "react";

const Image = ({ image }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${image}.jpg`;
  return (
    <img src={url} alt="image" className="student-img " width="80px"></img>
  );
};

export default Image;

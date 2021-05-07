import React from "react";

const College = ({ collageName, address, collegeLogo }) => {
  return (
    <div className="college row">
      <div className="col-8 col-sm-8">
        <p>
          <span>College Name :</span> {collageName}
        </p>
        <p>
          <span>College Address :</span> {address}
        </p>
      </div>
      <div className="col-4 col-sm-4 p-3">
        <img src={collegeLogo} alt="Collage Logo"></img>
      </div>
    </div>
  );
};

export default College;

import React from "react";

const SideBar = () => {
  return (
    <div className="col-md-3 d-none d-md-block">
      <div className="p-3 border border-dark border-bottom-0">
        <img src="./img/ad1.jpg" width="100%" alt="ad1" />
      </div>
      <div className="p-3 border border-dark border-top-0">
        <img src="./img/exterior.jpg" width="100%" alt="ad2" />
      </div>
    </div>
  );
};

export default SideBar;

import React from "react";
import Image from "./Image";
import Personal from "./Personal";
import College from "./College";

const StudentIDCard = ({
  children,
  student: {
    image,
    id,
    firstName,
    lastName,
    dob,
    collageName,
    address,
    collegeLogo,
  },
}) => {
  console.log();
  return (
    <div className="col-lg-4 col-md-6">
      <div className="my-2 p-3 student-id">
        <div className="row">
          <div className="col-4 col-sm-4">
            <Image image={image} />
          </div>
          <div className="col-8 col-sm-8">
            <Personal
              id={id}
              firstName={firstName}
              lastName={lastName}
              dob={dob}
            />
          </div>
        </div>
        <College
          collageName={collageName}
          address={address}
          collegeLogo={collegeLogo}
        />
        {children}
      </div>
    </div>
  );
};

export default StudentIDCard;

import React from "react";

export default function Student({
  student: {
    firstName,
    lastName,
    id,
    college,
    gender,
    city,
    collegeLogo,
    studentImg,
  },
}) {
  return (
    <div className="mx-auto my-3 col-md-6 bg-secondary text-white rounded text-center">
      <div className="p-3 d-flex justify-content-between">
        <img
          src={studentImg}
          width="50px"
          height="50px"
          className="border border-light rounded"
          alt="student"
        />
        <div>
          <h6 className="m-0 text-capitalize">
            NAME : {firstName + " " + lastName}
          </h6>
          <h6 className="m-0 text-capitalize">ID : {id} </h6>
          <h6 className="m-0 text-capitalize">GENDER : {gender} </h6>
          <h6 className="m-0 text-uppercase">COLLEGE : {college} </h6>
          <h6 className="m-0 text-capitalize">CITY : {city} </h6>
        </div>
        <img
          src={collegeLogo}
          width="50px"
          height="50px"
          alt="collegeLogo"
          className="border border-light rounded"
        />
      </div>
    </div>
  );
}

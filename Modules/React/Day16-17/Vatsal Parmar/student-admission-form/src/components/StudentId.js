import React from "react";

function StudentId({
  student: { firstName, middleName, lastName, city, stdImg, _id, gender, dob },
  handleInfo,
}) {
  let id = _id.substr(_id.length - 4);
  return (
    <div className="col-md-4 text-white text-center">
      <div className="bg-secondary rounded pt-2 mb-2">
        <img
          src={`./img/user/${stdImg}`}
          width="50px"
          height="50px"
          className="border border-light rounded"
          alt="student"
        />
        <div>
          <h6 className="m-0 text-capitalize">ID : {id} </h6>
          <h6 className="m-0 text-capitalize">
            NAME : {firstName + " " + middleName + " " + lastName}
          </h6>
          <h6 className="m-0 text-capitalize">GENDER : {gender} </h6>
          <h6 className="m-0 text-uppercase">Date Of Birth : {dob} </h6>
          <h6 className="m-0 text-capitalize">CITY : {city} </h6>
        </div>
        <button
          className="btn btn-info btn-sm m-2"
          onClick={() => handleInfo(_id)}
        >
          View Info
        </button>
      </div>
    </div>
  );
}

export default StudentId;

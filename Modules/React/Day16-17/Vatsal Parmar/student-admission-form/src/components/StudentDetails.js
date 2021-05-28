import React, { useEffect, useState } from "react";
import StudentService from "../services/StudentService";

export default function StudentDetails(props) {
  // const [id, setId] = useState(props.match.params.id);
  const [info, setInfo] = useState({ id: props.match.params.id, student: {} });

  useEffect(() => {
    StudentService.getStudentById(info.id).then((res) => {
      setInfo({ ...info, student: res.data });
    });
  }, []);

  const handleDelete = (id) => {
    StudentService.deleteStudent(id).then((res) => {
      props.history.push("/");
    });
  };

  const handleEdit = (id) => {
    props.history.push(`/add-student/${id}`);
  };

  const {
    _id,
    firstName,
    middleName,
    lastName,
    dob,
    pob,
    language,
    country,
    state,
    city,
    pin,
    fFirstName,
    fMiddleName,
    fLastName,
    fEmail,
    fEdq,
    fProfession,
    fDesignation,
    fPhone,
    mFirstName,
    mMiddleName,
    mLastName,
    mEmail,
    mEdq,
    mProfession,
    mDesignation,
    mPhone,
    eName,
    eRelation,
    eNumber,
    reference,
    rAddress,
    gender,
    stdImg,
  } = info.student;
  return (
    <div className="my-5">
      <div className="p-3 bg-dark text-white text-center rounded-top">
        <h4 className="text-uppercase">Students Details</h4>
      </div>
      <div className="p-5 bg-light text-secondary rounded-bottom">
        <div className="row border text-dark border-secondary rounded p-3">
          <div className="col-md-3 text-center mb-2">
            <img
              className="border border-primary border-2 rounded"
              src={`../img/user/${stdImg}`}
              alt="student image"
            />
          </div>
          <div className="col-md-7">
            <h4 className="text-capitalize">
              name : {firstName + " " + middleName + " " + lastName}
            </h4>
            <h4 className="text-capitalize">id : {_id}</h4>
            <h4 className="text-capitalize">date of birth : {dob}</h4>
            <h4 className="text-capitalize">gender : {gender}</h4>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-warning m-2"
              onClick={() => handleEdit(_id)}
            >
              Edit Profile
            </button>
            <button
              className="btn btn-danger m-2"
              onClick={() => handleDelete(_id)}
            >
              Delete Profile
            </button>
          </div>
          <div>
            <h5 className="text-capitalize">place of birth : {pob}</h5>
            <h5 className="text-capitalize">
              address : {city} , {state} , {country} ,{pin}
            </h5>
            <h5 className="text-capitalize">language : {language}</h5>
          </div>
        </div>
        {/* perents details */}
        <div className="row mt-3">
          <div className="col-md-6  p-3">
            <h4 className="text-primary">Father Details : </h4>
            <h5 className="text-capitalize">
              father name : {fFirstName} {fMiddleName} {fLastName}
            </h5>
            <h5 className="text-capitalize">email id : {fEmail}</h5>
            <h5 className="text-capitalize">
              qducation qualification : {fEdq}
            </h5>
            <h5 className="text-capitalize">profession : {fProfession}</h5>
            <h5 className="text-capitalize">designation : {fDesignation}</h5>
            <h5 className="text-capitalize">phone : {fPhone}</h5>
          </div>
          <div className="col-md-6  p-3 ">
            <h4 className="text-primary">Mother Details : </h4>
            <h5 className="text-capitalize">
              mother name : {mFirstName} {mMiddleName} {mLastName}
            </h5>
            <h5 className="text-capitalize">email id : {mEmail}</h5>
            <h5 className="text-capitalize">
              qducation qualification : {mEdq}
            </h5>
            <h5 className="text-capitalize">profession : {mProfession}</h5>
            <h5 className="text-capitalize">designation : {mDesignation}</h5>
            <h5 className="text-capitalize">phone : {mPhone}</h5>
          </div>
        </div>
        <div className="row">
          {/* Emergency Contact */}
          <div className="col-md-6  p-3">
            <h4 className="text-primary">Emergency Contact :</h4>
            <h5 className="text-capitalize">name of relative : {eName}</h5>
            <h5 className="text-capitalize">relation : {eRelation}</h5>
            <h5 className="text-capitalize">phone : {eNumber}</h5>
          </div>
          {/* referance details */}
          <div className="col-md-6  p-3">
            <h4 className="text-primary">Reference Through :</h4>
            <h5 className="text-capitalize">name : {reference}</h5>
            <h5 className="text-capitalize">address : {rAddress}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./App.css";

/*Assigment-2 =  Create a StudentIDCard Component which will include another component image,Personal
Component include(ID,FirstName,LastName,DOB),College Component include collegeName,College Address and
College Logo) */

const College = () => {
  return (
    <div className="college row">
      <div className="col-8 col-sm-8">
        <p>
          <span>College Name :</span> NSIT
        </p>
        <p>
          <span>College Address :</span> Ahmedabad
        </p>
      </div>
      <div className="col-4 col-sm-4 p-3">
        <img
          src="https://storage.googleapis.com/ezap-prod/colleges/6112/narnarayan-shastri-institute-of-technology-ahmedabad-logo.png"
          alt="Collage Logo"
        ></img>
      </div>
    </div>
  );
};

const Personal = () => {
  return (
    <div className="student">
      <p>
        <span>Student Id :</span> 1
      </p>
      <p>
        <span>Fist Name :</span> Bob
      </p>
      <p>
        <span>Last Name :</span> Doe
      </p>
      <p>
        <span>Date Of Birth :</span> 2/3/1990
      </p>
    </div>
  );
};

const Image = () => {
  const url = `https://randomuser.me/api/portraits/thumb/men/33.jpg`;
  return <img src={url} alt="image" className="student-img" width="80px"></img>;
};

const StudentIDCard = () => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="my-2 p-3 student-id">
        <div className="row">
          <div className="col-4 col-sm-4">
            <Image />
          </div>
          <div className="col-8 col-sm-8">
            <Personal />
          </div>
        </div>
        <College />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="row">
      <StudentIDCard />
    </div>
  );
};

export default App;

//-------------------------------------------------END-------------------------------------------------------

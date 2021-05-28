import React from "react";
import "./App.css";

/*Assignment-4 = Call StudentID Card component 3 times and pass different student data using props.*/

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

const Personal = ({ id, firstName, lastName, dob }) => {
  return (
    <div className="student">
      <p>
        <span>Student Id :</span> {id}
      </p>
      <p>
        <span>Name :</span> {firstName + " " + lastName}
      </p>
      <p>
        <span>Date Of Birth :</span> {dob}
      </p>
    </div>
  );
};

const Image = ({ image }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${image}.jpg`;
  return <img src={url} alt="image" className="student-img" width="80px"></img>;
};

const StudentIDCard = ({
  image,
  id,
  firstName,
  lastName,
  dob,
  collageName,
  address,
  collegeLogo,
}) => {
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
      </div>
    </div>
  );
};

function App() {
  let nsitLogo =
    "https://storage.googleapis.com/ezap-prod/colleges/6112/narnarayan-shastri-institute-of-technology-ahmedabad-logo.png";
  let ljLogo =
    "https://images.shiksha.com/mediadata/images/1571906946phprsr9nH.jpeg";
  return (
    <div className="row">
      <StudentIDCard
        image="1"
        id="1"
        firstName="Jhon"
        lastName="Doe"
        dob="03-1-1991"
        collageName="NSIT"
        address="Ahmedabad"
        collegeLogo={nsitLogo}
      />
      <StudentIDCard
        image="2"
        id="2"
        firstName="Jhoney"
        lastName="Doe"
        dob="05-2-1991"
        collageName="NSIT"
        address="Ahmedabad"
        collegeLogo={nsitLogo}
      />
      <StudentIDCard
        image="3"
        id="3"
        firstName="Bob"
        lastName="Doe"
        dob="27-1-1991"
        collageName="LJEIT"
        address="Vadodara"
        collegeLogo={ljLogo}
      />
    </div>
  );
}

export default App;

//-------------------------------------------------END-------------------------------------------------------

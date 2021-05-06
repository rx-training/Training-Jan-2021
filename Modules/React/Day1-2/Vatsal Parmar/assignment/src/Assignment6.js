import React from "react";
import "./App.css";

/*Assignment-6 While calling StudentID Component in the app Component pass one <p>Student Details</p>
as children. Access it in the StudentID Card Component with Children props.*/

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
  const students = [
    {
      image: "1",
      id: 1,
      firstName: "Jhon",
      lastName: "Doe",
      dob: "03-05-2021",
      collageName: "NSIT",
      address: "Ahmedabad",
      collegeLogo:
        "https://storage.googleapis.com/ezap-prod/colleges/6112/narnarayan-shastri-institute-of-technology-ahmedabad-logo.png",
    },
    {
      image: "2",
      id: 2,
      firstName: "Bob",
      lastName: "Doe",
      dob: "05-11-2021",
      collageName: "NSIT",
      address: "Ahmedabad",
      collegeLogo:
        "https://storage.googleapis.com/ezap-prod/colleges/6112/narnarayan-shastri-institute-of-technology-ahmedabad-logo.png",
    },
    {
      image: "3",
      id: 3,
      firstName: "Jhony",
      lastName: "Doe",
      dob: "03-01-2021",
      collageName: "LJEIT",
      address: "Vadodara",
      collegeLogo:
        "https://images.shiksha.com/mediadata/images/1571906946phprsr9nH.jpeg",
    },
  ];
  return (
    <div className="row">
      <StudentIDCard student={students[0]}>
        <p>Student Details</p>
      </StudentIDCard>
      <StudentIDCard student={students[1]}>
        <p>Student Details</p>
      </StudentIDCard>
      <StudentIDCard student={students[2]}>
        <p>Student Details</p>
      </StudentIDCard>
    </div>
  );
}

export default App;

//-------------------------------------------------END-------------------------------------------------------

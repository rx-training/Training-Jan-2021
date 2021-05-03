import { Children } from "react";
import "./App.css";

const College = ({ collageName, address, collegeLogo }) => {
  return (
    <div className="college">
      <p>
        <span>College Name :</span> {collageName}
      </p>
      <p>
        <span>College Address :</span> {address}
      </p>
      <img src={collegeLogo} alt="Collage Logo"></img>
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
    <div className="student-id">
      <Image image={image} />
      <Personal id={id} firstName={firstName} lastName={lastName} dob={dob} />
      <College
        collageName={collageName}
        address={address}
        collegeLogo={collegeLogo}
      />
      {children}
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
    <div className="app">
      <StudentIDCard student={students[0]} />
      <StudentIDCard student={students[1]}>
        <p>Student Details</p>
      </StudentIDCard>
      <StudentIDCard student={students[2]} />
    </div>
  );
}

export default App;

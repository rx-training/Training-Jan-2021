import React from "react";
import "./App.css";

/*Assignment-3 Store above example info javascript variable and then display dynamically,
 Display FullName variable in respective Component*/

const College = () => {
  let collageName = "NSIT";
  let address = "Ahmedabad";
  let collegeLogo =
    "https://storage.googleapis.com/ezap-prod/colleges/6112/narnarayan-shastri-institute-of-technology-ahmedabad-logo.png";
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

const Personal = () => {
  let id = 2;
  let firstName = "Mitchel";
  let lastName = "Stark";
  let dob = "03-08-1992";
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

function App() {
  return (
    <div className="row">
      <StudentIDCard />
    </div>
  );
}

export default App;

//-------------------------------------------------END-------------------------------------------------------

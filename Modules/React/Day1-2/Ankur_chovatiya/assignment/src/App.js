import logo from './logo.svg';
import './App.css';
import PersonList from './components/personList';
import Hello from './components/helloworld';
import StudentIdCard from './components/studentIdCard';
import collageLogo from './img/download.jpg';
import Profile from './img/Profile.jpg';
import StudentIdCard1 from './components/studentIdCard1';
import StudentIdCard2 from './components/studentIdCard2';
import StudentIdCard3 from './components/studentIdCard3';
import StudentIdCard6 from './components/studentIdCard6';

const Students = [
  {
      Id : 17002010,
      studentImage : Profile,
      firstName : "ankur",
      lastName : "patel",
      dob : "24/10/1999",
      collegeName : "AIT",
      collegeAddress : "Gota , Ahmedabad",
      collegeLogo : collageLogo
  },
  {
      Id : 17002020,
      studentImage : Profile,
      firstName : "kishan",
      lastName : "patel",
      dob : "20/11/1998",
      collegeName : "AIT",
      collegeAddress : "Gota , Ahmedabad",
      collegeLogo : collageLogo
  },
  {
      Id : 17002018,
      studentImage : Profile,
      firstName : "Rohan",
      lastName : "patel",
      dob : "12/8/1996",
      collegeName : "AIT",
      collegeAddress : "Gota , Ahmedabad",
      collegeLogo : collageLogo
  }
]

function App() {
  return (
    <div className="person-list">
      {/* <PersonList />  */}
      {/* <Hello></Hello> */}
      
      {/* <StudentIdCard3 name="rohan patel" id="170020" dob="20/12/2000"></StudentIdCard3>
      <StudentIdCard3 name="Kishan patel" id="17220" dob="18/12/1999"></StudentIdCard3>
      <StudentIdCard3 name="raj patel" id="175625" dob="15/10/2000"></StudentIdCard3> */}
      <StudentIdCard6 student={Students[0]}> </StudentIdCard6>
      <StudentIdCard6 student={Students[1]}><p>This is Student Details</p> </StudentIdCard6>
      <StudentIdCard6 student={Students[2]}> </StudentIdCard6>
      {/* <StudentIdCard student={Students[0]}></StudentIdCard>
      <StudentIdCard student={Students[1]}>
        <p>This is Student Details</p>
      </StudentIdCard>
      <StudentIdCard student={Students[2]}></StudentIdCard>
       */}
    </div>
  );
}

export default App;

import Helloworld from './components/helloworld'
import './App.css'
import { StudentID } from './components/studentId/studentID'
import pic1 from './static/pic1.jpg'
import pic2 from './static/pic2.jpg'
import pic3 from './static/pic3.jpg'

function App() {
  var info =  [
    {
      path : pic1,
       id : "12345",
       firstName : "Abhishek",
       lastNme : "shah",
       dob : "22-04-1998",
       clgName : "LJIET",
       clgAddress : "ahmedabad",
       clgLogo : "mylogo"
    },
    {
      path : pic2,
       id : "123454",
       firstName : "Anand",
       lastNme : "sharma",
       dob : "12-12-1999",
       clgName : "GEC bharuch",
       clgAddress : "bharuch",
       clgLogo : "mylogo"
    },
    {
      path : pic3,
       id : "12345",
       firstName : "bhavya",
       lastNme : "trivedi",
       dob : "02-06-2000",
       clgName : "BVM",
       clgAddress : "vidhyanagar",
       clgLogo : "mylogo"
    },
  ]
  return (
    <div className="App">
      <Helloworld></Helloworld>
      <StudentID info = {info[0]} >
        <p>Student Details</p>
      </StudentID>
      <StudentID info = {info[1]} >
        <p>Student Details</p>
      </StudentID>
      <StudentID info = {info[2]} >
        <p>Student Details</p>
      </StudentID>
    </div>
  );
}

export default App;


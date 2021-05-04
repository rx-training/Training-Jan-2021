import Helloworld from './components/helloworld'
import './App.css'
import { StudentID } from './components/studentId/studentID'

//bootstrap-theme file for bootstrap 3 only
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';



function App() {
  var info =  [
    {
      url : "https://randomuser.me/api/portraits/men/73.jpg",
      id : "12345",
      firstName : "Abhishek",
      lastNme : "shah",
      dob : "22-04-1998",
      clgName : "LJIET",
      clgAddress : "ahmedabad",
      clgLogo : "https://image.shutterstock.com/image-vector/graduation-student-logo-vector-letter-260nw-407113282.jpg"
    } ,
    {
      url : "https://randomuser.me/api/portraits/med/men/83.jpg",
      id : "123454",
      firstName : "Anand",
      lastNme : "sharma",
      dob : "12-12-1999",
      clgName : "GEC bharuch",
      clgAddress : "bharuch",
      clgLogo : "https://www.designevo.com/res/templates/thumb_small/blue-shield-and-banner-emblem.png"
    },
    {
      url : "https://randomuser.me/api/portraits/med/men/29.jpg",
      id : "12345",
      firstName : "bhavya",
      lastNme : "trivedi",
      dob : "02-06-2000",
      clgName : "BVM",
      clgAddress : "vidhyanagar",
      clgLogo : "https://upload.wikimedia.org/wikipedia/en/0/0c/BVM-Logo-1.png"
    },
  ] 


var allIds = []
for(var i of info){
  allIds.push(<StudentID info = {i} />) 
}

  return (
    <div className="App">
      <Helloworld />
      {allIds}
    </div>
  );
}

export default App;


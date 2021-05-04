import './App.css';
import { StudentID } from './components/studentId/studentID';

function App() {
  return (
    <div>

      <StudentID id={"12345"} 
                firstName={"Abhishek"} 
                lastNme={"shah"} 
                dob={"22-04-1998"} 
                clgName={"LJIET"} 
                clgAddress={"ahmedabad"} 
                clgLogo ={"https://image.shutterstock.com/image-vector/graduation-student-logo-vector-letter-260nw-407113282.jpg"} 
                url={"https://randomuser.me/api/portraits/men/73.jpg"}/>

      <StudentID id={"12345"}
                firstName={"bhavya"}
                lastNme={"trivedi"}
                dob={"02-06-2000"}
                clgName={"VGEC"}
                clgAddress={"Gandhinagar"}
                clgLogo= {"https://upload.wikimedia.org/wikipedia/en/0/0c/BVM-Logo-1.png"}
                url={"https://randomuser.me/api/portraits/men/75.jpg"}/>

      <StudentID id={"12345"} 
                firstName={"Anand"} 
                lastNme={"sharma"} 
                dob={"02-06-2000"} 
                clgName={"BVM"} 
                clgAddress={"Vidhyanagar"} 
                clgLogo ={"https://www.designevo.com/res/templates/thumb_small/blue-shield-and-banner-emblem.png"} 
                url={"https://randomuser.me/api/portraits/med/men/29.jpg"}/>
    </div>
  );
  
}

export default App;
 
   
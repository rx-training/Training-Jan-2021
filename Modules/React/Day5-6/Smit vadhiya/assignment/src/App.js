import { StudentID, StudentIDs } from './studentId/studentID'
import info from './studentId/stdChild/studentData'
import './custome.scss';
import Index from './extraAssignment';

function App() {
  return (
    <div className="">
      <h1 className="display-3 text-center bg-dark p-2 text-white">Assignment Day 5-6</h1>
      <StudentIDs info = {info}/>  
      <Index />
    </div>
  );
}

export default App;

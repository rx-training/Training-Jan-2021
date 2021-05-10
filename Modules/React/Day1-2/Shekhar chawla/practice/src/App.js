import './App.css';

import HandsOnFromSite from './components/practice/ReactSite/HandsOnFromSite'
import HandsOnFromVideo from './components/practice/Videos/HandsOnFromVideos'

import Assignment1 from './components/assignment/1/Hello'
// import StudentList from './components/assignment/x/StudentList'
import Assignment2 from './components/assignment/2/StudentIdCard'
import Assignment3 from './components/assignment/3/StudentIdCard'
import Assignment4 from './components/assignment/4-5/StudentIdCard'
import Assignment6 from './components/assignment/6/StudentIdCard'

function App() {
  return (
    <div className="App">
      {/* Practice components */}
      <p className="display-3">React site</p>
      <HandsOnFromSite />

      <hr />
      <p className="display-3">Radix videos - React Basic tutorials - section 3</p>
      <HandsOnFromVideo />


      {/* Assignment components */}
      <hr />
      <p className="display-3">Assignments</p>
      <Assignment1 />
      <Assignment2 /> <hr />
      <Assignment3 /> <hr />
      <Assignment4 /> <hr />
      <Assignment6> 
        <p>Student Details</p>
      </Assignment6> 





      {/* extra components(please ignore) */}
      {/* <StudentList>
        <p>These are records of students</p>
      </StudentList> */}

    </div>
  );
}

export default App;

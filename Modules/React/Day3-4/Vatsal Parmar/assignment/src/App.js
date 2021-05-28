import "./App.css";
import StudentList from "./components/StudentList";

/*Assognment - Create a 5 student info List in the StudentList class component and store it in the state 
Object and pass this info StudentIDCard Component using map function and props. */

function App() {
  return (
    <div className="App" className="container my-3">
      <h4 className="text-success">
        Assignment - Create a 5 student info List in the StudentList class
        component and store it in the state Object and pass this info
        StudentIDCard Component using map function and props.
      </h4>
      <StudentList />
    </div>
  );
}

export default App;

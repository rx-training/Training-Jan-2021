import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StudentListComponent from "./components/StudentListComponent";
import ViewStudentComponent from "./components/ViewStudentComponent";
import AddStudentComponent from "./components/AddStudentComponent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={StudentListComponent}></Route>
        <Route path="/students" component={StudentListComponent}></Route>
        <Route path="/add-student/:id" component={AddStudentComponent}></Route>
        <Route
          path="/view-student/:id"
          component={ViewStudentComponent}
        ></Route>
        {/* <Route path="/edit-category/:id" component={EditCategory}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./components/Form";
import StudentList from "./components/StudentList";
import Navbar from "./components/Navbar";
import StudentDetails from "./components/StudentDetails";

function App() {
  return (
    <div>
      <Router>
        <div className="container main-container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={StudentList}></Route>
            {/* <Route path="/students" exact component={StudentList}></Route> */}
            <Route path="/add-student/:id" component={Form}></Route>
            <Route path="/student/:id" component={StudentDetails}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

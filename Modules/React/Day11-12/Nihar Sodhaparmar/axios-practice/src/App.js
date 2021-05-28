import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListCategory from "./components.js/ListCategory";
import AddCategory from "./components.js/AddCategory";
import EditCategory from "./components.js/EditCategory";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={ListCategory}></Route>
          <Route path="/category" component={ListCategory}></Route>
          <Route path="/add-category" component={AddCategory}></Route>
          {/* <Route
            path="/view-category/:id"
            component={ViewEmployeeComponent}
          ></Route> */}
          <Route path="/edit-category/:id" component={EditCategory}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

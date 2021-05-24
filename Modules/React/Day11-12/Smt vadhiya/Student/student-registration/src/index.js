import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import Form from './pages/Form';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListStudent from './pages/ListStudent';
import MoreInfo from './pages/MoreInfo';
import { Navbar } from './components/Navbar';
import { StudentIDs } from './components/studentId/studentID';


ReactDOM.render(
  <Router>
      <Navbar />
    <div className="container">
      <Switch>
        <Route path="/" exact component={ListStudent} ></Route>
        <Route path="/add-student" exact component={Form} ></Route>
        <Route path="/update-student/:id" exact component={Form} ></Route>
        <Route path="/more-info/:id" exact component={MoreInfo} ></Route>
        <Route path="/student-cards" exact component={StudentIDs} ></Route>
      </Switch>
    </div>
  </Router>
,
  document.getElementById('root')
);

reportWebVitals();
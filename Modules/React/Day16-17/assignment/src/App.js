import React from 'react';
import {Form} from './pages/Form';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Route, Switch} from 'react-router-dom'
import {ListStudent} from './pages/ListStudent';
import {MoreInfo} from './pages/MoreInfo';
import { Navbar } from './components/Navbar';
import { StudentIDs } from './components/studentId/studentID';

export const App = () => {
  return (
    <div>
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
    </div>
  )
}


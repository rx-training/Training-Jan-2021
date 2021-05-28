import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./Form";
import StudentList from "./components/StudentList";
import Student from "./components/Student";
export default function App() {
    return (
        <>
            <div className="container-fuild">
                <Navbar />
            </div>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={StudentList}></Route>

                    <Route
                        path="/student/:id"
                        exact
                        component={Student}
                    ></Route>

                    <Route path="/add-student/:id" component={Form}></Route>
                </Switch>
            </div>
        </>
    );
}

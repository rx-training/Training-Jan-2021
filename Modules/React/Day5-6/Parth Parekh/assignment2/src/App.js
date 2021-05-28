import "./App.css";
import AreaofCircle from "./areaofCircle";
import Rectangle from "./Rectangle";
import LeftSidebar from "./LeftSidebar";

// 4. Create a left bar component which contain some dummy adds.

import React, { Component } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default class App extends Component {
    render() {
        return (
            <div className="m-2 font">
                <div className="row">
                    <div className="col-md-3 d-none d-md-block">
                        <LeftSidebar />
                    </div>
                    <div className="col-sm-12 col-md-9">
                        <div className="container">
                            <div className="row ">
                                <Rectangle />
                            </div>

                            <div className="row ">
                                <AreaofCircle />
                            </div>
                            <div className="row ">
                                <Login />
                            </div>
                            <div className="row ">
                                <Signup />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

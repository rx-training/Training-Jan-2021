import React, { Component } from "react";
import Circle from "./components/Circle";
import LeftBar from "./components/LeftBar";
import Login from "./components/Login";
import Rectangle from "./components/Rectangle";
import SignUp from "./components/SignUp";

// 1.Create a Rectangle Component which computes area of Rectangle.
// 2. Create Login Component which validate a user with below credential username=admin, password=admin
// 3. Create a circle component which computes area of Circle
// 4. Create a left bar component which contain some dummy adds.
// 5. Create a signup component which contains field like Name, Address, PanNumber and interpolate these information in the paragraph
// Call all these component in the App Component.
// Arrange these component properly, Use proper Bootstrap

export default class App extends Component {
  render() {
    return (
      <div className="container py-5">
        <div className="row padding-x">
          <div className="col-md-3">
            <LeftBar></LeftBar>
          </div>
          <div className="col-md-9 padding-x">
            <div>
              <div>
                <Rectangle></Rectangle>
              </div>
              <div className="mt-5">
                <Circle></Circle>
              </div>
              <div className="mt-5">
                <Login></Login>
              </div>
              <div className="mt-5">
                <SignUp></SignUp>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

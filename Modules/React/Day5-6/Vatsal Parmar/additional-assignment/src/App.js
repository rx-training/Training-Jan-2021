import React from "react";
import Leftbar from "./components/Leftbar";
import Circle from "./components/Circle";
import LogIn from "./components/LogIn";
import Rectangle from "./components/Rectangle";
import SignUp from "./components/SignUp";

class App extends React.Component {
  /*Additional Assignment:-
    1. Create a Rectangle Component which computes area of Rectangle.
    2. Create Login Component which validate a user with below credential username=admin, password=admin
    3. Create a circle component which computes area of Circle
    4. Create a left bar component which contain some dummy adds.
    5. Create a signup component which contains field like Name, Address, PanNumber and interpolate these information in the paragraph
       Call all these component in the App Component.
       Arrange these component properly, Use proper Bootstrap,*/
  constructor(props) {
    super(props);
    this.state = {
      circle: false,
      rectangle: false,
      login: true,
      signup: false,
    };
  }
  showCircle = () => {
    this.setState({
      circle: true,
      rectangle: false,
      login: false,
      signup: false,
    });
  };
  showRectangle = () => {
    this.setState({
      circle: false,
      rectangle: true,
      login: false,
      signup: false,
    });
  };
  showLogin = () => {
    this.setState({
      circle: false,
      rectangle: false,
      login: true,
      signup: false,
    });
  };
  showSignup = () => {
    this.setState({
      circle: false,
      rectangle: false,
      login: false,
      signup: true,
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-success text-center m-2">Additional Assignment</h1>
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <Leftbar />
          </div>
          <div className="col-md-9">
            <div className="row bg-dark text-white text-center">
              <div
                className={
                  this.state.login
                    ? "col-md-3 nav-btn p-3 bg-secondary"
                    : "col-md-3 nav-btn p-3"
                }
                onClick={this.showLogin}
              >
                Login
              </div>
              <div
                className={
                  this.state.rectangle
                    ? "col-md-3 nav-btn p-3 bg-secondary"
                    : "col-md-3 nav-btn p-3"
                }
                onClick={this.showRectangle}
              >
                Rectangle
              </div>
              <div
                className={
                  this.state.circle
                    ? "col-md-3 nav-btn p-3 bg-secondary"
                    : "col-md-3 nav-btn p-3"
                }
                onClick={this.showCircle}
              >
                Circle
              </div>
              <div
                className={
                  this.state.signup
                    ? "col-md-3 nav-btn p-3 bg-secondary"
                    : "col-md-3 nav-btn p-3"
                }
                onClick={this.showSignup}
              >
                Sign Up
              </div>
            </div>
            <div className="p-3">
              {this.state.circle && <Circle />}
              {this.state.rectangle && <Rectangle />}
              {this.state.login && <LogIn />}
              {this.state.signup && <SignUp />}
            </div>
          </div>
          <div className="px-4 d-md-none">
            <Leftbar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

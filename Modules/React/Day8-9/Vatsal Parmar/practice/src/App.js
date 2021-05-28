import React, { Component } from "react";
import PersonList from "./components/PersonList";
import Controlled from "./components/form/Controlled";
import Uncontrolled from "./components/form/Uncontrolled";
import Counter from "./components/Counter/Counter.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pr1: true, pr2: false, pr3: false, pr4: false };
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-success text-center">Practice Exercise</h1>
        <div className="row bg-dark text-white text-center">
          <div
            className={
              this.state.pr1
                ? "col-md-3 p-2 bg-secondary nav-option"
                : "col-md-3 p-2 nav-option"
            }
            onClick={() => {
              this.setState({ pr1: true, pr2: false, pr3: false, pr4: false });
            }}
          >
            Practice Exercise 1,2,3
          </div>
          <div
            className={
              this.state.pr2
                ? "col-md-3 p-2 bg-secondary nav-option"
                : "col-md-3 p-2 nav-option"
            }
            onClick={() => {
              this.setState({ pr1: false, pr2: true, pr3: false, pr4: false });
            }}
          >
            Practice Exercise 4
          </div>
          <div
            className={
              this.state.pr3
                ? "col-md-3 p-2 bg-secondary nav-option"
                : "col-md-3 p-2 nav-option"
            }
            onClick={() => {
              this.setState({ pr1: false, pr2: false, pr3: true, pr4: false });
            }}
          >
            Practice Exercise 5
          </div>
          <div
            className={
              this.state.pr4
                ? "col-md-3 p-2 bg-secondary nav-option"
                : "col-md-3 p-2 nav-option"
            }
            onClick={() => {
              this.setState({ pr1: false, pr2: false, pr3: false, pr4: true });
            }}
          >
            Practice Exercise 6
          </div>
        </div>
        <div className="p-3">
          {this.state.pr1 && (
            <div>
              <h4 className="text-success">1. PropTypes</h4>
              <h4 className="text-success">2. isRequired and defaultProps</h4>
              <h4 className="text-success">3.propType Object Shape</h4>
              <PersonList />
            </div>
          )}
          {this.state.pr2 && (
            <div>
              <h4 className="text-success">
                4. Controlled Input Form Submission
              </h4>
              <Controlled />
            </div>
          )}
          {this.state.pr3 && (
            <div>
              <h4 className="text-success">5. uncontrolled Input with ref</h4>
              <Uncontrolled />
            </div>
          )}
          {this.state.pr4 && (
            <div>
              <h4 className="text-success">6. React Fragment</h4>
              <Counter amount="2" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;

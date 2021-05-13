import React, { Component } from "react";
import Counter from "./components/Counter/Counter";
import ControlledInputsForm from "./components/ControlledInputs/ControlledInputsForm";
import UnControlledInputsForm from "./components/UnControlledInputs/UnControlledInputsForm";
import PersonList from "./components/PropTypes/PersonList";

export default class App extends Component {
  render() {
    return (
      <>
        <PersonList></PersonList>
        <ControlledInputsForm></ControlledInputsForm>
        <UnControlledInputsForm></UnControlledInputsForm>
        <Counter amount="2"></Counter>
      </>
    );
  }
}

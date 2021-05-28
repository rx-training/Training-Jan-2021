import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

function LoginButton(props) {
    return (
      <Button onClick={props.onClick}>
        Login
      </Button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <Button onClick={props.onClick}>
        Logout
      </Button>
    );
  }

export default  class ConditionCompt2 extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          {/* <Greeting isLoggedIn={isLoggedIn} /> */}
          {button}
        </div>
      );
    }
  }
  
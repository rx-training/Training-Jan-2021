import React, { Component } from 'react'

export default class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
      }
    
      handleLoginClick=()=> {
        this.setState({isLoggedIn: true});
      }
    
      handleLogoutClick=()=> {
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
          <div className="container text-center">
            <Greeting isLoggedIn={this.state.isLoggedIn}/>
            {button}
          </div>
        );
      }
}

function LoginButton(props) {
    return (
      <button className="btn btn-success btn-lg mx-auto mt-5" onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button className="btn btn-danger btn-lg mx-auto mt-5" onClick={props.onClick}>
        Logout
      </button>
    );
  }

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
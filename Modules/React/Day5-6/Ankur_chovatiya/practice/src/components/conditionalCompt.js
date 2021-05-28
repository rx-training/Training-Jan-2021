import React from 'react'

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
function GuestGreeting(props) {
    return <h1>Please sign up First.</h1>;
  }


function ConditionalCompt(props) {

    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return(<UserGreeting ></UserGreeting>)
    }
        return(<GuestGreeting></GuestGreeting>)


}

export default ConditionalCompt


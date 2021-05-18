import React, { Component } from 'react'

//**************************** */ USE OF EVENT HANDLER ***************************
export const ReactSite = () => {   
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="google.com" onClick={handleClick}>
            Click me (Colsole)
        </a>
    );
}


//         TOGGLE USING HANDLER
export class ToggleButton extends Component {
    constructor(props){
        super(props)
        this.state = { isToggleOn : false }
    }

    toggleButton = () => {
        this.setState({isToggleOn : !this.state.isToggleOn})
    }

    render() {
        return (
            <button className="btn btn-primary" onClick ={this.toggleButton}>Toggle : {this.state.isToggleOn ? 'on' : 'off'} </button>
        )
    }
}


//              USE OF THIS IN CLASS
export class LoggingButton extends Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
    // This syntax ensures `this` is bound within handleClick
        return (
            <button className="btn btn-warning" onClick={() => this.handleClick()} >
                Click me(see colsole)
            </button>
        );
    }
}


//****************************** CONDITIONAL RENDERING ***************************
function UserGreeting() {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
    return <h1>Please sign up.</h1>;
}          

export function Greeting(props) { 
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}


// LOGIN LOGOUT

function LoginButton(props) {
    return (
    <button className="btn btn-primary"  onClick={props.onClick}>
        Login
    </button>
    );
}

function LogoutButton(props) {
    return (
    <button className="btn btn-primary"  onClick={props.onClick}>
        Logout
    </button>
    );
}

export class LoginControl extends React.Component {
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
                <Greeting isLoggedIn={isLoggedIn} />
            {button}
            </div>
        );
    }
}

//     HIDE AND SHOW

function WarningBanner(props) {
    if (!props.warn) {
    return null;
}

    return (
    <div className="warning">
        Warning!
    </div>
    );
}

export class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
        showWarning: !state.showWarning
        }));
    }

    render() {
        return (
        <div>
            <WarningBanner warn={this.state.showWarning} />
            <button className="btn btn-primary" onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
        );
    }
}

/*********************************  Lifting State Up  **************************/



/*******************  Celcius to fahrenheit ******************/

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}
const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
}

const fullName = {
    c : 'Celsius',
    f : 'Fahrenheit' 
}


class TempInput extends Component {
    constructor(props){
        super(props)
    }

    

    render() {
        const changeTemp = (e) => {
            this.props.change(e.target.value)
        }
        return (
            <div>
                <h5>Enter Temperature in {fullName[this.props.name]}</h5>
                <input type="text" value={this.props.value} onChange={changeTemp}/>
            </div>
        )
    }
}




export class TempConvert extends Component {
    constructor(props){
        super(props)
        this.state = {celsius: '', fahrenheit : ''}
    }

    printCelsius = (fahrenheit) => {
        this.setState({celsius : toCelsius(fahrenheit),fahrenheit : fahrenheit})
    }
    printFahrenheit = (celsius) => {
        this.setState({fahrenheit : toFahrenheit(celsius),celsius : celsius})
    }

    render() {
        return (
            <div>
                <TempInput name = {"c"} value={this.state.celsius} change={this.printFahrenheit}/>
                <TempInput name = {'f'} value={this.state.fahrenheit} change={this.printCelsius}/>
                <BoilingVerdict
                    celsius={parseFloat(this.state.celsius)} />
            </div>
        )
    }
}


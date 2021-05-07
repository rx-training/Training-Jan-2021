import React, { Component } from 'react'
import Rectangle from './Rectangle'
import Circle from './Circle'
import Signup from './Signup'
import Ad from './Ad'
import Login from './Login'

export default class Index extends Component {
    constructor(props){
        super(props)
        this.state = {default : true}
    }
    render() {
        return (
            
            <div className="container-fluid">
                <div className="row">
                <h1 className="display-3 text-center bg-dark p-2 text-white">Extra Assignment</h1>
                    <div className="col-12 col-sm-6 col-md-3 order-2 pt-2">
                        <Rectangle />
                        <Circle />
                    </div>
                    <div className="col-12 col-md-6 p-1 order-md-2">
                        {this.state.default ? <Signup /> : <Login />}
                        <div className="text-center p-1">
                            <button className="btn btn-secondary " onClick={() => this.setState({default : !this.state.default})}>
                                {this.state.default ? 'Already Account? Login' : 'FirstTime User? Signup'}
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 order-3">
                        <Ad />
                    </div>
                </div>
            </div>
        )
    }
}
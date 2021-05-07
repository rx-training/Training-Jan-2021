import React, { Component } from 'react'

function Success(props){
    return (
        <div className ="row m-2 border border-success rounded">
            <h2 className="bg-success p-2 text-center text-white display-4"> Signup Succesful </h2>
            <div className="p-0">
                <table className="table table-striped table-hover">
                    <tbody>
                        <tr>
                            <th>Name </th>
                            <td>{props.data.name}</td>
                        </tr>
                        <tr>
                            <th>Address </th>
                            <td>{props.data.address}</td>
                        </tr>
                        <tr>
                            <th>Pan No  </th>
                            <td>{props.data.panNo}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {name : '', address : '',panNo : '', display : false}
    }

    displayInfo = ()=>{
        this.setState({display : true})
    }

    render() {
        return (
        <div>

            {
                this.state.display ?
                <Success data={this.state}/>
                : 
                <div className ="row  m-2 border border-primary rounded">
                    <h2 className="bg-primary p-2 text-center text-white display-4"> Sign Up </h2>
                    <form className="p-2" onSubmit={this.displayInfo}>
                        <div className="form-group ">
                            <label  htmlFor="length">Enter Name </label>
                            <input type="text" className="form-control" onChange={(e) => this.state.name = e.target.value} placeholder="Name" required="required"/>
                        </div>
                        <div className="form-group ">
                            <label  htmlFor="length">Enter Address </label>
                            <input type="text" className="form-control" onChange={(e) => this.state.address = e.target.value} placeholder="Address" required="required"/>
                        </div>
                        <div className="form-group">
                            <label  htmlFor="width">Enter Pan Number </label>
                            <input type="text" className="form-control" onChange={(e) => this.state.panNo = e.target.value} placeholder="Pan Number" required="required"/>
                        </div>
                        <input type="submit" className="btn btn-primary" value="Sign Up" onClick={this.login}/>
                    </form>
                </div>
            }
        </div>
        )
    }
}

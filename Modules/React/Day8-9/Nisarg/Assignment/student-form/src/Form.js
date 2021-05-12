import React, { Component } from 'react'

export class Form  extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:'',
             username:'',
             lastname:'',
             clgname:'',
             logo:'',
             img:''
        }
    }
    handleIDChange=event=>
    {
        this.setState({
            id:event.target.value
        })
    }
    handleUserChange=event=>
    {
        this.setState({
            username:event.target.value
        })
    }
    handlelastnameChange=event=>
    {
        this.setState({
            lastname:event.target.value
        })
    }
    handleclgnameChange=event=>
    {
        this.setState({
            clgname:event.target.value
        })
    }
    
    render() {
        return (
            <form>
                <div class="form-group w-50 ml-3">
                    <label>ID</label>
                    <input type="text" 
                    value={this.state.id}
                    onChange={this.handleIDChange}
                    class="form-control" />
                </div>

                <div class="form-group w-50 ml-3">
                    <label>Firstname</label>
                    <input type="text" 
                    value={this.state.username}
                    onChange={this.handleUserChange}
                    class="form-control"
                    />
                </div>

                
                <div class="form-group w-50 ml-3">
                    <label>Lastname</label>
                    <input type="text" 
                    value={this.state.lastname}
                    onChange={this.handlelastnameChange}
                    class="form-control"
                    />
                </div>

                <div class="form-group w-50 ml-3">
                    <label>CollegeName</label>
                    <input type="text" 
                    value={this.state.clgname}
                    onChange={this.handleclgnameChange}
                    class="form-control"
                    />
                </div>

                <div>
                </div>

                <div>
                </div>

            </form>
        )
    }
}
export default Form;


/*

Create Student Form With ID,FirstName, LastName,image, CollegeName and College Logo.

Submit this value to the list. And display this list.

Note: state and ref both should be used.

State: ID,FirstName,LastName,CollegeName

Ref: Logo and image
*/
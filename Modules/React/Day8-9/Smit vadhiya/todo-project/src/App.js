import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import TodoInput from './components/TodoInput';
import uuid from 'uuid'

import React, { Component } from 'react';
import TodoList from './components/TodoList';


export default class App extends Component {
    state = {
        items : [{id :1,title : 'wake up'},{id :2,title : 'make breakfast'}],
        id : uuid(),
        item : "",
        editItem:false
    }
    handleChange =(e) =>{
        this.setState({item : e.target.value})
    }

    handleSubmit =(e)=>{
        e.preventDefault()
        const newItem = {
            id : this.state.id,
            title : this.state.item
        }
        const updatedItems = [...this.state.items,newItem]
        if(newItem.title.length > 0 ){                                                         
            this.setState({
                items: updatedItems,
                id :uuid(),
                item : "",
                editItem:false
            })
        }
    }

    handleClearlist =()=>{
        this.setState({items : []})
    }

    handleDelete =(id)=>{
        const updateItems = this.state.items.filter((item) => item.id !== id)
        this.setState({items : updateItems})
    }

    handleEdit =(id)=>{
        const updateItems = this.state.items.filter((item) => item.id !== id)
        const myItem = this.state.items.find((item) => item.id === id)
        this.setState({
            items : updateItems,
            item:myItem.title,
            id:id,
            editItem:true
        })
    }



    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 mx-auto mt-5">
                    <h1 className="text-capitalize text-center" >todo input</h1>
                        <TodoInput 
                            item= {this.state.item}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            editItem={this.state.editItem}
                        />
                        <TodoList 
                            items={this.state.items}
                            handleEdit={this.handleEdit}
                            handleDelete={this.handleDelete}
                            handleClearlist={this.handleClearlist}
                        />
                </div>
            </div>
        </div>
        )
    }
}

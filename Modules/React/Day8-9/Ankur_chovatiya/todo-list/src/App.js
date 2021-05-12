import React from'react';
import './App.css';
import {v4 as uuid} from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/todoInput';
import Todolist from './components/todolist';
import { Component } from 'react';



class App extends Component  {
  
  state = {
    items : [],
    id:uuid(),
    item:'',
    editItem : false
  }

  handleChange = (e) => {
    
    this.setState({
      item:e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title:this.state.item
    }
    const updatedItems = [...this.state.items,newItem]
    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    },()=> console.log(this.state))

  }
  clearList = (e) => {
    this.setState({
      items : []
    });
  }
  // editItem = (e) => {console.log('edit Item');}
  handleEdit = (id) => {
      const filteredItems = this.state.items.filter(item => item.id !== id );
      const selectedItem = this.state.items.find(item => item.id === id)
      this.setState({
          items : filteredItems,
          item:selectedItem.title,
          id:id,
          editItem:true
      })

  }
  handleDelete= (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id );
    this.setState({
      items : filteredItems
    });
  }


  render(){
   return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-capitalize text-center">Todo Input</h3>
        </div>
      </div>
      <TodoInput item={this.state.item} 
      handleChange={this.handleChange} 
      handleSubmit = {this.handleSubmit}
      editItem = {this.state.editItem}
      ></TodoInput>
      <Todolist
      items = {this.state.items}
      clearList = {this.clearList}
      handleDelete = {this.handleDelete}
      handleEdit = {this.handleEdit}
      ></Todolist>
    </div>
  );
}
}

export default App;

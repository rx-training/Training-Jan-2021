import React, { Component } from 'react'
import TodoItem from './todoItem'


export default class Todolist extends Component {
    render() {
        return (
            <div>
               <h1>Todo list</h1> 
               <TodoItem></TodoItem>
            </div>
        )
    }
}

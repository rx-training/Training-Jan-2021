import React, { Component } from 'react'
import TodoItem from './todoItem'


export default class Todolist extends Component {
    render() {
        const {items , clearList , handleDelete , handleEdit} = this.props;
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">Todo list</h3>    
                
                {items.map((item)=> {
                    return(
                        <TodoItem key={item.id} title={item.title} 
                        handleDelete={()=>handleDelete(item.id)}
                        handleEdit={()=> handleEdit(item.id) }
                        ></TodoItem>
                    )
                })}

                <button
                    type="button"
                    className="btn btn-danger btn-block text-uppercase mt-5"
                    onClick={clearList}
                >
                    Clear list
                </button>

                </ul>
               
            </div>
        )
    }
}

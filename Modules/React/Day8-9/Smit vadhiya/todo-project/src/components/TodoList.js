import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {items,handleEdit,handleDelete,handleClearlist} = this.props
        return (
            <div className="border p-2">
                <ul className="list-group my-3">
                    <h2 className="text-capitalize text-center">todo list</h2>
                    {items.map((item)=> 
                        <TodoItem
                            key={item.id}
                            title={item.title} 
                            handleDelete={()=> handleDelete(item.id)}
                            handleEdit={()=>handleEdit(item.id)}
                        />)}
                    <button className="btn btn-danger btn-block mt-4" onClick={handleClearlist}>
                        Clear list
                    </button>
                </ul>
            </div>
        )
    }
}

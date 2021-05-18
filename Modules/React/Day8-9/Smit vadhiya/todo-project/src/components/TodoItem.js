import React, { Component } from 'react'

export default class TodoItem extends Component {
    
    render() {
        const {title,handleDelete,handleEdit} = this.props
        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6 className="text-capitalize" >{title}</h6>
                <div>
                    <span className="mx-2 text-success"onClick={handleEdit}>
                        <i className="fa fa-pen"></i>
                    </span>
                    <span className="mx-2 text-danger"onClick={handleDelete}>
                        <i className="fa fa-trash"></i>
                    </span>
                </div>
            </li>
        )
    }
}

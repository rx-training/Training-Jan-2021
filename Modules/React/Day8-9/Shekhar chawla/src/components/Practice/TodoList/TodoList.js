import React from 'react'
import './todolist.scss'

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            items: [],
            currentItem: '',
            edit: false
        }
    }

    handleChange = (e) => {
        this.setState({
            currentItem: e.target.value
        })
    }

    handleAddItem = () => {
        this.setState({
            items: [...this.state.items, this.state.currentItem],
            currentItem: '',
            edit: false
        })
    }
    handleEdit = (index) => {
        const itemToEdit = this.state.items[index]
        const filterItems = this.state.items.filter((e, i) => i !== index)

        this.setState({
            currentItem: itemToEdit,
            items: filterItems,
            edit: true
        })
    }
    handleDelete = (index) => {
        const filterItems = this.state.items.filter((e, i) => i !== index)

        this.setState({
            items: filterItems
        })
    }

    render() {
        console.log(this.state.currentItem)
        return (
            <div className="todo">
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                        <i class="fas fa-list"></i>
                    </span>
                    <input type="text" id="inputItem" className="form-control" placeholder="add item" aria-label="item" aria-describedby="basic-addon1"
                        value={this.state.currentItem} onChange={this.handleChange} />
                </div>

                <div className="d-grid my-4">
                    <button className={this.state.edit ? 'btn btn-success' : 'btn btn-primary'} onClick={this.handleAddItem}>
                        {this.state.edit ? 'Edit item' : 'Add item'}
                    </button>
                </div>

                { this.state.items.length !== 0 &&
                    <ul className="list-group">
                        {this.state.items.map((item, index) => (
                            <li className="list-group-item" key={index}> 

                                <div className="row">
                                    <div className="col col-1">
                                    {index + 1}
                                    </div>
                                    <div className="col col-9 text-center">
                                    {item}
                                    </div>
                                    <div className="col col-2 text-center fs-5">
                                    <span onClick={() => this.handleEdit(index)}>
                                    <i className="far fa-edit px-4 text-success"></i>
                                </span>
                                
                                
                                <span onClick={() => this.handleDelete(index)}>
                                    <i className="fas fa-trash text-danger"></i>
                                </span>
                                    </div>
                                </div>

                                
                            </li>
                        ))}
                    </ul>
                }

            </div>
        )
    }
}


export default TodoList
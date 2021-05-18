import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit,editItem} = this.props
        return (
            <div className="card card-body my-3 border">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text h-100 text-white bg-primary">
                                <i className="fa fa-book"></i>
                            </span>
                        </div>
                        <input 
                            type="text" 
                            className="form-control text-capitalize" 
                            placeholder="Todo Input" 
                            value={item}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" 
                        className={
                            editItem 
                                ? "btn mt-3 btn-success col-12 text-uppercase"
                                :"btn mt-3 btn-primary col-12  text-uppercase"} >
                        {editItem ?"edit item" :"add item"} 
                    </button>

                </form>
            </div>   
        )
    }
}

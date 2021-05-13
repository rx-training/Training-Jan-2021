import React, { Component } from "react";

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props;
        console.log(editItem);
        return (
            <>
                <h1 className="text-center mx-auto">Todo Input</h1>
                <div className="card card-body my-3 text-center">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-book bg-primary"></i>
                                </div>
                            </div>
                            <input
                                type="text"
                                className="form-control text-capitalize"
                                placeholder="Add Todo item"
                                value={item}
                                onChange={handleChange}
                            />
                            <button
                                className={
                                    editItem
                                        ? "btn btn-block btn-success mt-3 p-1"
                                        : "btn btn-block btn-primary mt-3 p-1"
                                }
                            >
                                {editItem ? "Edit Item" : "Add Items"}
                            </button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

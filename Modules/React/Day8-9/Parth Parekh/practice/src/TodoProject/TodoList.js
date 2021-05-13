import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;
        return (
            <>
                <h1 className="text-center ">Todo List</h1>

                {items.map((item) => {
                    return (
                        <TodoItem
                            key={item.id}
                            title={item.title}
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}
                            clearList={clearList}
                        />
                    );
                })}
                <button
                    type="button"
                    className="btn btn-danger btn-block"
                    onClick={clearList}
                >
                    ClearList
                </button>
            </>
        );
    }
}

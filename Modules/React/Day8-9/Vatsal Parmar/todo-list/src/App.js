import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: uuidv4(),
      item: "",
      editItem: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({ items: [] });
  };
  handleDelete = (id) => {
    const updatedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: updatedItems });
  };
  handleEdit = (id) => {
    const updatedItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: updatedItems,
      item: selectedItem.title,
      id: id,
      editItem: true,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

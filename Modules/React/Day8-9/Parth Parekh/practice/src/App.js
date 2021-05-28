import Counter from "./Counter";
import Form from "./Form";
import PersonList from "./PersonList";
import UncontrolledForm from "./UncontrolledForm";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoProject/TodoList";
import TodoInput from "./TodoProject/TodoInput";
import { Component } from "react";

class App extends Component {
    state = {
        items: [],
        id: uuidv4(),
        item: "",
        editItem: false,
    };

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ item: value });
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
        this.setState({ items: [], item: "" });
    };

    handleDelete = (id) => {
        console.log(id);
        const filterItems = this.state.items.filter((item) => item.id !== id);
        this.setState({ items: filterItems });
    };
    handleEdit = (id) => {
        const filterItems = this.state.items.filter((item) => item.id !== id);
        const selectedItem = this.state.items.find((item) => item.id === id);
        this.setState({
            items: filterItems,
            item: selectedItem.title,
            id: id,
            editItem: true,
        });
    };

    render() {
        return (
            <div className="container">
                <h1 className="display-4  text-center  text-monospace  p-2">
                    Day8-9 Practice Exercise
                </h1>
                <PersonList /> <hr />
                <Form /> <hr />
                <UncontrolledForm />
                <Counter amount="2" /> <hr />
                <div className="row p-3 m-3 bg-dark text-monospace text-white border border-primary">
                    <div className="col-sm-12 col-md-8 mx-auto  text-capitalize">
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

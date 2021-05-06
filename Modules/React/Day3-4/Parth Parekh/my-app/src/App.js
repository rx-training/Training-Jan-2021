import React, { Component } from "react";
import BookList from "./BookList";
import "./App.css";

//2. Practice Exercise from official site. Using map function and state object
function ListItem(props) {
    return <li>{props.value}</li>;
}

class NumberList extends Component {
    state = {
        numbers: [1, 2, 3, 4, 5],
    };

    render() {
        return (
            <>
                List And keys Example
                <ul>
                    {this.state.numbers.map((number) => (
                        <ListItem key={number.toString()} value={number} />
                    ))}
                </ul>
            </>
        );
    }
}

function App() {
    return (
        <div className="container bg-dark text-white p-4 mb-2">
            <div className="row">
                <BookList />
            </div>
            <div className="text-primary h5">
                <hr className="bg-white" />
                <NumberList />
            </div>
        </div>
    );
}

export default App;

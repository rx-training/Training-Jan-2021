import "./App.css";
import React from "react";
import BookList from "./BookList";
import "./App.css";
import Calculator from "./Temprature";

function App() {
    return (
        <div className="container">
            <div className="row bg-dark text-white  m-2">
                <BookList />
            </div>
            <div className="row  m-2">
                <Calculator />
            </div>
        </div>
    );
}

export default App;

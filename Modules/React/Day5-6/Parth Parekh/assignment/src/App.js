import "./App.css";
import React from "react";
import StudentList from "./StudentList";

const App = () => {
    return (
        <div className="container mt-2">
            <div className="row">
                <StudentList />
            </div>
        </div>
    );
};

export default App;

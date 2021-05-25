import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div className="row  bg-dark text-white p-2">
            <div className="col-md-4 text-center">
                <h3 className="display-4" style={{ letterSpacing: "3px" }}>
                    Student API
                </h3>
            </div>
            <div className="col-md-3  my-auto h4 text-center">
                <Link to="/">Home</Link>
            </div>
            <div className="col-md-3 h4 my-auto text-center">
                <Link to="/add-student/_add">New Form</Link>
            </div>
        </div>
    );
}

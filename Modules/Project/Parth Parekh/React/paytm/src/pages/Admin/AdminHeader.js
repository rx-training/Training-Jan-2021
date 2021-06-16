import React from "react";
import { FaUserSecret } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function AdminHeader() {
    return (
        <>
            <h1 className="text-center my-3 " style={{ fontFamily: "initial" }}>
                {" "}
                <FaUserSecret className="admin-icon" /> Admin
            </h1>
            <div
                className="text-center d-flex justify-content-center"
                style={{ fontSize: "16px" }}
            >
                <Link to="/admin">Admin</Link> /
                <Link to="/userdata">All Users Data</Link> /
                <Link to="/addCategory">Add Category</Link> /
                <Link to="/addProducts">Add Products</Link>
            </div>
        </>
    );
}

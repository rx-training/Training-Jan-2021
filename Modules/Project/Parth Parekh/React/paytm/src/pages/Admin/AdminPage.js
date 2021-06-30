import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";

import { FaCopyright } from "react-icons/fa";

import { Link } from "react-router-dom";
import PaytmServices from "../../Services/paytmServices";
import { removeUserSession } from "../../Utils/Common";
import AdminHeader from "./AdminHeader";
import { getUserId, getToken } from "../../Utils/Common";

export default function AdminPage() {
    useEffect(() => {
        PaytmServices.getAllUserData(getUserId(), getToken())
            .then((res) => {})
            .catch((error) => {
                if (error.response.status === 401) {
                    removeUserSession();
                    window.location.href = "/login";
                }
            });
    }, []);
    return (
        <div className="main-container">
            <AdminHeader />
            <div className="row  p-5 text-center justify-content-around">
                <div className="col-md-3 p-2 my-2 btn btn-success">
                    <Link
                        to="/userdata"
                        style={{
                            textDecoration: "none",
                            fontSize: "22px",
                            color: "whitesmoke",
                        }}
                    >
                        <FaUsers className="react-icons" />
                        View Users Data
                    </Link>
                </div>
                <div className="col-md-3 p-2 my-2 btn btn-warning">
                    {" "}
                    <Link
                        to="/addcategory"
                        style={{
                            textDecoration: "none",
                            fontSize: "22px",
                            color: "whitesmoke",
                        }}
                    >
                        <FaCopyright className="react-icons" /> Category
                    </Link>
                </div>
                <div className="col-md-3 p-2 my-2 btn btn-primary">
                    {" "}
                    <Link
                        to="/addProducts"
                        style={{
                            textDecoration: "none",
                            fontSize: "22px",
                            color: "whitesmoke",
                        }}
                    >
                        <FaProductHunt className="react-icons" /> Products
                    </Link>
                </div>
            </div>
        </div>
    );
}

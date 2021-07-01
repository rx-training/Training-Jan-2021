import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useParams } from "react-router-dom";
import PaytmServices from "../../Services/paytmServices";
import { getToken, getUserId, removeUserSession } from "../../Utils/Common";
import AdminHeader from "./AdminHeader";

export default function CategoryForm(props) {
    const [cname, setCname] = useState("");
    const { id } = useParams();

    const [message, setMessage] = useState("");
    useEffect(() => {
        if (id === "add") {
            return;
        } else {
            PaytmServices.getCategoryById(getUserId(), getToken(), id)
                .then((res) => {
                    setCname(res.data.CategoryName);
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        removeUserSession();
                        window.location.href = "/login";
                    }
                });
        }
    }, []);

    const handleChange = (e) => {
        setMessage("");
        setCname(e.target.value);
    };
    const handleSubmit = () => {
        const data = {
            CategoryName: cname,
        };
        if (id === "add") {
            PaytmServices.addCategory(getUserId(), getToken(), data)
                .then((res) => {
                    NotificationManager.success(
                        `Category : ${cname} added`,
                        "",
                        3000
                    );
                    props.history.push("/addcategory");
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        removeUserSession();
                        window.location.href = "/login";
                    } else {
                        setMessage("Something wrong");
                    }
                });
        } else {
            PaytmServices.updateCategory(getUserId(), getToken(), id, data)
                .then((res) => {
                    NotificationManager.success(`Category  updated`, "", 3000);
                    props.history.push("/addcategory");
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        removeUserSession();
                        window.location.href = "/login";
                    } else {
                        setMessage("Something wrong");
                    }
                });
        }
    };

    return (
        <div className="main-container">
            <AdminHeader />
            <div className="row m-5 p-4">
                <div className="col-md-8 mx-auto border bg-light m-2 p-4">
                    {message.length > 0 && <h1>{message}</h1>}
                    <input
                        type="text"
                        name="cname"
                        className="form-control m-2"
                        value={cname}
                        placeholder="Category Name"
                        onChange={handleChange}
                        required
                    />
                    {id === "add" ? (
                        <button
                            className="btn btn-info m-2 "
                            onClick={handleSubmit}
                        >
                            Add Category
                        </button>
                    ) : (
                        <button
                            className="btn btn-success m-2"
                            onClick={handleSubmit}
                        >
                            Edit Category
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

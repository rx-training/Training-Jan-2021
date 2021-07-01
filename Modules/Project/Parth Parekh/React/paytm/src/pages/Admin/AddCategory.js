import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import PaytmServices from "../../Services/paytmServices";
import { getUserId, getToken, removeUserSession } from "../../Utils/Common";
import { GoPlus } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Spinners from "../../components/dummyPage/Spinners";
import { NotificationManager } from "react-notifications";
import Pagination from "../../components/Pagination/Pagination";

export default function AddCategory(props) {
    const [category, setCateogry] = useState([]);
    const [message, setMessage] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(5);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    useEffect(() => {
        async function Category() {
            try {
                const res = await PaytmServices.getCategory(
                    getUserId(),
                    getToken()
                );
                setCateogry(res.data);
                // console.log(res.data);
            } catch (error) {
                if (error.response.status === 401) {
                    removeUserSession();
                    props.history.push("/login");
                }
            }
        }
        Category();
    }, []);
    const handleDelete = (id, name) => {
        let val = window.confirm(`Are you sure to Delete ${name} cateogry`);
        if (val) {
            PaytmServices.deleteCategory(getUserId(), getToken(), id)
                .then((res) => {
                    NotificationManager.success(`${name} deleted successfully`);
                    window.location.href = "/addcategory";
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
            {message.length > 0 && <h1>{message}</h1>}
            <div className="row">
                <div
                    className="col-md-9 col-11 mx-auto border border-primary my-3 bg-light"
                    style={{ fontFamily: "initial" }}
                >
                    <h1 className="text-center  p-2">Categories</h1>
                    {category.length === 0 && <Spinners />}
                    <table className="table table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>No</th>
                                <th>Category Name</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentItems.map((category, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {(currentPage - 1) * itemPerPage +
                                                index +
                                                1}
                                        </td>
                                        <td>{category.CategoryName}</td>
                                        <td>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => {
                                                    props.history.push(
                                                        `/category/${category._id}`
                                                    );
                                                }}
                                            >
                                                <FaEdit /> Edit
                                            </button>
                                        </td>
                                        <td>
                                            {" "}
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => {
                                                    handleDelete(
                                                        category._id,
                                                        category.CategoryName
                                                    );
                                                }}
                                            >
                                                <FaTrash /> Delete
                                            </button>{" "}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center my-2">
                        <button
                            className="btn btn-primary p-2 m-2"
                            onClick={() => {
                                props.history.push(`/category/add`);
                            }}
                        >
                            <GoPlus className="icons1" /> Add Category
                        </button>
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        itemPerPage={itemPerPage}
                        pageNumberLimit={pageNumberLimit}
                        maxPageNumberLimit={maxPageNumberLimit}
                        setmaxPageNumberLimit={setmaxPageNumberLimit}
                        minPageNumberLimit={minPageNumberLimit}
                        setminPageNumberLimit={setminPageNumberLimit}
                        data={category}
                        currentItems={currentItems}
                        setCurrentItems={setCurrentItems}
                    />
                </div>
            </div>
        </div>
    );
}

import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";

import PaytmServices from "../../Services/paytmServices";
import { getUserId, getToken, removeUserSession } from "../../Utils/Common";
import Spinners from "../../components/dummyPage/Spinners";

import FilterUserForm from "./FilterUserForm";
import { FaTrash } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function UserData(props) {
    const [users, setUsers] = useState([]);

    const [data, setData] = useState([]);
    const [nameSearch, setnameSearch] = useState("");
    const [emailSearch, setemailSearch] = useState("");
    const [mobileSearch, setmobileSearch] = useState("");

    useEffect(() => {
        PaytmServices.getAllUserData(getUserId(), getToken())
            .then((res) => {
                const data = res.data;
                setUsers(data);
                // const d = data.filter((item) => item.name !== "Paytm Admin");
                setData(data);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    removeUserSession();
                    window.location.href = "/login";
                }
            });
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(5);

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemPerPage); i++) {
        pages.push(i);
    }
    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={
                        currentPage === number
                            ? "page-item page-link bg-primary text-white"
                            : "page-item page-link "
                    }
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    const indexofLastItem = currentPage * itemPerPage;
    const indexofFirstItem = indexofLastItem - itemPerPage;
    const currentItems = data.slice(indexofFirstItem, indexofLastItem);

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };
    /************      Handle Change   ********************/
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        let tempData = [...users];
        setCurrentPage(1);
        if (name === "nameSearch") {
            if (value.length > 0) {
                tempData = tempData.filter((item) => {
                    let tempSearch = value.toLowerCase();
                    let tempName = item.name
                        .toLowerCase()
                        .slice(0, value.length);

                    if (tempSearch === tempName) {
                        return item;
                    }
                });
            }
            setnameSearch(value);

            setmobileSearch("");
            setemailSearch("");
        }
        if (name === "emailSearch") {
            if (value.length > 0) {
                tempData = tempData.filter((item) => {
                    let tempSearch = value.toLowerCase();
                    let tempName = item.email
                        .toLowerCase()
                        .slice(0, value.length);

                    if (tempSearch === tempName) {
                        return item;
                    }
                });
            }
            setemailSearch(value);
            setmobileSearch("");
            setnameSearch("");
        }
        if (name === "mobileSearch") {
            let a = value.toString();
            if (a.length > 0) {
                tempData = tempData.filter((item) => {
                    let tempSearch = a;
                    let tempName = item.mobileno.toString().slice(0, a.length);

                    if (tempSearch === tempName) {
                        return item;
                    }
                });
            }
            setmobileSearch(value);
            setemailSearch("");

            setnameSearch("");
        }

        setData(tempData);
    };

    /************      Handle Submit   ********************/
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleDelete = (id) => {
        PaytmServices.deleteUser(id, getToken())
            .then((res) => {
                const data1 = data.filter((item) => item._id !== id);
                setData(data1);
                alert("User deleted successfully");
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    removeUserSession();
                    props.history.push("/login");
                }
            });
    };

    const showTransactions = (id) => {
        props.history.push("/transactions/" + id);
    };

    return (
        <div className="main-container">
            <AdminHeader />
            <div className="row">
                <div
                    className="col-md-11 col-11 mx-auto border border-primary my-3 bg-light"
                    style={{ fontFamily: "initial" }}
                >
                    {users.length === 0 && <Spinners />}
                    <FilterUserForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        nameSearch={nameSearch}
                        emailSearch={emailSearch}
                        mobileSearch={mobileSearch}
                    />
                    {data.length === 0 ? (
                        <h1 className="text-center mt-4 text-danger">
                            User Not Found
                        </h1>
                    ) : (
                        <>
                            <table className="p-4 my-3 text-center table table-hover ">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile no</th>
                                        <th>Balance</th>
                                        <th>Transactions</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-light">
                                    {currentItems.map((user, index) => {
                                        return (
                                            <tr className="" key={index}>
                                                <td>
                                                    {(currentPage - 1) *
                                                        itemPerPage +
                                                        index +
                                                        1}
                                                </td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.mobileno}</td>
                                                <td>{user.balance}</td>
                                                <td>
                                                    {" "}
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={() => {
                                                            showTransactions(
                                                                user._id
                                                            );
                                                        }}
                                                    >
                                                        <FaEyeSlash /> View{" "}
                                                    </button>{" "}
                                                </td>
                                                <td className="d-flex justify-content-center">
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        onClick={() => {
                                                            handleDelete(
                                                                user._id
                                                            );
                                                        }}
                                                    >
                                                        <FaTrash /> Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            {pages.length > 1 ? (
                                <ul
                                    className="pagination pagination-lg"
                                    style={{ cursor: "pointer" }}
                                >
                                    {currentPage === 1 ? (
                                        <li className="page-item page-link text-muted">
                                            {" "}
                                            Prev
                                        </li>
                                    ) : (
                                        <li
                                            className="page-item page-link"
                                            onClick={handlePrevBtn}
                                        >
                                            {" "}
                                            Prev
                                        </li>
                                    )}

                                    {renderPageNumbers}
                                    {currentPage === pages.length ? (
                                        <li className="page-item  page-link text-muted">
                                            {" "}
                                            Next
                                        </li>
                                    ) : (
                                        <li
                                            className="page-item page-link"
                                            onClick={handleNextBtn}
                                        >
                                            {" "}
                                            Next
                                        </li>
                                    )}
                                </ul>
                            ) : (
                                ""
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

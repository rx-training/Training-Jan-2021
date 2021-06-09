import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";

import PaytmServices from "../../Services/paytmServices";
import { getUserId, getToken, removeUserSession } from "../../Utils/Common";
import Spinners from "../../components/dummyPage/Spinners";

import { FaTrash } from "react-icons/fa";

export default function UserData(props) {
    const [users, setUsers] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        PaytmServices.getAllUserData(getUserId(), getToken())
            .then((res) => {
                const data = res.data;
                setUsers(data);
                const d = data.filter((item) => item.name !== "Paytm Admin");
                setData(d);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    removeUserSession();
                    window.location.href = "/login";
                }
            });
    }, []);

    const handleDelete = (id) => {
        PaytmServices.deleteUser(id, getToken())
            .then((res) => {
                const data1 = data.filter((item) => item._id !== id);
                setData(data1);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    removeUserSession();
                    props.history.push("/login");
                }
            });
    };

    return (
        <div className="main-container">
            <AdminHeader />
            <div className="mx-5">
                {data.length === 0 && <Spinners />}
                {data.length > 0 && (
                    <>
                        <table
                            className="p-4 my-3 text-center table table-hover "
                            style={{ fontFamily: "initial" }}
                        >
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile no</th>
                                    <th>Balance</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="bg-light">
                                {data.map((user, index) => {
                                    return (
                                        <tr className="" key={index}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.mobileno}</td>
                                            <td>{user.balance}</td>
                                            <td className="d-flex justify-content-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => {
                                                        handleDelete(user._id);
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
                    </>
                )}
            </div>
        </div>
    );
}

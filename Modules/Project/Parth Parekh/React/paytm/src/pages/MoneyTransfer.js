import React, { useState, useEffect } from "react";
import { FaHandshake } from "react-icons/fa";
import PaytmServices from "../Services/paytmServices";
import { getToken, getUserId, removeUserSession } from "../Utils/Common";

export default function MoneyTransfer(props) {
    const [amount, setAmount] = useState("");
    const [phn, Setphn] = useState("");

    const [mess, setMess] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        PaytmServices.getUserDetailsFromId(getUserId(), getToken())
            .then((res) => {
                //console.log(res);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    removeUserSession();
                    window.location.href = "/login";
                }
            });
    }, []);

    const handleChange = (e) => {
        const name = e.target.name;

        const value = e.target.value;
        setMess("");
        if (name === "phn") {
            Setphn(value);
            if (/^[0-9]{10}$/.test(value)) {
                setMessage("");
            } else {
                setMessage("Phone Number required 10 digit");
            }
        }

        if (name === "amount") {
            if (value >= 0) {
                setAmount(value);
            }
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setMess("");
        const data = {
            senderId: getUserId(),
            amount: parseInt(amount),
            mobileno: phn,
        };
        if (message.length === 0) {
            PaytmServices.moneyTransfer(getUserId(), getToken(), data)
                .then((res) => {
                    props.history.push("/passbook");
                })
                .catch((error) => {
                    if (error.response.status === 404) {
                        setMess("Receiver Mobile Number not Found !!!");
                    } else if (error.response.status === 404) {
                        setMess("Something went Wrong!!!");
                    } else if (error.response.status === 402) {
                        setMess("Insufficent Balance");
                    } else if (error.response.status === 401) {
                        removeUserSession();
                        window.location.href = "/login";
                    }
                });
        }
    };

    return (
        <div className="main-container">
            <div className="container my-5 p-5 text-capitalize">
                <h3 style={{ fontFamily: "initial", letterSpacing: "3px" }}>
                    Money Transfer
                    <FaHandshake
                        style={{
                            fontSize: "52px",
                            color: "#165182",
                            marginLeft: "1rem",
                        }}
                        className="h3"
                    />
                </h3>
                {mess.length > 0 ? (
                    <h5 className="text-danger text-center text-capitalize">
                        {mess}
                    </h5>
                ) : (
                    ""
                )}
                <form onSubmit={handleSubmit} style={{ fontFamily: "initial" }}>
                    <div className="row my-3">
                        <div className="col-md-9 mt-1">
                            <div className="row">
                                <div className="col-md-3">
                                    <label htmlFor="" className="h5 ">
                                        Receiver Number
                                    </label>
                                </div>

                                <div className="col-md-9">
                                    {message.length > 0 ? (
                                        <h5 className="text-danger">
                                            {message}
                                        </h5>
                                    ) : (
                                        ""
                                    )}
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            onChange={phn}
                                            name="phn"
                                            value={phn}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="mobile no"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label
                                        htmlFor=""
                                        className="h5  text-center"
                                    >
                                        Amount
                                    </label>
                                </div>
                                <div className="col-md-9">
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            name="amount"
                                            value={amount}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Enter Amount"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 ">
                            <button
                                className=" btn btn-outline-info btn-block   p-2"
                                style={{
                                    borderRadius: "24px",
                                }}
                                disabled={
                                    phn.length === 10 && amount.length > 0
                                        ? false
                                        : true
                                }
                            >
                                Transfer Money
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

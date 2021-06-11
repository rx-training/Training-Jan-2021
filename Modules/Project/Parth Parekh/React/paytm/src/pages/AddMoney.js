import React, { useEffect, useState } from "react";
import addmoney from "../add_money.svg";

import PaytmServices from "../Services/paytmServices";
import { getUserId, getToken, removeUserSession } from "../Utils/Common";
export default function AddMoney(props) {
    const [amount, setAmount] = useState("");
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

    const handleChange = (event) => {
        if (event.target.name === "number") {
            if (event.target.value >= 0) {
                setAmount(event.target.value);
            }
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            amount: parseInt(amount),
            userId: getUserId(),
        };
        PaytmServices.addMoney(getUserId(), getToken(), data)
            .then((res) => {
                console.log("Money added to your account");
                props.history.push("/passbook");
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    setMessage("Something Went Wrong Please Try Again !!!");
                } else if (error.response.status === 401) {
                    removeUserSession();
                    window.location.href = "/login";
                }
            });
    };
    return (
        <div className="main-container">
            <div className="container my-5 p-5 text-capitalize">
                {message.length > 0 && (
                    <h3 className="text-center">{message}</h3>
                )}
                <h3 style={{ fontFamily: "monospace", letterSpacing: "3px" }}>
                    <img src={addmoney} alt="add Money" width="45" /> Add Money
                    To your Wallet
                </h3>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-9 mt-1">
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="number"
                                    id="number"
                                    value={amount}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter Amount "
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <button
                                className="btn btn-outline-info btn-block   p-2"
                                style={{
                                    borderRadius: "24px",
                                }}
                                disabled={amount.length > 0 ? false : true}
                            >
                                Add Money
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

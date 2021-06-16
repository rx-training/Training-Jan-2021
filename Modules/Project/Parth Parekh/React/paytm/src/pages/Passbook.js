import React, { useEffect, useState } from "react";

import PaytmServices from "../Services/paytmServices";
import { getUserId, getToken, removeUserSession } from "../Utils/Common";

import { GiReceiveMoney } from "react-icons/gi";
import { FaMinus } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

import { GoPlus } from "react-icons/go";

export default function Passbook() {
    const [wallet, setWallet] = useState("");
    const [transactions, setTransactions] = useState([]);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        PaytmServices.getTransactionDetailsOFUser(getUserId(), getToken())
            .then((res) => {
                //console.log(res.data);

                setWallet(res.data.balance);
                setTransactions(res.data.transactions);
                setOrders(res.data.orders);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    removeUserSession();
                    window.location.href = "/login";
                }
            });
    }, []);

    return (
        <div className="main-container">
            <div className="container-fluid ">
                <h1 className="text-info text-center my-3">
                    Transaction Details{" "}
                </h1>

                <h1
                    className=" text-center  my-3 ml-3"
                    style={{ fontFamily: "initial" }}
                >
                    {" "}
                    Paytm Balance : {wallet}
                    <span>
                        <FaRupeeSign className="mainRupee" />{" "}
                    </span>
                </h1>

                {transactions.length === 0 && (
                    <h3 className="text-center text-monospace ">
                        No Transaction Yet
                    </h3>
                )}

                {transactions.length > 0 ? (
                    <div className="border m-2 px-5 bg-light transaction">
                        {transactions.map((item, index) => {
                            const d = new Date(item.transactionDate);

                            const time = d.toString().split(" ")[4];
                            const date =
                                d.getDate() +
                                "/" +
                                d.getMonth() +
                                "/" +
                                d.getFullYear();

                            return (
                                <div
                                    className="row mx-auto mx-3 p-3"
                                    key={index}
                                >
                                    <div
                                        className="col-8 text-center"
                                        style={{
                                            borderBottom: "1px solid lightgrey",
                                        }}
                                    >
                                        {item.paymentType === "Money Added" ? (
                                            <h5>
                                                <GoPlus className="icons" />
                                                Money Added
                                            </h5>
                                        ) : item.paymentType === "Send" ? (
                                            <>
                                                {" "}
                                                <h5>
                                                    <RiSendPlaneFill className="icons" />

                                                    {"Money Send to  " +
                                                        item.receiverName}
                                                </h5>
                                                <h6 className="m-2">
                                                    Mobile no :
                                                    {" " +
                                                        item.receiverMobileNo}
                                                </h6>
                                            </>
                                        ) : (
                                            <>
                                                {" "}
                                                <h5>
                                                    <GiReceiveMoney className="icons" />
                                                    {"Recevied From  " +
                                                        item.senderName}
                                                </h5>
                                                <h6 className="m-2">
                                                    Mobile no :
                                                    {" " + item.senderMobileNo}
                                                </h6>
                                            </>
                                        )}

                                        <h6 className="text-muted">
                                            {time} , Date : {date}
                                        </h6>
                                    </div>
                                    <div
                                        className="col-4 "
                                        style={{
                                            borderBottom: "1px solid lightgrey",
                                        }}
                                    >
                                        <h5 className="d-flex justify-content-center my-auto">
                                            {" "}
                                            {item.paymentType ===
                                                "Money Added" ||
                                            item.paymentType === "Received" ? (
                                                <GoPlus className="icons1" />
                                            ) : (
                                                <FaMinus className="icons1" />
                                            )}
                                            <div>
                                                {item.amount}
                                                <FaRupeeSign className="icons1" />{" "}
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    ""
                )}

                <h1 className="text-info text-center my-3">
                    Purchased Products{" "}
                </h1>
                {orders.length === 0 && (
                    <h3 className="text-center text-monospace ">
                        No Product Purchased
                    </h3>
                )}

                {orders.length > 0 && (
                    <div className="border m-2 px-5 bg-light order">
                        {orders.map((item, index) => {
                            const d = new Date(item.OrderDate);

                            const time = d.toString().split(" ")[4];
                            const date =
                                d.getDate() +
                                "/" +
                                d.getMonth() +
                                "/" +
                                d.getFullYear();

                            return (
                                <div
                                    className="row mx-auto mx-3 p-4"
                                    key={index}
                                >
                                    <div
                                        className="col-8 p-2 text-center "
                                        style={{
                                            borderBottom: "1px solid lightgrey",
                                        }}
                                    >
                                        <h5>{item.ProductName}</h5>

                                        <h5>
                                            Shipping Address :
                                            {item.Shipping_Address}
                                        </h5>
                                        <h5>Delivery In :{item.DeliveredOn}</h5>
                                        {item.size.length > 0 && (
                                            <h5>Size : {item.size}</h5>
                                        )}
                                        <h6 className="text-muted">
                                            {time} , Date : {date}
                                        </h6>
                                    </div>
                                    <div
                                        className="col-4"
                                        style={{
                                            borderBottom: "1px solid lightgrey",
                                        }}
                                    >
                                        <h5 className="d-flex justify-content-center my-auto">
                                            {" "}
                                            <FaMinus className="icons1" />
                                            <div>
                                                {item.amount}
                                                <FaRupeeSign className="icons1" />{" "}
                                            </div>
                                        </h5>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

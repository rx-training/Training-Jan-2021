import React, { useState, useEffect } from "react";
import PaytmServices from "../../Services/paytmServices";
import { useParams } from "react-router-dom";
import { getToken, removeUserSession } from "../../Utils/Common";

import { GiReceiveMoney } from "react-icons/gi";
import { FaMinus } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import Pagination from "../../components/Pagination/Pagination";

import { GoPlus } from "react-icons/go";
import Backbutton from "../../components/Backbutton";

export default function Transactions() {
    const { id } = useParams();
    const [wallet, setWallet] = useState("");
    const [username, setUsername] = useState("");
    const [transactions, setTransactions] = useState([]);
    const [orders, setOrders] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(5);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const [currentPage1, setCurrentPage1] = useState(1);
    const [itemPerPage1] = useState(5);
    const [currentItems1, setCurrentItems1] = useState([]);
    const [pageNumberLimit1] = useState(5);
    const [maxPageNumberLimit1, setmaxPageNumberLimit1] = useState(5);
    const [minPageNumberLimit1, setminPageNumberLimit1] = useState(0);
    useEffect(() => {
        PaytmServices.getTransactionDetailsOFUser(id, getToken())
            .then((res) => {
                //console.log(res.data);

                setWallet(res.data.balance);
                setUsername(res.data.name);
                const array = res.data.transactions;
                setTransactions(array.reverse());
                const array1 = res.data.orders;
                setOrders(array1.reverse());
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
            <Backbutton />
            <h3 className="text-center textUnderline">
                {" "}
                Account Holder Name : {username}
            </h3>
            <h3
                className=" text-right  my-3 mr-3"
                style={{ fontFamily: "initial" }}
            >
                {" "}
                Paytm Balance :
                <span className="textUnderline">
                    {wallet}
                    <FaRupeeSign className="mainRupee" />{" "}
                </span>
            </h3>
            <h3 className="text-info text-center mt-2">Transaction Details </h3>
            {transactions.length === 0 ? (
                <h4 className="text-center mt-4 text-monospace">
                    No Transaction Yet
                </h4>
            ) : (
                <div className="container border ">
                    <table
                        className="p-4 my-3 text-center table table-hover"
                        style={{ fontFamily: "initial" }}
                    >
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>#</th>
                                <th>Transactions</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => {
                                const d = new Date(item.transactionDate);

                                const time = d.toString().split(" ")[4];
                                const date =
                                    d.getDate() +
                                    "/" +
                                    d.getMonth() +
                                    "/" +
                                    d.getFullYear();
                                return (
                                    <tr key={index}>
                                        <td>
                                            {(currentPage - 1) * itemPerPage +
                                                index +
                                                1}
                                        </td>
                                        <td>
                                            {item.paymentType ===
                                            "Money Added" ? (
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
                                                        {" " +
                                                            item.senderMobileNo}
                                                    </h6>
                                                </>
                                            )}
                                        </td>
                                        <td>
                                            <h5 className="d-flex justify-content-center my-auto">
                                                {" "}
                                                {item.paymentType ===
                                                    "Money Added" ||
                                                item.paymentType ===
                                                    "Received" ? (
                                                    <GoPlus className="icons1" />
                                                ) : (
                                                    <FaMinus className="icons1" />
                                                )}
                                                <div>
                                                    {item.amount}
                                                    <FaRupeeSign className="icons1" />{" "}
                                                </div>
                                            </h5>
                                            <div className="text-muted d-flex mt-2 justify-content-center">
                                                <small>
                                                    Date : {date} , Time :{" "}
                                                    {time}
                                                </small>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        itemPerPage={itemPerPage}
                        pageNumberLimit={pageNumberLimit}
                        maxPageNumberLimit={maxPageNumberLimit}
                        setmaxPageNumberLimit={setmaxPageNumberLimit}
                        minPageNumberLimit={minPageNumberLimit}
                        setminPageNumberLimit={setminPageNumberLimit}
                        data={transactions}
                        currentItems={currentItems}
                        setCurrentItems={setCurrentItems}
                    />
                </div>
            )}
            <h3 className="text-info text-center mt-3">Purchased Products</h3>
            {orders.length === 0 ? (
                <h4 className="text-center mt-4 text-monospace ">
                    You haven't purchased a product yet
                </h4>
            ) : (
                <div className="container">
                    <table
                        className="p-4 my-3 text-center table table-hover "
                        style={{ fontFamily: "initial" }}
                    >
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>No</th>
                                <th>Product Details</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems1.map((item, index) => {
                                const d = new Date(item.OrderDate);

                                const time = d.toString().split(" ")[4];
                                const date =
                                    d.getDate() +
                                    "/" +
                                    d.getMonth() +
                                    "/" +
                                    d.getFullYear();
                                return (
                                    <tr key={index}>
                                        <td>
                                            {(currentPage1 - 1) * itemPerPage1 +
                                                index +
                                                1}
                                        </td>
                                        <td>
                                            <h5>{item.ProductName}</h5>

                                            <h5>
                                                Shipping Address :
                                                {item.Shipping_Address}
                                            </h5>
                                            <h5>
                                                Delivery In :{item.DeliveredOn}
                                            </h5>
                                            {item.size.length > 0 && (
                                                <h5>Size : {item.size}</h5>
                                            )}
                                        </td>
                                        <td>
                                            <h5 className="d-flex justify-content-center my-auto">
                                                {" "}
                                                {item.paymentType ===
                                                    "Money Added" ||
                                                item.paymentType ===
                                                    "Received" ? (
                                                    <GoPlus className="icons1" />
                                                ) : (
                                                    <FaMinus className="icons1" />
                                                )}
                                                <div>
                                                    {item.amount}
                                                    <FaRupeeSign className="icons1" />{" "}
                                                </div>
                                            </h5>
                                            <div className="text-muted d-flex mt-2 justify-content-center">
                                                <small>
                                                    Date : {date} , Time :{" "}
                                                    {time}
                                                </small>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <Pagination
                        currentPage={currentPage1}
                        setCurrentPage={setCurrentPage1}
                        itemPerPage={itemPerPage1}
                        pageNumberLimit={pageNumberLimit1}
                        maxPageNumberLimit={maxPageNumberLimit1}
                        setmaxPageNumberLimit={setmaxPageNumberLimit1}
                        minPageNumberLimit={minPageNumberLimit1}
                        setminPageNumberLimit={setminPageNumberLimit1}
                        data={orders}
                        currentItems={currentItems1}
                        setCurrentItems={setCurrentItems1}
                    />
                </div>
            )}
        </div>
    );
}

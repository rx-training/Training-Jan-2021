import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import PaytmServices from "../Services/paytmServices";
import { hostServer } from "../Services/paytmServices";
import { getUserId, getToken, removeUserSession } from "../Utils/Common";

export default function Payment(props) {
    const { id } = useParams();

    const [size, setSize] = useState("");

    const [address, setAddress] = useState("");

    const [mess, setMess] = useState("");
    const [message, setMessage] = useState("");
    const [product, setProduct] = useState({
        Spec: [],
    });

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

        PaytmServices.getProductDetailsFromId(id)
            .then((res) => {
                let data = res.data;

                setProduct({ ...data, Spec: data.Spec.split(",") });
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    setMessage("Product Not Found !!");
                }
            });
    }, []);

    const handleChange = (e) => {
        setMess("");
        const name = e.target.name;
        const value = e.target.value;
        console.log(e);
        if (name === "address") {
            setAddress(value);
        } else if (name === "size") {
            setSize(value);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            userId: getUserId(),
            Product: _id,
            ProductName: ProductName,
            amount: ProductPrice,
            Shipping_Address: address,
            size: size,
        };

        PaytmServices.orderPayment(getUserId(), getToken(), data)
            .then((res) => {
                //window.location.href = "/passbook";
                props.history.push("/passbook");
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    removeUserSession();
                    window.location.href = "/login";
                } else if (error.response.status === 403) {
                    setMess("Insufficient Balance");
                } else if (error.response.status === 404) {
                    setMess("Something Went Wrong Try again later");
                }
            });
    };

    const { ProductName, ProductPrice, Rating, image, ProductType, Spec, _id } =
        product;
    return (
        <div className="main-container">
            <div
                className="container-fluid p-3"
                style={{ fontFamily: "initial" }}
            >
                {mess.length > 0 && (
                    <h3 className="text-center text-capitalize my-3 text-monospace text-danger">
                        {mess}
                    </h3>
                )}
                {message.length > 0 ? (
                    <h3 className="text-center text-capitalize my-3 text-monospace">
                        {message}
                    </h3>
                ) : (
                    <>
                        <div className="bg-light border border-info">
                            <div className="text-center bg-info text-white mb-3 py-2">
                                <h1>Payment</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <div className=" text-center m-3 p-2">
                                        <img
                                            src={`${hostServer}/${image}`}
                                            alt={image}
                                            style={{
                                                maxHeight: "300px",
                                            }}
                                            className=""
                                        />
                                    </div>

                                    <h3>{ProductName}</h3>

                                    <h4 className="mt-2">
                                        <FaRupeeSign /> {ProductPrice}{" "}
                                    </h4>

                                    <div className="ratingbtn">
                                        {Rating}/5{" "}
                                        <AiFillStar
                                            style={{
                                                fontSize: "1.5rem",
                                                color: "yellow",
                                            }}
                                        />
                                    </div>
                                    <div className="my-3">
                                        {ProductType === "mobiles" ||
                                        ProductType === "electronics" ? (
                                            <h5 className="text-lead">
                                                Product HightLights
                                            </h5>
                                        ) : (
                                            <h5>Available Size</h5>
                                        )}

                                        {Spec.map((item, index) => {
                                            return (
                                                <li key={index} className="btn">
                                                    {item}
                                                </li>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="col-md-6 p-5">
                                    <form
                                        className="pr-5"
                                        onSubmit={handleSubmit}
                                    >
                                        <h3>Amount : {ProductPrice} </h3>

                                        {ProductType === "fashion" && (
                                            <>
                                                {" "}
                                                <h3>Select Size</h3>
                                                {Spec.map((item, index) => {
                                                    return (
                                                        <span
                                                            className="mr-3 p-2"
                                                            key={index}
                                                        >
                                                            <input
                                                                type="radio"
                                                                name="size"
                                                                style={{
                                                                    width: "22px",
                                                                    height: "22px",
                                                                    color: "red",
                                                                }}
                                                                required
                                                                value={item}
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                            <label className="h2 m-2">
                                                                {item}
                                                            </label>
                                                        </span>
                                                    );
                                                })}
                                            </>
                                        )}

                                        <h3 className="my-3">
                                            Shipping Address
                                        </h3>
                                        <div className="form-group">
                                            <textarea
                                                name="address"
                                                className="form-control"
                                                placeholder="Address"
                                                required
                                                value={address}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>

                                        <button className="btn  btn-info btn-block h3 text-center">
                                            Pay
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import PaytmServices from "../Services/paytmServices";
import { hostServer } from "../Services/paytmServices";
import { getUserId, getToken, removeUserSession } from "../Utils/Common";
import { NotificationManager } from "react-notifications";
import Backbutton from "../components/Backbutton";

const array = [
    {
        name: "Gujarat",
        city: [
            {
                name: "Ahmedabd",
                pincode: ["380001", "380002", "380003", "382210", "380014"],
            },
            {
                name: "Rajkot",
                pincode: ["360001", "360002", "360003", "360004", "360005"],
            },
            {
                name: "Surat",
                pincode: ["394101", "394104", "394105", "394107"],
            },
        ],
    },
    {
        name: "Delhi",
        city: [
            {
                name: "New Delhi",
                pincode: ["110001", "110002", "110003", "110004"],
            },
            {
                name: "Firozabad",
                pincode: [" 283203", "283205"],
            },
        ],
    },
    {
        name: "Maharashtra",
        city: [
            {
                name: "Mumbai",
                pincode: ["400001", "400002", "400003", "400004", "400005"],
            },
            {
                name: "Pune",
                pincode: ["411000", "411001", "411002", "411003", "411004"],
            },
            {
                name: "Nagpur",
                pincode: ["440001", "440002", "440003", "440004", "440005"],
            },
        ],
    },
];

export default function Payment(props) {
    const { id } = useParams();

    const [mess, setMess] = useState("");
    const [houseError, setHouseError] = useState("");
    const [streetError, setStreetError] = useState("");

    const [message, setMessage] = useState("");
    const [values, setValues] = useState({
        city: "",
        state: "",
        pincode: "",
        houseno: "",
        street: "",
        size: "",
    });
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

                setProduct({
                    ...data,
                    ProductCategory: data.ProductCategory.CategoryName,
                    Spec: data.Spec.split(","),
                });
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
        if (name === "houseno") {
            if (value.length < 1) {
                setHouseError("Enter house no or name");
            } else {
                setHouseError("");
            }
        }
        if (name === "street") {
            if (value.length < 1) {
                setStreetError("Enter Street name");
            } else {
                setStreetError("");
            }
        }

        // console.log(e);
        setValues({ ...values, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (houseError.length === 0 && streetError.length === 0) {
            const data = {
                userId: getUserId(),
                Product: _id,
                ProductName: ProductName,
                amount: ProductPrice,
                Shipping_Address:
                    values.houseno +
                    "," +
                    values.street +
                    "," +
                    values.city +
                    "," +
                    values.state +
                    "," +
                    values.pincode,
                size: values.size,
            };

            PaytmServices.orderPayment(getUserId(), getToken(), data)
                .then((res) => {
                    //window.location.href = "/passbook";
                    NotificationManager.success("Product Purchased");
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
        }
    };

    const {
        ProductName,
        ProductPrice,
        Rating,
        image,
        Spec,
        _id,
        ProductCategory,
    } = product;
    return (
        <div className="main-container">
            <div
                className="container-fluid px-3 pt-2"
                style={{ fontFamily: "initial" }}
            >
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
                            <Backbutton />
                            {mess.length > 0 && (
                                <h3 className="text-center text-capitalize my-3 text-monospace text-danger">
                                    {mess}
                                </h3>
                            )}
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
                                        {ProductCategory === "mobiles" ||
                                        ProductCategory === "electronics" ? (
                                            <h5 className="text-lead">
                                                Product HightLights
                                            </h5>
                                        ) : ProductCategory === "fashion" ? (
                                            <h5>Available Size</h5>
                                        ) : (
                                            ""
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
                                        <h3>
                                            Amount : {ProductPrice}
                                            <FaRupeeSign />{" "}
                                        </h3>

                                        {ProductCategory === "fashion" && (
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

                                        <h5 className="my-3">House no :</h5>
                                        {houseError.length > 1 && (
                                            <small className="text-danger">
                                                {houseError}
                                            </small>
                                        )}
                                        <div className="form-group">
                                            <input
                                                name="houseno"
                                                className="form-control"
                                                placeholder=""
                                                required
                                                value={values.houseno}
                                                onBlur={handleChange}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <h5 className="my-3">Street name :</h5>
                                        {streetError.length > 1 && (
                                            <small className="text-danger">
                                                {streetError}
                                            </small>
                                        )}
                                        <div className="form-group">
                                            <input
                                                name="street"
                                                className="form-control"
                                                placeholder=""
                                                required
                                                value={values.street}
                                                onBlur={handleChange}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="row mt-2 p-2">
                                            <div className="col-md-4 col-10">
                                                <h5>State</h5>
                                                <select
                                                    name="state"
                                                    className="custom-select "
                                                    required
                                                    value={values.state}
                                                    onChange={handleChange}
                                                >
                                                    <option
                                                        defaultValue
                                                        value=""
                                                    >
                                                        Select State
                                                    </option>

                                                    {array.map((item) => (
                                                        <option
                                                            value={item.name}
                                                            key={item.name}
                                                        >
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-md-4 col-10">
                                                <h5>City</h5>
                                                <select
                                                    name="city"
                                                    className="custom-select"
                                                    onChange={handleChange}
                                                    value={values.city}
                                                    required
                                                >
                                                    <option
                                                        defaultValue
                                                        value=""
                                                    >
                                                        Select City
                                                    </option>
                                                    {array.map((item) => {
                                                        if (
                                                            item.name ===
                                                            values.state
                                                        ) {
                                                            return item.city.map(
                                                                (i) => (
                                                                    <option
                                                                        value={
                                                                            i.name
                                                                        }
                                                                        key={
                                                                            i.name
                                                                        }
                                                                    >
                                                                        {i.name}
                                                                    </option>
                                                                )
                                                            );
                                                        }
                                                    })}
                                                </select>
                                            </div>

                                            <div className="col-md-4 col-10">
                                                <h5>Pin code</h5>
                                                <select
                                                    name="pincode"
                                                    className="custom-select "
                                                    onChange={handleChange}
                                                    value={values.pincode}
                                                    required
                                                >
                                                    <option
                                                        defaultValue
                                                        value=""
                                                    >
                                                        Select Pincode
                                                    </option>
                                                    {array.map((item) => {
                                                        if (
                                                            item.name ===
                                                            values.state
                                                        ) {
                                                            return item.city.map(
                                                                (i) => {
                                                                    if (
                                                                        i.name ===
                                                                        values.city
                                                                    ) {
                                                                        return i.pincode.map(
                                                                            (
                                                                                v
                                                                            ) => (
                                                                                <option
                                                                                    key={
                                                                                        v
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        v
                                                                                    }
                                                                                </option>
                                                                            )
                                                                        );
                                                                    }
                                                                }
                                                            );
                                                        }
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <button className="btn  btn-info btn-lg w-25 my-3 h3 text-center">
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

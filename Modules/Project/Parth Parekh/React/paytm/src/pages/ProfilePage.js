import React, { useEffect, useState } from "react";
import { getUserId, getToken, removeUserSession } from "../Utils/Common";
import PaytmServices from "../Services/paytmServices";
import { FaRupeeSign } from "react-icons/fa";
import Backbutton from "../components/Backbutton";

export default function ProfilePage(props) {
    useEffect(() => {
        PaytmServices.getUserDetailsFromId(getUserId(), getToken())
            .then((res) => {
                //console.log(res.data);
                setUserData(res.data);
                setValues({
                    username: res.data.name,
                    mobileno: res.data.mobileno,
                    email: res.data.email,
                    password: res.data.password,
                });
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    removeUserSession();
                    window.location.href = "/login";
                }
            });
    }, []);

    const [userData, setUserData] = useState({});
    const [message, setMessage] = useState("");
    const [errors, SetErrors] = useState({
        username: "",
        mobileno: "",
        password: "",
        email: "",
        message: "",
    });
    const [values, setValues] = useState({
        username: "",
        mobileno: "",
        email: "",
        password: "",
    });

    const validEmailRegex = RegExp(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i
    );

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        let error = errors;

        setMessage("");

        if (name === "email") {
            error[name] = validEmailRegex.test(value)
                ? ""
                : "Email is not valid!";
        } else if (name === "password") {
            if (value.length < 6) {
                error[name] = "password required six characters";
            } else {
                error[name] = "";
            }
        } else if (name === "username") {
            if (value.trim().length < 3) {
                //console.log(errors[name]);
                error[name] = " must be at least three characters long!";
            } else {
                error[name] = "";
            }
            if (/[^a-zA-Z -]/.test(value)) {
                error[name] = "Invalid characters";
            }
        } else if (name === "mobileno") {
            if (/^[0-9]{10}$/.test(value)) {
                error[name] = "";
            } else {
                error[name] = "Phone Number Required Only 10 Digit ";
            }
        }

        setValues({ ...values, [name]: value });
        SetErrors({ ...errors, error });
    };

    const validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm(errors)) {
            if (values.password === userData.password) {
                let data = {
                    name: values.username,
                    email: values.email,
                    mobileno: values.mobileno,
                    password: userData.password,
                };
                PaytmServices.updateUser(getUserId(), getToken(), 1, data)
                    .then((res) => {
                        console.log(res.data);
                        setMessage("Profile Updated Successfully !!");
                    })
                    .catch((error) => {
                        if (error.response.status === 400) {
                            setMessage("Try Again Later !!!");
                        } else if (error.response.status === 401) {
                            removeUserSession();
                            props.history.push("/");
                            window.location.reload();
                        }
                    });
            } else {
                let data = {
                    name: values.username,
                    email: values.email,
                    mobileno: values.mobileno,
                    password: values.password,
                };
                PaytmServices.updateUser(getUserId(), getToken(), 2, data)
                    .then((res) => {
                        console.log(res.data);
                        setMessage("Profile Updated Successfully !!");
                    })
                    .catch((error) => {
                        if (error.response.status === 400) {
                            setMessage("Try Again Later !!!");
                        } else if (error.response.status === 401) {
                            removeUserSession();
                            props.history.push("/");
                            window.location.reload();
                        }
                    });
            }
        } else {
            setMessage("Enter Required Details");
        }
    };
    return (
        <div className="main-container">
            <div className="container-fluid">
                <Backbutton />
                <div className="row">
                    <div className=" col-12 col-sm-12 col-md-6  alert mx-auto alert-success  boxeffect">
                        <h1
                            className="text-center h2  my-auto"
                            style={{
                                letterSpacing: "4px",
                                fontFamily: "initial",
                            }}
                        >
                            Account Info
                        </h1>
                        <h4
                            className="text-center my-3"
                            style={{
                                letterSpacing: "4px",
                                fontFamily: "initial",
                            }}
                        >
                            Balance : {userData.balance}{" "}
                            <FaRupeeSign
                                style={{
                                    fontSize: "2rem",
                                    marginLeft: "5px",
                                }}
                            />
                        </h4>
                        <form onSubmit={handleSubmit}>
                            {errors.message.length > 1 ? (
                                <div className="text-center text-danger ">
                                    <h5>{errors.message}</h5>
                                </div>
                            ) : (
                                ""
                            )}
                            {message.length > 1 ? (
                                <div className="text-center text-danger ">
                                    <h5>{message}</h5>
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="form-group">
                                <label>Name </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                            {errors.username.length > 1 ? (
                                <small className="text-danger text-capitalize">
                                    {errors.username}
                                </small>
                            ) : (
                                ""
                            )}

                            <div className="form-group">
                                <label>Email </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.email.length > 1 ? (
                                <small className="text-danger text-capitalize">
                                    {errors.email}
                                </small>
                            ) : (
                                ""
                            )}
                            <div className="form-group">
                                <label>Mobile no</label>
                                <input
                                    type="number"
                                    name="mobileno"
                                    value={values.mobileno}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                            {errors.mobileno.length > 1 ? (
                                <small className="text-danger text-capitalize">
                                    {errors.mobileno}
                                </small>
                            ) : (
                                ""
                            )}
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="********"
                                    onChange={handleChange}
                                    value={values.password}
                                    className="form-control"
                                />
                            </div>
                            {errors.password.length > 1 ? (
                                <small className="text-danger text-capitalize">
                                    {errors.password}
                                </small>
                            ) : (
                                ""
                            )}

                            <button
                                type="submit"
                                className="btn btn-success  mt-3 mr-3"
                            >
                                Save Info
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary  mt-3 "
                                onClick={() => {
                                    window.location.href = "/";
                                }}
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

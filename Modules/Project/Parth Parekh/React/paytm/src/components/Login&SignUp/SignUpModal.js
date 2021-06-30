import React, { useState } from "react";

import PaytmServices from "../../Services/paytmServices";
import { NotificationManager } from "react-notifications";

export default function SignUpModal(props) {
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const [mainmessage, setMainmessage] = useState("");
    const [otpmess, setOtpmess] = useState("");
    const [errors, SetErrors] = useState({
        username: "",
        mobileno: "",
        password: "",
        email: "",
        message: "",
        otp: "",
        cnfpassword: "",
    });
    const [values, setValues] = useState({
        username: "",
        mobileno: "",
        email: "",
        password: "",
        otp: "",
        cnfpassword: "",
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
                error[name] = "Phone number required only 10 digit ";
            }
        } else if (name === "cnfpassword") {
            if (values.password === value) {
                error[name] = "";
            } else {
                error[name] = "not matched ";
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

    const generateOTP = () => {
        const { email } = values;

        if (email.length === 0) {
            SetErrors({
                ...errors,
                email: "email can not be empty",
            });
        } else {
            try {
                const data = {
                    email: email,
                };
                PaytmServices.otp(data)
                    .then((res) => {
                        // console.log("otp send");
                        setOtp(res.data);
                        setOtpmess(
                            "otp send to your email account verify otp for sign up"
                        );
                    })
                    .catch((error) => {
                        if (error.response.status === 404) {
                            setOtpmess("otp not sending");
                        }
                    });
            } catch (error) {
                console.log(error);
            }
        }
    };

    const verifyOTP = (event) => {
        event.preventDefault();

        if (validateForm(errors)) {
            setMainmessage("");
            if (otp === parseInt(values.otp)) {
                const userData = {
                    name: values.username,
                    email: values.email,
                    password: values.password,
                    mobileno: values.mobileno,
                };
                PaytmServices.signup(userData)
                    .then((res) => {
                        // console.log("Data added");
                        NotificationManager.success("Signup Successfully");
                        props.history.push("/login");
                    })
                    .catch((error) => {
                        if (error.response.status === 406) {
                            setMessage("Email already exists !!");
                            setValues({ ...values, otp: "" });
                        }
                    });

                setValues({
                    username: "",
                    mobileno: "",
                    email: "",
                    password: "",
                    cnfpassword: "",
                });
            } else {
                setOtpmess("Not valid");
            }
        } else {
            setMainmessage("Enter required details");
        }
    };

    return (
        <div className="main-container">
            <div className="container-fluid ">
                <div className="row m-5">
                    <div className=" col-12 col-sm-12 col-md-6 m-5 alert mx-auto alert-primary boxeffect">
                        <h1
                            className="text-center h2  my-auto"
                            style={{
                                letterSpacing: "4px",
                                fontFamily: "sans-serif",
                            }}
                        >
                            Signup
                        </h1>
                        {message.length > 0 && (
                            <h5 className="text-center text-danger">
                                {message}
                            </h5>
                        )}

                        <form onSubmit={verifyOTP}>
                            {mainmessage.length > 1 ? (
                                <div className="text-center text-danger ">
                                    <h5>{mainmessage}</h5>
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="form-group">
                                <label className="h5"> Username </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="enter name"
                                    required
                                />
                                {errors.username.length > 1 ? (
                                    <small className="text-danger text-capitalize">
                                        {errors.username}
                                    </small>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="form-group">
                                <label className="h5"> Email </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    id="email"
                                    className="form-control"
                                    placeholder="xyz@gmail.com"
                                    required
                                />
                                {errors.email.length > 1 ? (
                                    <small className="text-danger ">
                                        {errors.email}
                                    </small>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="form-group">
                                <label className="h5"> Mobile no </label>
                                <input
                                    type="number"
                                    name="mobileno"
                                    id="mobileno"
                                    value={values.mobileno}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder=""
                                    required
                                />
                                {errors.mobileno.length > 1 ? (
                                    <small className="text-danger">
                                        {errors.mobileno}
                                    </small>
                                ) : (
                                    ""
                                )}
                            </div>

                            <div className="form-group">
                                <label className="h5"> Password </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="******"
                                    required
                                />
                                {errors.password.length > 1 ? (
                                    <small className="text-danger">
                                        {errors.password}
                                    </small>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="form-group">
                                <label className="h5">Confirm Password </label>
                                <input
                                    type="password"
                                    name="cnfpassword"
                                    value={values.cnfpassword}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="******"
                                    required
                                />
                                {errors.cnfpassword.length > 1 ? (
                                    <small className="text-danger">
                                        {errors.cnfpassword}
                                    </small>
                                ) : (
                                    ""
                                )}
                            </div>
                            {otpmess.length > 1 ? (
                                <div className="row ">
                                    <div className="w-100 text-center text-danger">
                                        <p>{otpmess}</p>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="row">
                                <div className="col-md-4 my-2">
                                    <button
                                        type="button"
                                        className="btn  btn-primary btn-block"
                                        style={{ borderRadius: "22px" }}
                                        onClick={generateOTP}
                                    >
                                        Generate OTP
                                    </button>
                                </div>

                                <div className="col-md-8  form-group">
                                    <input
                                        type="number"
                                        name="otp"
                                        value={values.otp}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="- - - -"
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-around">
                                <div className="col-md-3">
                                    <button
                                        type="submit"
                                        className="btn  btn-primary btn-block"
                                        style={{ borderRadius: "25px" }}
                                    >
                                        Verify Otp
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

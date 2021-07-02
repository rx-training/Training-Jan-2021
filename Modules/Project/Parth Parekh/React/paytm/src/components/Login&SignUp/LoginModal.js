import React, { useState } from "react";
import PaytmServices from "../../Services/paytmServices";
import { setUserSession } from "../../Utils/Common";
import Spinners from "../dummyPage/Spinners";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";

export default function LoginModal() {
    const [errors, SetErrors] = useState({
        email: "",
        password: "",
        message: "",
    });
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [loginErorr, setLoginError] = useState("");
    const [loading, setLoading] = useState(false);

    const validEmailRegex = RegExp(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i
    );

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        let error = errors;
        setLoginError("");
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
        setLoading(true);
        const { email, password } = values;
        if (validateForm(errors)) {
            setValues({
                email: "",
                password: "",
            });
            const data = {
                email: email,
                password: password,
            };
            PaytmServices.login(data)
                .then((res) => {
                    console.log(res);
                    setLoading(false);
                    setUserSession(res.data.jwttoken, res.data.userId);
                    NotificationManager.success("Login Successfully");
                    window.location.href = "/";
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        setLoading(false);
                        setLoginError("Email and Password not matched !!!");
                    } else if (error.response.status === 404) {
                        setLoading(false);
                        setLoginError("Email and Password not matched !!!");
                    } else {
                        setLoading(false);
                        setLoginError(
                            "Something went Wrong . Please Try Again later"
                        );
                    }
                });
        } else {
            SetErrors({
                ...errors,
                message: "Enter Required Details",
            });
        }
    };

    return (
        <div className="main-container">
            <div className="container-fluid">
                <div className="row p-3">
                    <div className="col-md-5 mx-auto mt-5 alert alert-primary boxeffect">
                        {loading === true ? (
                            <Spinners />
                        ) : (
                            <>
                                <h1
                                    className="text-center h2  my-auto "
                                    style={{
                                        letterSpacing: "4px",
                                        fontFamily: "sans-serif",
                                    }}
                                >
                                    Login
                                </h1>

                                <form onSubmit={handleSubmit}>
                                    {errors.message.length > 1 ? (
                                        <div className="text-center text-danger ">
                                            <h5>{errors.message}</h5>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    {loginErorr.length > 1 ? (
                                        <div className="text-center text-danger ">
                                            <h5>{loginErorr}</h5>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <div className="form-group">
                                        <label className="h5"> Email </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="form-control"
                                            value={values.email}
                                            onChange={handleChange}
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
                                        <label className="h5"> Password </label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            id="password"
                                            className="form-control"
                                            placeholder="******"
                                            required
                                        />
                                        {errors.password.length > 1 ? (
                                            <small className="text-danger ">
                                                {errors.password}
                                            </small>
                                        ) : (
                                            ""
                                        )}
                                    </div>

                                    <div className="row">
                                        <div className="col-md-5">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block"
                                                style={{ borderRadius: "25px" }}
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <small>
                                                don't have account ?{" "}
                                                <Link to="/signup">
                                                    Sign up{" "}
                                                </Link>
                                            </small>
                                        </div>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

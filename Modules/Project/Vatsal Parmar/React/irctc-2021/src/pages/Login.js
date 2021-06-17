import React, { useState } from "react";
import TrainServices from "../Services/TrainServices";
import { setUserSession } from "../Utils/Common";
import loadingImg from "../images/loading.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginErr, setLoginErr] = useState("");
  const [seePass, setSeePass] = useState(false);

  //functionality
  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let error = errors;
    if (name === "email") {
      const validEmailRegex = RegExp(
        /[a-z0-9!#$%&'*+/=?^_`{​​​​​​​​|}​​​​​​​​~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{​​​​​​​​|}​​​​​​​​~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i
      );
      error[name] = validEmailRegex.test(value) ? "" : "Email is not valid!";
    } else if (name === "password") {
      if (value.trim().length < 4) {
        error[name] = "must be at least 4 characters long!";
      } else {
        error[name] = "";
      }
    }
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, error });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm(errors)) {
      setLoading(true);
      setFormError("");
      TrainServices.login(user)
        .then((res) => {
          setLoading(false);
          setUserSession(res.data.jwtoken, res.data.user);
          window.location.href = "/";
        })
        .catch((error) => {
          setLoading(false);
          if (error.response.status === 401)
            setLoginErr("Wrong Email Id or Password");
          else setLoginErr("Something went wrong. Please try again later.");
        });
    } else {
      let error = "Enter Valid Details";
      setFormError(error);
    }
  };
  return (
    <div className="p-5 login-container">
      <div>
        <div className="col-md-6 mx-auto heading-container text-center border rounded-top">
          <h2>Login</h2>
        </div>
        <form
          className="col-md-6 mx-auto p-3 bg-white border rounded-bottom"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="email">Email Id</label>
            <input
              type="email"
              className="form-control"
              placeholder="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
            {errors.email.length > 0 && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password" className="d-block">
              Password
            </label>
            <input
              type={seePass ? "text" : "password"}
              className="form-control d-inline"
              name="password"
              placeholder="password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <div
              style={{ cursor: "pointer" }}
              className="d-inline ml-n5"
              onClick={() => setSeePass(!seePass)}
            >
              {seePass ? <FaEye size="25px" /> : <FaEyeSlash size="25px" />}
            </div>
            {errors.password.length > 0 && (
              <small className="d-block text-danger">{errors.password}</small>
            )}
          </div>
          {loading ? (
            <span className="d-flex justify-content-center align-item-center">
              <img src={loadingImg} width="150px" alt="loading" />
            </span>
          ) : (
            ""
          )}
          <button className="login-btn" type="submit">
            Log In
          </button>
          <small className="ml-3">Don't have an account?</small>
          <Link to="/register" className="ml-1">
            Register
          </Link>
          {formError.length > 0 && (
            <div className="my-2">
              <small className="text-danger">{formError}</small>
            </div>
          )}
          {loginErr.length > 0 && (
            <p className="text-danger mt-2">
              <b>{loginErr}</b>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;

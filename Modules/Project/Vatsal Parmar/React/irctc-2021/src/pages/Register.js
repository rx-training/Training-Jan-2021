import React, { useState } from "react";
import TrainServices from "../Services/TrainServices";
import loading from "../images/loading.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = (props) => {
  let uData;
  if (localStorage.getItem("user")) {
    uData = JSON.parse(localStorage.getItem("user"));
  } else {
    uData = {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      password: "",
      confirm_password: "",
    };
  }

  const [user, setUser] = useState(uData);
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
  });
  const [formError, setFormError] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [invalidOtp, setInvalidOtp] = useState(false);
  const [resOtp, setResOtp] = useState("");
  const [seePass, setSeePass] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

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
    if (name === "first_name" || name === "last_name") {
      if (value.trim().length < 3) {
        error[name] = "must be at least 3 characters long!";
      } else {
        error[name] = "";
      }
      if (/[^a-zA-Z -]/.test(value)) {
        error[name] = "Invalid characters";
      }
    } else if (name === "email") {
      const validEmailRegex = RegExp(
        /[a-z0-9!#$%&'*+/=?^_`{​​​​​​​​|}​​​​​​​​~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{​​​​​​​​|}​​​​​​​​~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i
      );
      error[name] = validEmailRegex.test(value) ? "" : "Email is not valid!";
    } else if (name === "mobile") {
      if (/^[0-9]{10}$/.test(value)) {
        error[name] = "";
      } else {
        error[name] = "Should contain only 10 digits";
      }
    } else if (name === "password") {
      if (value.trim().length < 4) {
        error[name] = "must be at least 4 characters long!";
      } else {
        error[name] = "";
      }
    } else if (name === "confirm_password") {
      if (value.trim() !== user.password) {
        error[name] = "must be matched with password!";
      } else {
        error[name] = "";
      }
    }
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, error });
  };
  const handleBlur = () => {
    TrainServices.checkMail(user.email).then((res) => {
      if (res.data === "exists") {
        setAlreadyRegistered(true);
      } else {
        setAlreadyRegistered(false);
      }
    });
  };
  const sendOtp = (email) => {
    TrainServices.sendOtp(email).then((res) => {
      setResOtp(res.data);
      setIsOtpSent(true);
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(errors)) {
      const userData = user;

      setFormError("");
      localStorage.setItem("user", JSON.stringify(userData));
      setIsLoading(true);
      sendOtp(userData.email);
    } else {
      let error = "Enter Valid Details";
      setFormError(error);
    }
  };
  const verifyOtp = () => {
    // TrainServices.verifyOtp(otp).then((res) => {
    //   if (res.data === true) {
    //     const userData = {
    //       first_name: user.first_name,
    //       last_name: user.last_name,
    //       email: user.email,
    //       mobile: user.mobile,
    //       password: user.password,
    //     };

    //     TrainServices.createUser(userData).then((res) => {
    //       if (res.data) {
    //         localStorage.removeItem("user");
    //         props.history.push("/login");
    //       } else {
    //         console.log("oops somthing wrong");
    //       }
    //     });
    //   } else {
    //     setInvalidOtp(true);
    //   }
    // });
    if (parseInt(otp) === resOtp) {
      const userData = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        mobile: user.mobile,
        password: user.password,
      };
      TrainServices.createUser(userData).then((res) => {
        if (res.data) {
          localStorage.removeItem("user");
          props.history.push("/login");
        } else {
          console.log("oops somthing wrong");
        }
      });
    } else {
      setInvalidOtp(true);
    }
  };
  return (
    <div className="register">
      <div className="container py-5">
        <div className="col-md-8 mx-auto">
          <h1>Create Your Account</h1>
          <h3>GARBAGE/JUNK VALUES IN PROFILE MAY LEAD TO DEACTIVATION</h3>
          <h4>
            Please use a valid E-Mail ID and Mobile Number in registration.
          </h4>
          {isOtpSent ? (
            <div className="col-md-6 mx-auto mt-4 bg-light p-4 border rounded">
              <div className="form-group">
                <label htmlFor="fname">
                  <b>Enter Otp</b>
                </label>
                <input
                  type="number"
                  name="otp"
                  className="form-control"
                  placeholder="enter otp"
                  onChange={(event) => setOtp(event.target.value)}
                  value={otp}
                  required
                />
                <small className="text-success">
                  <b>We Have Sent OTP To Your EmailId</b>
                </small>
                {invalidOtp ? (
                  <div>
                    <small className="text-danger">
                      <b>Entered OTP Is Not Correct</b>
                    </small>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <button
                className="btn btn-danger mr-2"
                onClick={() => sendOtp(user.email)}
              >
                Resend Otp
              </button>
              <button
                className="btn btn-success"
                disabled={otp.length === 4 ? false : true}
                onClick={verifyOtp}
              >
                Verify
              </button>
            </div>
          ) : (
            <div className="mt-5">
              {isLoading ? (
                <div className="d-flex justify-content-center align-item-center">
                  <img src={loading} width="80%" alt="loading" />
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-light p-5 border rounded"
                >
                  <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      className="form-control"
                      placeholder="first name"
                      onChange={handleChange}
                      value={user.first_name}
                      required
                    />
                    {errors.first_name.length > 0 && (
                      <small className="text-danger">{errors.first_name}</small>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      onChange={handleChange}
                      value={user.last_name}
                      className="form-control"
                      placeholder="last name"
                      required
                    />
                    {errors.last_name.length > 0 && (
                      <small className="text-danger">{errors.last_name}</small>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={user.email}
                      className="form-control"
                      placeholder="email"
                      required
                    />
                    {errors.email.length > 0 && (
                      <small className="text-danger">{errors.email}</small>
                    )}
                    {alreadyRegistered && (
                      <p className="text-danger">Email Is Already Registered</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                      type="text"
                      name="mobile"
                      onChange={handleChange}
                      value={user.mobile}
                      className="form-control"
                      placeholder="mobile number"
                      required
                    />
                    {errors.mobile.length > 0 && (
                      <small className="text-danger">{errors.mobile}</small>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input
                      type={seePass ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      value={user.password}
                      className="form-control d-inline"
                      placeholder="password"
                      required
                    />
                    <div
                      style={{ cursor: "pointer" }}
                      className="d-inline ml-n5"
                      onClick={() => setSeePass(!seePass)}
                    >
                      {seePass ? (
                        <FaEye size="25px" />
                      ) : (
                        <FaEyeSlash size="25px" />
                      )}
                    </div>
                    {errors.password.length > 0 && (
                      <small className="text-danger d-block">
                        {errors.password}
                      </small>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Confirm Password</label>
                    <input
                      type="password"
                      name="confirm_password"
                      onChange={handleChange}
                      value={user.confirm_password}
                      className="form-control"
                      placeholder="confirm password"
                      required
                    />
                    {errors.confirm_password.length > 0 && (
                      <small className="text-danger">
                        {errors.confirm_password}
                      </small>
                    )}
                  </div>
                  <button
                    className="btn btn-primary btn-lg"
                    type="submit"
                    disabled={alreadyRegistered}
                  >
                    Submit
                  </button>

                  {formError.length > 0 && (
                    <div className="my-2">
                      <small className="text-danger">{formError}</small>
                    </div>
                  )}
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;

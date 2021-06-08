import React, { useState, useEffect } from "react";
import TrainServices from "../Services/TrainServices";
import loadingImg from "../images/loading.gif";
import { removeUserSession } from "../Utils/Common";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const EditProfile = (props) => {
  const id = props.match.params.id;
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [seePass, setSeePass] = useState(false);
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [formError, setFormError] = useState("");
  useEffect(() => {
    setLoading(true);
    TrainServices.getUserById(id)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((error) => {
        //setLoading(false);
        if (error.response.status === 401) {
          removeUserSession();
          window.location.href = "/login";
        }
        if (error.response.status === 404) {
          setUser({});
          setLoading(false);
        }
      });
  }, []);
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
      if (value.trim().length < 6) {
        error[name] = "must be at least 6 characters long!";
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
      //console.log(user);
      setLoading2(true);
      const data = {
        email: user.email,
        first_name: user.first_name,
        password: user.password,
        last_name: user.last_name,
        mobile: user.mobile,
      };
      TrainServices.updateUser(id, data)
        .then((res) => {
          if (res.data === true) {
            const userData = {
              email: user.email,
              first_name: user.first_name,
              id: id,
              last_name: user.last_name,
              mobile: user.mobile,
            };
            sessionStorage.setItem("logged-user", JSON.stringify(userData));
            setLoading2(false);
            props.history.push("/user");
          }
        })
        .catch((error) => {
          //setLoading(false);
          if (error.response.status === 401) {
            removeUserSession();
            props.history.push("/login");
          }
          if (error.response.status === 400) {
            console.log(error.response);
          }
        });
    } else {
      let error = "Enter Valid Details";
      setFormError(error);
    }
  };
  return (
    <div className="container">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <img src={loadingImg} width="50%" alt="loading..." />
        </div>
      ) : (
        <div className="my-3 col-md-8 mx-auto">
          <h2 className="text-center p-3 bg-primary rounded-top mb-0">
            Edit Profile
          </h2>
          <form
            onSubmit={handleSubmit}
            className="p-4 px-5 border rounded-bottom"
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
                value={user.email}
                className="form-control"
                placeholder="email"
                required
              />
              {errors.email.length > 0 && (
                <small className="text-danger">{errors.email}</small>
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
              <label htmlFor="name">Password : &nbsp;</label>
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
                {seePass ? <FaEye size="25px" /> : <FaEyeSlash size="25px" />}
              </div>
              {errors.password.length > 0 && (
                <small className="text-danger d-block">{errors.password}</small>
              )}
            </div>
            <button className="btn btn-primary btn-lg" type="submit">
              Submit
            </button>
            {loading2 ? (
              <img src={loadingImg} alt="loading..." width="150px" />
            ) : (
              ""
            )}
            {formError.length > 0 && (
              <div className="my-2">
                <small className="text-danger">{formError}</small>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default EditProfile;

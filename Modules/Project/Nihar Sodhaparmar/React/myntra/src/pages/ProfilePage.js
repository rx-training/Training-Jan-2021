import React, { useEffect, useState } from "react";
import { getUserId, removeUserSession, getToken } from "../Utils/Storage";
import CustomerService from "../services/CustomerService";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { Modal } from "react-bootstrap";

export default function ProfilePage(props) {
  const [user, setUser] = useState({
    customerName: "",
    email: "",
    contactNumber: "",
    gender: "",
    address: { addressLine1: "", addressLine2: "", pincode: "" },
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [errors, setErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const id = getUserId();

  useEffect(() => {
    // console.log("in useeffect");
    async function getData() {
      try {
        setLoading(true);
        let token = getToken();
        let res = await CustomerService.getCustomerById(id, token);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        if (error.response.status === 401) {
          props.history.push("/login");
          removeUserSession();
        }
        console.error(error);
        setLoading(false);
      }
    }

    getData();
  }, [id]);

  // ********** VALIDATE OBJECT **********
  const validate = {
    oldPassword: (password) => passwordValidation("Old Password", password),
    newPassword: (password) => passwordValidation("New Password", password),
    confirmNewPassword: (password) =>
      confirmPasswordValidation(newPassword, password),
  };

  const passwordValidation = (fieldName, password) => {
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/.test(
        password
      )
    ) {
      return null;
    }

    if (password.trim() === "") {
      return `${fieldName} is required`;
    }
    return `${fieldName} must contains minimum 6 characters, at least one letter, one number and one special character`;
  };

  const confirmPasswordValidation = (password, confirmPassword) => {
    if (confirmPassword.trim() === "") {
      return "Confirm Password is required";
    }

    if (password !== confirmPassword) {
      return "New Password and Confirm new password are not same";
    }
  };

  // ********** HANDLE CHANGE FUNCTION **********
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPasswords({ ...passwords, [name]: value });
  };

  // ********** HANDLE BLUR FUNCTION **********
  const handleBlur = (event) => {
    const { name, value } = event.target;
    let error = validate[name](value);
    setErrors({ ...errors, [name]: error });
  };

  // ********** FORM VALIDATION FUNCTION **********
  const validateForm = () => {
    let valid = true;
    let error = null;
    let tempErrors = errors;

    for (const item in passwords) {
      error = validate[item](passwords[item]);

      if (error) {
        valid = false;
      }

      tempErrors = { ...tempErrors, [item]: error };
    }

    setErrors({ ...tempErrors });

    return valid;
  };

  const changePassword = async () => {
    let isValidForm = validateForm();

    if (isValidForm) {
      try {
        setLoading(true);
        let data = {
          oldPassword,
          newPassword,
        };
        await CustomerService.updatePassword(getUserId(), data, getToken());
        setLoading(false);
        closeModel();
        props.history.push("/profile");
      } catch (error) {
        setLoading(false);
        if (error.response.status === 401) {
          props.history.push("/login");
          removeUserSession();
        } else if (error.response.status === 400) {
          setErrors({ ...errors, confirmNewPassword: error.response.data });
        }
      }
    }
  };

  const handleEdit = () => {
    props.history.push("/edit");
  };

  const closeModel = () => {
    setShowModal(false);
    setPasswords({
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
    setErrors({
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  const { newPassword, confirmNewPassword, oldPassword } = passwords;

  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  }

  const { customerName, email, contactNumber, gender, address } = user;
  const { addressLine1, addressLine2, pincode, city, state, country } = address;

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text-center pt-4 category-header text-capitalize">
          profile details
        </div>

        <table id="profileDataTable" className="table mx-auto mt-5 w-50">
          <tbody>
            <tr>
              <td className="text-uppercase">full name</td>
              <td className="text-capitalize">{customerName}</td>
            </tr>
            <tr>
              <td className="text-uppercase">email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td className="text-uppercase">contact number</td>
              <td className="text-capitalize">{contactNumber}</td>
            </tr>
            <tr>
              <td className="text-uppercase">gender</td>
              <td className="text-capitalize">{gender}</td>
            </tr>
            <tr>
              <td className="text-uppercase">address</td>
              <td className="text-capitalize">
                <p>{addressLine1},</p>
                <p>
                  {addressLine2}, {pincode}
                </p>
                <p>
                  {city}, {state}, {country}
                </p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <div className="row">
          <div className="col-10 col-md-4 col-lg-3 my-3 ml-edit">
            <button
              className="btn btn-pink btn-block text-uppercase"
              onClick={() => handleEdit()}
            >
              edit details
            </button>
          </div>
          <div className="col-10 col-md-4 col-lg-3 my-3 mr-edit">
            <button
              className="btn btn-wishlist btn-block bg-white text-uppercase"
              onClick={() => setShowModal(true)}
            >
              change password
            </button>
          </div>
        </div>
        <div className="my-5"></div>
      </div>

      {/* ------------------------------ CHANGE PASSWORD MODAL ------------------------------ */}
      <Modal show={showModal} size="lg" onHide={closeModel}>
        <Modal.Header className="bg-pink text-white border">
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label className="form-control-label" htmlFor="oldPassword">
              Old Password
            </label>
            <input
              type="password"
              className="form-control login-form-control"
              id="oldPassword"
              name="oldPassword"
              value={oldPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="text-danger mb-0 font-weight-bold">
              {errors.oldPassword}
            </p>
          </div>

          <div className="form-group">
            <label className="form-control-label" htmlFor="newPassword">
              New Password
            </label>
            <input
              type="password"
              className="form-control login-form-control"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="text-danger mb-0 font-weight-bold">
              {errors.newPassword}
            </p>
          </div>

          <div className="form-group">
            <label className="form-control-label" htmlFor="confirmNewPassword">
              Confirm New Password
            </label>
            <input
              type="password"
              className="form-control login-form-control"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={confirmNewPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="text-danger mb-0 font-weight-bold">
              {errors.confirmNewPassword}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary btn-radius-0"
            onClick={closeModel}
          >
            Close
          </button>
          <button
            className="btn btn-pink-2 btn-radius-0"
            onClick={changePassword}
          >
            Change Password
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

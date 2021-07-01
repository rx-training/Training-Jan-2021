import React from "react";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import CityService from "../services/CityService";
import CountryService from "../services/CountryService";
import StateService from "../services/StateService";
import CustomerService from "../services/CustomerService";
import { getToken, getUserId, removeUserSession } from "../utils/Storage";
import { NotificationManager } from "react-notifications";

export default function EditProfilePage(props) {
  const id = getUserId();

  // ********** LOADING **********
  const [loading, setLoading] = useState(false);

  // ********** COUNTRIES **********
  const [countries, setCountries] = useState([]);

  // ********** STATES **********
  const [states, setStates] = useState([]);

  // ********** CITIES **********
  const [cities, setCities] = useState([]);

  // ********** CUSTOMER **********
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    contactNumber: "",
    dob: "",
    gender: "male",
    password: "",
    confirmPassword: "",
    addressLine1: "",
    addressLine2: "",
    pincode: "",
    country: "select",
    state: "select",
    city: "select",
  });

  // ********** ERRORS STATE **********
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contactNumber: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
    addressLine1: "",
    addressLine2: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
  });

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);

        let user = await CustomerService.getCustomerById(id, getToken());
        const {
          customerName: name,
          email,
          contactNumber,
          dob,
          gender,
          address,
          password,
        } = user.data;

        let newDob = convertDate(dob);

        setCustomer({
          name,
          email,
          contactNumber,
          dob: newDob,
          gender,
          password,
          ...address,
        });

        let countries = await CountryService.getAllCountries();
        setCountries(countries.data);

        let states = await StateService.getAllStates();
        states = states.data.filter(
          (state) =>
            state.country.countryName.toLowerCase() ===
            address.country.toLowerCase()
        );
        setStates(states);

        let cities = await CityService.getAllCities();
        cities = cities.data.filter(
          (city) =>
            city.state.stateName.toLowerCase() === address.state.toLowerCase()
        );
        setCities(cities);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.response.status === 401) {
          props.history.push("/login");
          removeUserSession();
        }
      }
    }

    getData();
  }, [id]);

  // ********** CONVERT DATE **********
  function convertDate(inputFormat) {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join("-");
  }

  // ********** ON COUNTRY CHANGE FUNCTION **********
  const countryChange = async (event) => {
    try {
      let value = event.target.value.toLowerCase();

      if (value !== "select") {
        let states = await StateService.getAllStates();

        states = states.data.filter(
          (state) =>
            state.country.countryName.toLowerCase() === value.toLowerCase()
        );
        setStates(states);
        setCustomer({
          ...customer,
          country: value,
          state: "select",
          city: "select",
        });
      } else {
        setStates([]);
        setCities([]);
        setCustomer({
          ...customer,
          country: "select",
          state: "select",
          city: "select",
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // ********** ON STATE CHANGE FUNCTION **********
  const stateChange = async (event) => {
    try {
      let value = event.target.value.toLowerCase();

      if (value !== "select") {
        let cities = await CityService.getAllCities();

        cities = cities.data.filter(
          (city) => city.state.stateName.toLowerCase() === value.toLowerCase()
        );

        setCities(cities);
        setCustomer({
          ...customer,
          state: value,
          city: "select",
        });
      } else {
        setCities([]);
        setCustomer({
          ...customer,
          state: "select",
          city: "select",
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // ********** VALIDATE OBJECT **********
  const validate = {
    name: (name) => nameValidation("Name", name),
    email: (email) => emailValidation(email),
    contactNumber: (contactNumber) => contactNumberValidation(contactNumber),
    dob: (dob) => dobValidation(dob),
    gender: () => {},
    password: (password) => passwordValidation(password),
    addressLine1: (addressLine1) =>
      addressLineValidation("AddressLine1", addressLine1),
    addressLine2: (addressLine2) =>
      addressLineValidation("AddressLine1", addressLine2),
    pincode: (pincode) => pincodeValidation(pincode),
    country: (country) => selectionValidation("Country", country),
    state: (state) => selectionValidation("State", state),
    city: (city) => selectionValidation("City", city),
    _id: () => {},
  };

  // ********** VALIDATION FUNCTIONS **********
  const nameValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === "") {
      return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return "Invalid characters";
    }
    if (fieldValue.trim().length < 3) {
      return `${fieldName} needs to be at least three characters`;
    }
    return null;
  };

  const emailValidation = (email) => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return null;
    }
    if (email.trim() === "") {
      return "Email is required";
    }
    return "Enter a valid email";
  };

  const contactNumberValidation = (number) => {
    if (number.trim() === "") {
      return "Phone number is required";
    }
    if (/^[0-9]{10}$/.test(number)) {
      return null;
    }

    return "Phone number contains exactly 10 digits";
  };

  const dobValidation = (dob) => {
    if (dob.trim() === "") {
      return "Date is required";
    }

    let age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (age < 5) {
      return "Age should be greater than 5";
    }

    return null;
  };

  const passwordValidation = (password) => {
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/.test(
        password
      )
    ) {
      return null;
    }

    if (password.trim() === "") {
      return "Password is required";
    }
    return "Password must contains minimum 6 characters, at least one letter, one number and one special character";
  };

  const addressLineValidation = (fieldValue, addressLine) => {
    if (addressLine.trim() === "") {
      return `${fieldValue} is required`;
    }
  };

  const pincodeValidation = (pincode) => {
    if (pincode.trim() === "") {
      return `Pincode is required`;
    }

    if (!/\d{6}/.test(pincode.trim())) {
      return "Pincode must be length of 6 digits";
    }
  };

  const selectionValidation = (fieldName, fieldValue) => {
    if (fieldValue === "select") {
      return `${fieldName} is required`;
    }
  };
  // ********** END OF VALIDATION FUNCTIONS **********

  // ********** HANDLE CHANGE FUNCTION **********
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
  };

  // ********** HANDLE BLUR FUNCTION **********
  const handleBlur = async (event) => {
    const { name, value } = event.target;

    let error = validate[name](value);

    setErrors({ ...errors, [name]: error });
  };

  // ********** FORM VALIDATION FUNCTION **********
  const validateForm = () => {
    let valid = true;
    let error = null;
    let tempErrors = errors;

    for (const item in customer) {
      error = validate[item](customer[item]);

      if (error) {
        valid = false;
      }

      tempErrors = { ...tempErrors, [item]: error };
    }

    setErrors({ ...tempErrors });

    return valid;
  };

  // ********** HANDLE BLUR FUNCTION **********
  const edit = async (event) => {
    event.preventDefault();
    let isValidForm = validateForm();

    if (isValidForm) {
      try {
        let data = {
          customerName: name,
          email,
          contactNumber,
          dob,
          gender,
          password,
          address: {
            addressLine1,
            addressLine2,
            pincode,
            city,
            state,
            country,
          },
        };
        await CustomerService.updateCustomer(id, data, getToken());
        setCustomer({
          name: "",
          email: "",
          contactNumber: "",
          dob: "",
          gender: "male",
          password: "",
          confirmPassword: "",
          addressLine1: "",
          addressLine2: "",
          pincode: "",
          city: "",
        });
        props.history.push("/profile");
        NotificationManager.success("Profile updated successfully", "", 2000);
      } catch (error) {
        console.error(error.message);
      }
    } else {
    }
  };

  const cancel = () => {
    props.history.push("/profile");
  };

  // ********** DESTRUCTRING OF CUSTOMER **********
  const {
    name,
    email,
    contactNumber,
    dob,
    gender,
    addressLine1,
    addressLine2,
    pincode,
    country,
    state,
    city,
    password,
  } = customer;

  // ********** RETURN LOADING **********
  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  }

  // ********** RETURN **********
  return (
    <>
      <Navbar />
      <div className="register-gradient-container container-fluid">
        <div className="container py-3 pb-5 register-form-card-container">
          <div className="card register-form-card">
            <div className="card-header register-form-card-header">
              edit details
            </div>
            <div className="card-body p-5 bg-white">
              <form onSubmit={edit}>
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="name"
                    >
                      Name
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="form-control register-form-control"
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.name}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="email"
                    >
                      E-mail
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="form-control register-form-control"
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.email}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="contactNumber"
                    >
                      Number
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="form-control register-form-control"
                      type="text"
                      id="contactNumber"
                      name="contactNumber"
                      value={contactNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.contactNumber}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="dob"
                    >
                      Date of Birth
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="form-control register-form-control"
                      type="date"
                      id="dob"
                      name="dob"
                      value={dob}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.dob}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="gender"
                    >
                      Gender
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <div className="form-check form-check-inline mt-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                        defaultChecked={gender.toLowerCase() === "male"}
                      />
                      <label className="form-check-label" htmlFor="">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                        defaultChecked={gender.toLowerCase() === "female"}
                      />
                      <label className="form-check-label" htmlFor="">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                {/* ********** */}

                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="addressLine1"
                    >
                      AddressLine1
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="form-control register-form-control"
                      type="text"
                      id="addressLine1"
                      name="addressLine1"
                      value={addressLine1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.addressLine1}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="addressLine2"
                    >
                      AddressLine2
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="form-control register-form-control"
                      type="text"
                      id="addressLine2"
                      name="addressLine2"
                      value={addressLine2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.addressLine2}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="pincode"
                    >
                      Pincode
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="form-control register-form-control"
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={pincode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.pincode}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="country"
                    >
                      Country
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <select
                      name="country"
                      id="country"
                      className="form-control register-form-control"
                      value={country}
                      onChange={countryChange}
                      onBlur={handleBlur}
                    >
                      <option value="select">Select</option>
                      {countries.map((country, index) => {
                        return (
                          <option
                            value={country.countryName.toLowerCase()}
                            key={index}
                            className="text-capitalize"
                          >
                            {country.countryName}
                          </option>
                        );
                      })}
                    </select>
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.country}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="state"
                    >
                      State
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <select
                      name="state"
                      id="state"
                      className="form-control register-form-control"
                      value={state}
                      onChange={stateChange}
                      onBlur={handleBlur}
                    >
                      <option value="select">Select</option>
                      {states.map((state, index) => {
                        return (
                          <option
                            value={state.stateName.toLowerCase()}
                            key={index}
                            className="text-capitalize"
                          >
                            {state.stateName}
                          </option>
                        );
                      })}
                    </select>
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.state}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="city"
                    >
                      City
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <select
                      name="city"
                      id="city"
                      className="form-control register-form-control"
                      value={city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="select">Select</option>
                      {cities.map((city, index) => {
                        return (
                          <option
                            value={city.cityName.toLowerCase()}
                            key={index}
                            className="text-capitalize"
                          >
                            {city.cityName}
                          </option>
                        );
                      })}
                    </select>
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.city}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-5">
                  <div className="col-md-3"></div>
                  <div className="col-md-9 register-form-control-container">
                    <div className="row">
                      <div className="col-6">
                        <div
                          className="btn btn-secondary btn-block mx-auto text-uppercase text-btn"
                          style={{ borderRadius: "5px" }}
                          onClick={cancel}
                        >
                          cancel
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          className="btn login-btn btn-block mx-auto text-uppercase"
                          type="submit"
                          value="update"
                          style={{ borderRadius: "5px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* ********** */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

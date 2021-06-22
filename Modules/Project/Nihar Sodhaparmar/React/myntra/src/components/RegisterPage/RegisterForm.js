import React from "react";

export default function RegisterForm({
  customer,
  errors,
  countries,
  states,
  cities,
  handleChange,
  handleBlur,
  register,
  countryChange,
  stateChange,
  isBtnDisable,
}) {
  // ********** DESTRUCTRING OF CUSTOMER **********
  const {
    name,
    email,
    contactNumber,
    dob,
    gender,
    password,
    confirmPassword,
    addressLine1,
    addressLine2,
    pincode,
    country,
    state,
    city,
  } = customer;

  return (
    <>
      <div className="register-gradient-container container-fluid">
        <div className="container py-3 pb-5 register-form-card-container">
          <div className="card register-form-card">
            <div className="card-header register-form-card-header">
              register
            </div>
            <div className="card-body p-5 bg-white">
              <form onSubmit={register}>
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
                        defaultChecked={gender === "male"}
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
                        defaultChecked={gender === "female"}
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
                      htmlFor="password"
                    >
                      Password
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="form-control register-form-control"
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.password}
                    </p>
                  </div>
                </div>
                {/* ********** */}
                {/* ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="register-form-control-label"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="col-md-9 register-form-control-container">
                    <input
                      className="form-control register-form-control"
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.confirmPassword}
                    </p>
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
                    <input
                      className="btn login-btn btn-block w-50 mx-auto text-uppercase"
                      type="submit"
                      value="register"
                      style={{ borderRadius: "5px" }}
                      disabled={isBtnDisable}
                    />
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

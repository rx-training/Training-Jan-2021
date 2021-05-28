import React, { Component } from "react";

export default class Form extends Component {
  render() {
    const {
      handleChange,
      handleSubmit,
      city,
      college,
      firstName,
      lastName,
      handleShow,
      students,
    } = this.props;
    return (
      <div className="col-md-10 mx-auto my-5">
        <div className="p-3 bg-dark text-white text-center rounded-top">
          <h4 className="text-uppercase">Student Registration Form</h4>
        </div>
        <div className="p-5 bg-light rounded-bottom">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label className="form-label col-sm-2">Name</label>
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={firstName}
                  name="firstName"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={lastName}
                  name="lastName"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="form-label col-sm-2">City</label>
              <div className="col-sm-10">
                <select
                  className="form-select"
                  name="city"
                  required
                  onChange={handleChange}
                  value={city}
                >
                  <option defaultValue value="">
                    Select City
                  </option>
                  <option value="ahmedabad">Ahmedabad</option>
                  <option value="vadodara">Vadodara</option>
                  <option value="gandhinagar">Gandhinagar</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="form-label col-sm-2">Gender</label>
              <div className="col-sm-10">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="male"
                    required
                    onChange={handleChange}
                    id="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="female"
                    required
                    onChange={handleChange}
                    id="female"
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="studentImg" className="col-sm-2 form-label">
                Student Image
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  required
                  type="file"
                  id="studentImg"
                  name="studentImg"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="form-label col-sm-2">College</label>
              <div className="col-sm-10">
                {city ? (
                  city === "gandhinagar" ? (
                    <select
                      className="form-select"
                      name="college"
                      required
                      onChange={handleChange}
                    >
                      <option defaultValue value="">
                        Select College
                      </option>
                      <option value="gec">GEC, Gandhinagar</option>
                      <option value="git">GIT, Gandhinagar</option>
                    </select>
                  ) : city === "ahmedabad" ? (
                    <select
                      className="form-select"
                      name="college"
                      required
                      onChange={handleChange}
                    >
                      <option defaultValue value="">
                        Select College
                      </option>
                      <option value="nsit">NSIT, Jetalpur</option>
                      <option value="ljeit">LJEIT, Ahmedabad</option>
                    </select>
                  ) : (
                    <select
                      className="form-select"
                      name="college"
                      required
                      onChange={handleChange}
                    >
                      <option defaultValue value="">
                        Select College
                      </option>
                      <option value="parul uni">Parul Uni, Vadodara</option>
                      <option value="msu">MSU, Vadodara</option>
                    </select>
                  )
                ) : (
                  <select
                    className="form-select"
                    name="college"
                    value={college}
                    required
                    onChange={handleChange}
                  >
                    <option defaultValue value="">
                      Select College
                    </option>
                    <option value="gec">GEC, Gandhinagar</option>
                    <option value="git">GIT, Gandhinagar</option>
                    <option value="nsit">NSIT, Jetalpur</option>
                    <option value="ljeit">LJEIT, Ahmedabad</option>
                    <option value="parul uni">Parul Uni, Vadodara</option>
                    <option value="msu">MSU, Vadodara</option>
                  </select>
                )}
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="logo" className="col-sm-2 form-label">
                College Logo
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="collegeLogo"
                  required
                  type="file"
                  id="logo"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="m-3 btn btn-lg btn-success">
              Register
            </button>
            <button
              type="button"
              className="m-3 btn btn-lg btn-primary"
              disabled={students.length > 0 ? false : true}
              onClick={() => {
                handleShow("students");
              }}
            >
              Students List
            </button>
          </form>
        </div>
      </div>
    );
  }
}

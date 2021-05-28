import React, { Component } from "react";
import logo from "../img/userLogo.png";
import StudentService from "../services/StudentService";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.match.params.id,
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      pob: "",
      gender: "",
      language: "",
      country: "",
      state: "",
      city: "",
      pin: "",
      fFirstName: "",
      fMiddleName: "",
      fLastName: "",
      fEmail: "",
      fEdq: "",
      fProfession: "",
      fDesignation: "",
      fPhone: "",
      mFirstName: "",
      mMiddleName: "",
      mLastName: "",
      mEmail: "",
      mEdq: "",
      mProfession: "",
      mDesignation: "",
      mPhone: "",
      eName: "",
      eRelation: "",
      eNumber: "",
      reference: "",
      rAddress: "",
      stdImg: "",
      formError: "",
      errors: {
        firstName: "",
        lastName: "",
        middleName: "",
        fFirstName: "",
        fMiddleName: "",
        fLastName: "",
        mFirstName: "",
        mMiddleName: "",
        mLastName: "",
        dob: "",
        pob: "",
        pin: "",
        fEmail: "",
        fProfession: "",
        fDesignation: "",
        fPhone: "",
        mEmail: "",
        mProfession: "",
        mDesignation: "",
        mPhone: "",
        eName: "",
        eRelation: "",
        eNumber: "",
        reference: "",
        rAddress: "",
      },
    };
  }

  componentDidMount() {
    // step 4
    if (this.state._id !== "_add") {
      StudentService.getStudentById(this.state._id).then((res) => {
        let student = res.data;
        this.setState({
          firstName: student.firstName,
          middleName: student.middleName,
          lastName: student.lastName,
          dob: student.dob,
          pob: student.pob,
          gender: student.gender,
          language: student.language,
          country: student.country,
          state: student.state,
          city: student.city,
          pin: student.pin,
          fFirstName: student.fFirstName,
          fMiddleName: student.fMiddleName,
          fLastName: student.fLastName,
          fEmail: student.fEmail,
          fEdq: student.fEdq,
          fProfession: student.fProfession,
          fDesignation: student.fDesignation,
          fPhone: student.fPhone,
          mFirstName: student.mFirstName,
          mMiddleName: student.mMiddleName,
          mLastName: student.mLastName,
          mEmail: student.mEmail,
          mEdq: student.mEdq,
          mProfession: student.mProfession,
          mDesignation: student.mDesignation,
          mPhone: student.mPhone,
          eName: student.eName,
          eRelation: student.eRelation,
          eNumber: student.eNumber,
          reference: student.reference,
          rAddress: student.rAddress,
          stdImg: student.stdImg,
        });
      });
    }
  }
  calculate_age = (dob) => {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };
  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    if (
      name === "firstName" ||
      name === "lastName" ||
      name === "middleName" ||
      name === "fFirstName" ||
      name === "fLastName" ||
      name === "fMiddleName" ||
      name === "mFirstName" ||
      name === "mLastName" ||
      name === "mMiddleName" ||
      name === "eName" ||
      name === "eRelation" ||
      name === "reference"
    ) {
      if (value.trim().length < 3) {
        errors[name] = "must be at least 3 characters long!";
      } else {
        errors[name] = "";
      }
      if (/[^a-zA-Z -]/.test(value)) {
        errors[name] = "Invalid characters";
      }
    } else if (name === "fEmail" || name === "mEmail") {
      const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      );
      errors[name] = validEmailRegex.test(value) ? "" : "Email is not valid!";
    } else if (
      name === "fProfession" ||
      name === "mProfession" ||
      name === "fDesignation" ||
      name === "mDesignation"
    ) {
      if (/[^a-zA-Z -]/.test(value)) {
        errors[name] = "Invalid characters";
      } else {
        errors[name] = "";
      }
    } else if (name === "fPhone" || name === "mPhone" || name === "eNumber") {
      if (/^[0-9]{10}$/.test(value)) {
        errors[name] = "";
      } else {
        errors[name] = "Should contain only 10 digits";
      }
    }

    switch (name) {
      case "dob":
        let age = this.calculate_age(new Date(value));
        if (age >= 5 && age <= 20) {
          errors[name] = "";
        } else {
          errors[name] = "Age should be between 5 and 20";
        }
        break;
      case "pob":
        if (value.trim().length < 2) {
          errors[name] = "must be at least 2 characters long!";
        } else {
          errors[name] = "";
        }
        break;
      case "pin":
        if (/^[0-9]{6}$/.test(value)) {
          errors[name] = "";
        } else {
          errors[name] = "Should contain only 6 digits";
        }
        break;
      case "rAddress":
        if (value.trim().length < 6) {
          errors[name] = "must be at least 5 characters long!";
        } else {
          errors[name] = "";
        }
        break;
      default:
        break;
    }
    if (name === "stdImg") {
      this.setState({ [name]: event.target.files[0].name });
    } else {
      this.setState({ errors, [name]: value });
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      const student = {
        firstName: this.state.firstName,
        middleName: this.state.middleName,
        lastName: this.state.lastName,
        dob: this.state.dob,
        pob: this.state.pob,
        gender: this.state.gender,
        language: this.state.language,
        country: this.state.country,
        state: this.state.state,
        city: this.state.city,
        pin: this.state.pin,
        fFirstName: this.state.fFirstName,
        fMiddleName: this.state.fMiddleName,
        fLastName: this.state.fLastName,
        fEmail: this.state.fEmail,
        fEdq: this.state.fEdq,
        fProfession: this.state.fProfession,
        fDesignation: this.state.fDesignation,
        fPhone: this.state.fPhone,
        mFirstName: this.state.mFirstName,
        mMiddleName: this.state.mMiddleName,
        mLastName: this.state.mLastName,
        mEmail: this.state.mEmail,
        mEdq: this.state.mEdq,
        mProfession: this.state.mProfession,
        mDesignation: this.state.mDesignation,
        mPhone: this.state.mPhone,
        eName: this.state.eName,
        eRelation: this.state.eRelation,
        eNumber: this.state.eNumber,
        reference: this.state.reference,
        rAddress: this.state.rAddress,
        stdImg: this.state.stdImg,
      };

      this.setState(() => {
        return {
          _id: "",
          firstName: "",
          middleName: "",
          lastName: "",
          dob: "",
          pob: "",
          gender: "",
          language: "",
          country: "",
          state: "",
          city: "",
          pin: "",
          fFirstName: "",
          fMiddleName: "",
          fLastName: "",
          fEmail: "",
          fEdq: "",
          fProfession: "",
          fDesignation: "",
          fPhone: "",
          mFirstName: "",
          mMiddleName: "",
          mLastName: "",
          mEmail: "",
          mEdq: "",
          mProfession: "",
          mDesignation: "",
          mPhone: "",
          eName: "",
          eRelation: "",
          eNumber: "",
          reference: "",
          rAddress: "",
          stdImg: "",
          formError: "",
        };
      });

      if (this.state._id === "_add") {
        StudentService.createStudent(student).then((res) => {
          this.props.history.push("/");
        });
      } else {
        StudentService.updateStudent(student, this.state._id).then((res) => {
          this.props.history.push("/");
        });
      }
    } else {
      console.error("Invalid Form");
      let error = "Enter Valid Details";
      this.setState({ formError: error });
    }
  };

  render() {
    const {
      firstName,
      middleName,
      lastName,
      dob,
      pob,
      errors,
      language,
      country,
      state,
      city,
      pin,
      fFirstName,
      fMiddleName,
      fLastName,
      fEmail,
      fEdq,
      fProfession,
      fDesignation,
      fPhone,
      mFirstName,
      mMiddleName,
      mLastName,
      mEmail,
      mEdq,
      mProfession,
      mDesignation,
      mPhone,
      eName,
      eRelation,
      eNumber,
      reference,
      rAddress,
      gender,
      stdImg,
      formError,
    } = this.state;

    return (
      <div className="my-5">
        <div className="p-3 bg-dark text-white text-center rounded-top">
          <h4 className="text-uppercase">Student Admission Form</h4>
        </div>
        <div className="p-5 bg-light rounded-bottom">
          <form onSubmit={this.handleSubmit}>
            {/* name */}
            <div className="row mb-3">
              <label htmlFor="stdImg" className="col-md-2 form-label">
                Student Photo
              </label>
              <div className="col-md-6 pb-3">
                <input
                  className="form-control"
                  name="stdImg"
                  required={this.state._id === "_add" ? true : false}
                  type="file"
                  id="stdImg"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-md-4 text-center">
                {stdImg ? (
                  <img
                    src={`../img/user/${stdImg}`}
                    width="80px"
                    className="border border-primary border-2 rounded-circle"
                    alt="student image"
                  />
                ) : (
                  <img
                    src={logo}
                    width="80px"
                    className="border border-primary border-2 rounded-circle"
                    alt="student imagef"
                  />
                )}
              </div>
            </div>
            <div className="row mb-3">
              <label className="form-label col-md-2">Name</label>
              <div className="col-md-10 row">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={this.handleChange}
                    required
                  />
                  {errors.firstName.length > 0 && (
                    <small className="text-danger">{errors.firstName}</small>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Middle Name"
                    name="middleName"
                    value={middleName}
                    onChange={this.handleChange}
                    required
                  />
                  {errors.middleName.length > 0 && (
                    <small className="text-danger">{errors.middleName}</small>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={this.handleChange}
                    required
                  />
                  {errors.lastName.length > 0 && (
                    <small className="text-danger">{errors.lastName}</small>
                  )}
                </div>
              </div>
            </div>
            {/* DOB */}
            <div className="row mb-3">
              <label className="form-label col-md-2">DOB</label>
              <div className="col-md-10">
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={dob}
                  onChange={this.handleChange}
                  required
                />
                {errors.dob.length > 0 && (
                  <small className="text-danger">{errors.dob}</small>
                )}
              </div>
            </div>
            {/* Place of birth */}
            <div className="row mb-3">
              <label className="form-label col-md-2">Place of Birth</label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Place Of Birth"
                  name="pob"
                  value={pob}
                  onChange={this.handleChange}
                  required
                />
                {errors.pob.length > 0 && (
                  <small className="text-danger">{errors.pob}</small>
                )}
              </div>
            </div>
            {/* Gender */}
            <div className="row mb-3">
              <label className="form-label col-md-2">Gender</label>
              <div className="col-md-10">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    required
                    onChange={this.handleChange}
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
                    checked={gender === "female"}
                    onChange={this.handleChange}
                    required
                    id="female"
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
            </div>
            {/* First Language */}
            <div className="row mb-3">
              <label className="form-label col-md-2">First Language</label>
              <div className="col-md-10">
                <select
                  className="form-select"
                  name="language"
                  value={language}
                  onChange={this.handleChange}
                  required
                >
                  <option defaultValue value="">
                    Select First Language
                  </option>
                  <option value="gujarati">Gujarati</option>
                  <option value="hindi">Hindi</option>
                  <option value="english">English</option>
                </select>
              </div>
            </div>
            {/* Address */}
            <div className="row mb-3">
              <label className="form-label col-md-2">Address</label>
              <div className="col-md-10 row">
                <div className="col-md-3">
                  <select
                    className="form-select"
                    name="country"
                    value={country}
                    onChange={this.handleChange}
                    required
                  >
                    <option defaultValue value="">
                      Select Country
                    </option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    name="state"
                    onChange={this.handleChange}
                    value={state}
                    required
                  >
                    <option defaultValue value="">
                      {country ? "Select State" : "Select Country First"}
                    </option>
                    {country ? (
                      country === "india" ? (
                        <>
                          <option value="gujarat">Gujarat</option>
                          <option value="delhi">Delhi</option>
                        </>
                      ) : country === "usa" ? (
                        <>
                          <option value="california">California</option>
                          <option value="texas">Texas</option>
                        </>
                      ) : (
                        <>
                          <option value="alberta">Alberta</option>
                          <option value="ontario">Ontario</option>
                        </>
                      )
                    ) : (
                      ""
                    )}
                  </select>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    name="city"
                    onChange={this.handleChange}
                    value={city}
                    required
                  >
                    <option defaultValue value="">
                      {state ? "Select City" : "Select State First"}
                    </option>
                    {state ? (
                      state === "gujarat" ? (
                        <>
                          <option value="ahmedabad">Ahmedabad</option>
                          <option value="vadodara">Vadodara</option>
                          <option value="gandhinagar">Gandhinagar</option>
                        </>
                      ) : state === "delhi" ? (
                        <>
                          <option value="ahmedabad">Firozabad</option>
                          <option value="new delhi">New Delhi</option>
                          <option value="gurugram">Gurugram</option>
                        </>
                      ) : state === "california" ? (
                        <>
                          <option value="los angeles">Los Angeles</option>
                          <option value="dan diego">San Diego</option>
                          <option value="san francisco">San Francisco</option>
                        </>
                      ) : state === "texas" ? (
                        <>
                          <option value="houston">Houston</option>
                          <option value="dallas">Dallas</option>
                          <option value="austin">Austin</option>
                        </>
                      ) : state === "alberta" ? (
                        <>
                          <option value="edmonton">Edmonton</option>
                          <option value="calgary">Calgary</option>
                        </>
                      ) : (
                        <>
                          <option value="toronto">Toronto</option>
                          <option value="hamilton">Hamilton</option>
                        </>
                      )
                    ) : (
                      ""
                    )}
                  </select>
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="PIN Code"
                    name="pin"
                    value={pin}
                    onChange={this.handleChange}
                    required
                  />
                  {errors.pin.length > 0 && (
                    <small className="text-danger">{errors.pin}</small>
                  )}
                </div>
              </div>
            </div>
            {/* Father details */}
            <h4 className="mb-3">Father Details :</h4>
            {/* Father Name */}
            <div className="row mb-3">
              <label className="form-label col-md-2">Name</label>
              <div className="col-md-10 row">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="fFirstName"
                    value={fFirstName}
                    onChange={this.handleChange}
                    required
                  />
                  {errors.fFirstName.length > 0 && (
                    <small className="text-danger">{errors.fFirstName}</small>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Middle Name"
                    name="fMiddleName"
                    value={fMiddleName}
                    onChange={this.handleChange}
                    required
                  />
                  {errors.fMiddleName.length > 0 && (
                    <small className="text-danger">{errors.fMiddleName}</small>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="fLastName"
                    value={fLastName}
                    onChange={this.handleChange}
                    required
                  />
                  {errors.fLastName.length > 0 && (
                    <small className="text-danger">{errors.fLastName}</small>
                  )}
                </div>
              </div>
            </div>
            {/* father email */}
            <div className="row mb-3">
              <label className="form-label col-md-2">Email</label>
              <div className="col-md-10">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="fEmail"
                  value={fEmail}
                  onChange={this.handleChange}
                  required
                />
                {errors.fEmail.length > 0 && (
                  <small className="text-danger">{errors.fEmail}</small>
                )}
              </div>
            </div>
            {/* father education */}
            <div className="row mb-3">
              <label className="form-label col-md-2">
                Education Qualification
              </label>
              <div className="col-md-10">
                <select
                  className="form-select"
                  name="fEdq"
                  value={fEdq}
                  onChange={this.handleChange}
                  required
                >
                  <option defaultValue value="">
                    Select Qualification
                  </option>
                  <option value="post graduact">Post Graduact</option>
                  <option value="graduact">Graduact</option>
                  <option value="12th Pass">12th Pass</option>
                  <option value="10th Pass">10th Pass</option>
                  <option value="less then 10th">Less Then 10th</option>
                </select>
              </div>
            </div>
            {/* Father Profession */}
            <div className="row mb-3">
              <label className="form-label col-md-2">Profession</label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Profession"
                  name="fProfession"
                  value={fProfession}
                  onChange={this.handleChange}
                  required
                />
                {errors.fProfession.length > 0 && (
                  <small className="text-danger">{errors.fProfession}</small>
                )}
              </div>
            </div>
            {/* Father Designation */}
            <div className="row mb-3">
              <label className="form-label col-md-2">Designation</label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Designation"
                  name="fDesignation"
                  value={fDesignation}
                  onChange={this.handleChange}
                  required
                />
                {errors.fDesignation.length > 0 && (
                  <small className="text-danger">{errors.fDesignation}</small>
                )}
              </div>
            </div>
            {/* Father Phone */}
            <div className="row mb-3">
              <label className="form-label col-md-2">Phone</label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  name="fPhone"
                  value={fPhone}
                  onChange={this.handleChange}
                  required
                />
                {errors.fPhone.length > 0 && (
                  <small className="text-danger">{errors.fPhone}</small>
                )}
              </div>
            </div>
            {/* Mother Details */}
            <h4 className="mb-3">Mother Details :</h4>
            {/* Mother Name */}
            <div className="row mb-3">
              <label className="form-label col-md-2">Name</label>
              <div className="col-md-10 row">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="mFirstName"
                    value={mFirstName}
                    onChange={this.handleChange}
                    required
                  />
                  {errors.mFirstName.length > 0 && (
                    <small className="text-danger">{errors.mFirstName}</small>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Middle Name"
                    name="mMiddleName"
                    value={mMiddleName}
                    onChange={this.handleChange}
                    required
                  />
                  {errors.mMiddleName.length > 0 && (
                    <small className="text-danger">{errors.mMiddleName}</small>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="mLastName"
                    value={mLastName}
                    onChange={this.handleChange}
                    required
                  />
                  {errors.mLastName.length > 0 && (
                    <small className="text-danger">{errors.mLastName}</small>
                  )}
                </div>
              </div>
            </div>
            {/* Mother email */}
            <div className="row mb-3">
              <label className="form-label col-md-2">Email</label>
              <div className="col-md-10">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="mEmail"
                  value={mEmail}
                  onChange={this.handleChange}
                  required
                />
                {errors.mEmail.length > 0 && (
                  <small className="text-danger">{errors.mEmail}</small>
                )}
              </div>
            </div>
            {/* Mother education */}
            <div className="row mb-3">
              <label className="form-label col-md-2">
                Education Qualification
              </label>
              <div className="col-md-10">
                <select
                  className="form-select"
                  name="mEdq"
                  value={mEdq}
                  onChange={this.handleChange}
                  required
                >
                  <option defaultValue value="">
                    Select Qualification
                  </option>
                  <option value="post graduact">Post Graduact</option>
                  <option value="graduact">Graduact</option>
                  <option value="12th Pass">12th Pass</option>
                  <option value="10th Pass">10th Pass</option>
                  <option value="less then 10th">Less Then 10th</option>
                </select>
              </div>
            </div>
            {/* Mother Profession */}
            <div className="row mb-3">
              <label className="form-label col-md-2">Profession</label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Profession"
                  name="mProfession"
                  value={mProfession}
                  onChange={this.handleChange}
                  required
                />
                {errors.mProfession.length > 0 && (
                  <small className="text-danger">{errors.mProfession}</small>
                )}
              </div>
            </div>
            {/* Mother Designation */}
            <div className="row mb-3">
              <label className="form-label col-md-2">Designation</label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Designation"
                  name="mDesignation"
                  value={mDesignation}
                  onChange={this.handleChange}
                  required
                />
                {errors.mDesignation.length > 0 && (
                  <small className="text-danger">{errors.mDesignation}</small>
                )}
              </div>
            </div>
            {/* Mother Phone */}
            <div className="row mb-3">
              <label className="form-label col-md-2">Phone</label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  name="mPhone"
                  value={mPhone}
                  onChange={this.handleChange}
                  required
                />
                {errors.mPhone.length > 0 && (
                  <small className="text-danger">{errors.mPhone}</small>
                )}
              </div>
            </div>
            {/* Emergency Contact List */}
            <h4 className="mb-3">Emergency Contact List :</h4>
            <div className="row mb-3">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name Of Relative"
                  name="eName"
                  value={eName}
                  onChange={this.handleChange}
                  required
                />
                {errors.eName.length > 0 && (
                  <small className="text-danger">{errors.eName}</small>
                )}
              </div>

              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Relation"
                  name="eRelation"
                  value={eRelation}
                  onChange={this.handleChange}
                  required
                />
                {errors.eRelation.length > 0 && (
                  <small className="text-danger">{errors.eRelation}</small>
                )}
              </div>

              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="eNumber"
                  value={eNumber}
                  onChange={this.handleChange}
                  required
                />
                {errors.eNumber.length > 0 && (
                  <small className="text-danger">{errors.eNumber}</small>
                )}
              </div>
            </div>
            {/* Reference Details */}
            <h4>Reference Details :</h4>
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Reference Through"
                  name="reference"
                  value={reference}
                  onChange={this.handleChange}
                  required
                />
                {errors.reference.length > 0 && (
                  <small className="text-danger">{errors.reference}</small>
                )}
              </div>

              <div className="col-md-6">
                <textarea
                  className="form-control"
                  placeholder="Address"
                  name="rAddress"
                  value={rAddress}
                  onChange={this.handleChange}
                  required
                />
                {errors.rAddress.length > 0 && (
                  <small className="text-danger">{errors.rAddress}</small>
                )}
              </div>
            </div>
            <button
              type="submit"
              className={
                this.state._id === "_add"
                  ? "btn btn-lg btn-success"
                  : "btn btn-lg btn-warning"
              }
            >
              {this.state._id === "_add" ? "Submit" : "Update"}
            </button>
            {formError && (
              <p className="my-2">
                <b className="text-danger">{formError}</b>
              </p>
            )}
          </form>
        </div>
      </div>
    );
  }
}

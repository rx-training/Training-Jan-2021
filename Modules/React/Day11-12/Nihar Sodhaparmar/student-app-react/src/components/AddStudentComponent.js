import React, { Component } from "react";
import StudentService from "../services/StudentService";

export default class AdmissionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      countries: {
        india: [
          {
            gujarat: ["ahmedabad", "nadiad", "vadodara"],

            maharashtra: ["mumbai", "pune", "nagpur"],
          },
        ],

        america: [
          {
            alberta: ["airdrie", "brooks", "camrose"],

            "british columbia": ["armstrong", "burnaby", "castlegar"],
          },
        ],
      },
      states: {},
      cities: [],
      educationQualifications: ["10th", "12th", "B.E. / B. Tech."],
      isEdit: false,
      studentDetails: {
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        email: "",
        phoneNumber: "",
        birthPlace: "",
        firstLanguage: "",
        country: "select",
        state: "select",
        city: "select",
        pincode: "",
        fatherFirstName: "",
        fatherMiddleName: "",
        fatherLastName: "",
        fatherEmail: "",
        fatherEducation: "select",
        fatherProfession: "",
        fatherDesignation: "",
        fatherPhoneNumber: "",
        motherFirstName: "",
        motherMiddleName: "",
        motherLastName: "",
        motherEmail: "",
        motherEducation: "select",
        motherProfession: "",
        motherDesignation: "",
        motherPhoneNumber: "",
        relation: "",
        emergencyPhoneNumber: "",
        referenceThrough: "",
        referenceAddress: "",
        studentImage: "",
      },
      validate: {
        _id: () => {},
        __v: () => {},
        firstName: (name) => this.nameValidation("First Name", name),
        middleName: (name) => this.nameValidation("Middle Name", name),
        lastName: (name) => this.nameValidation("Last Name", name),
        email: (email) => this.emailValidation(email),
        phoneNumber: (number) => this.phoneNumberValidation(number),
        dob: (dob) => this.dobValidation(dob),
        birthPlace: (birthPlace) =>
          this.nameValidation("Birth place", birthPlace),
        firstLanguage: (firstLanguage) =>
          this.firstLanguageValidation(firstLanguage),
        country: (country) => this.selectionValidation("Country", country),
        state: (state) => this.selectionValidation("State", state),
        city: (city) => this.selectionValidation("City", city),
        pincode: (pincode) => this.pincodeValidation(pincode),
        fatherFirstName: (name) => this.nameValidation("First Name", name),
        fatherMiddleName: (name) => this.nameValidation("Middle Name", name),
        fatherLastName: (name) => this.nameValidation("Last Name", name),
        fatherEmail: (email) => this.emailValidation(email),
        fatherEducation: (education) =>
          this.selectionValidation("Education", education),
        fatherProfession: (profession) =>
          this.nameValidation("Profession", profession),
        fatherDesignation: (designation) =>
          this.nameValidation("Designation", designation),
        fatherPhoneNumber: (number) => this.phoneNumberValidation(number),
        motherFirstName: (name) => this.nameValidation("First Name", name),
        motherMiddleName: (name) => this.nameValidation("Middle Name", name),
        motherLastName: (name) => this.nameValidation("Last Name", name),
        motherEmail: (email) => this.emailValidation(email),
        motherEducation: (education) =>
          this.selectionValidation("Education", education),
        motherProfession: (profession) =>
          this.nameValidation("Profession", profession),
        motherDesignation: (designation) =>
          this.nameValidation("Designation", designation),
        motherPhoneNumber: (number) => this.phoneNumberValidation(number),
        relation: (relation) => this.nameValidation("Relation", relation),
        emergencyPhoneNumber: (number) => this.phoneNumberValidation(number),
        referenceThrough: (name) =>
          this.nameValidation("Reference through", name),
        referenceAddress: (add) =>
          this.nameValidation("Reference through", add),
        studentImage: (image) => this.imageValidation(image),
      },
      errors: {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        dob: "",
        birthPlace: "",
        firstLanguage: "",
        state: "",
        city: "",
        pincode: "",
        fatherFirstName: "",
        fatherMiddleName: "",
        fatherLastName: "",
        fatherEmail: "",
        fatherEducation: "",
        fatherProfession: "",
        fatherDesignation: "",
        fatherPhoneNumber: "",
        motherFirstName: "",
        motherMiddleName: "",
        motherLastName: "",
        motherEmail: "",
        motherEducation: "",
        motherProfession: "",
        motherDesignation: "",
        motherPhoneNumber: "",
        relation: "",
        emergencyPhoneNumber: "",
        referenceThrough: "",
        referenceAddress: "",
        studentImage: "",
      },
    };
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      StudentService.getStudentById(this.state.id).then((res) => {
        let student = { ...res.data };
        let dob = new Date(student.dob);
        let day = dob.getDate();
        let month = dob.getMonth() + 1;
        let year = dob.getFullYear();
        if (month.toString().length < 2) {
          month = "0" + month.toString();
        }
        student.dob = `${year}-${month}-${day}`;
        this.setState({
          studentDetails: { ...student },
          isEdit: true,
          states: this.state.countries[res.data.country][0],
          cities: this.state.countries[res.data.country][0][res.data.state],
        });
      });
    }
  }

  countryChange = async (event, handleChange) => {
    const defaultEventTarget = event.target.value;
    if (event.target.value === "select") {
      this.setState({
        states: {},
        cities: [],
      });
      await handleChange(event);
      event.target.name = "state";
      event.target.value = "select";
      await handleChange(event);
      event.target.name = "city";
      event.target.value = "select";
      await handleChange(event);
    } else {
      this.setState(
        {
          states: this.state.countries[event.target.value][0],
        },
        () => {
          event.target.name = "country";
          event.target.value = defaultEventTarget;
          handleChange(event);
        }
      );
    }
  };

  stateChange = async (event, handleChange, country) => {
    const defaultEventTarget = event.target.value;
    if (event.target.value === "select") {
      this.setState({
        cities: [],
      });
      await handleChange(event);
      event.target.name = "city";
      event.target.value = "select";
      await handleChange(event);
    } else {
      this.setState(
        {
          cities: this.state.countries[country][0][event.target.value],
        },
        () => {
          event.target.name = "state";
          event.target.value = defaultEventTarget;
          handleChange(event);
        }
      );
    }
  };

  nameValidation = (fieldName, fieldValue) => {
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

  dobValidation(dob) {
    if (dob.trim() === "") {
      return "Date is required";
    }

    let age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (age < 5 || age > 20) {
      return "Age should be between 5 and 20";
    }

    return null;
  }

  firstLanguageValidation = (firstLanguage) => {
    if (!firstLanguage) {
      return "Select language";
    }
    return null;
  };

  selectionValidation = (fieldName, selection) => {
    if (selection === "select") {
      return `Select ${fieldName}`;
    }
    return null;
  };

  pincodeValidation = (pincode) => {
    if (pincode.trim() === "") {
      return `Pincode is required`;
    }

    if (!/\d{6}/.test(pincode.trim())) {
      return "Pincode must be length of 6 digits";
    }
  };

  emailValidation = (email) => {
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
    return "Please enter a valid email";
  };

  phoneNumberValidation = (number) => {
    if (number.trim() === "") {
      return "Phone number is required";
    }
    if (!/\d{10}/.test(number)) {
      return "Phone number contains exactly 10 digits";
    }

    return null;
  };

  imageValidation = (image) => {
    if (image.length === 0) {
      return "Image is required";
    }

    return null;
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    // keep number fields as numbers
    // const value = type === "number" ? +newValue : newValue;

    let errors = { ...this.state.errors };
    if (
      name === "firstLanguage" ||
      (name === "country" && value !== "select") ||
      (name === "state" && value !== "select") ||
      (name === "city" && value !== "select") ||
      (name === "fatherEducation" && value !== "select") ||
      (name === "motherEducation" && value !== "select")
    ) {
      errors[name] = null;
      this.setState({ errors });
    }

    if (name === "studentImage") {
      value = `images/${event.target.files[0].name}`;
    }

    let studentDetails = this.state.studentDetails;
    // if (name === "studentImage") {
    //   studentDetails = {
    //     ...studentDetails,
    //     [name]: URL.createObjectURL(event.target.files[0]),
    //   };
    // } else {
    studentDetails = { ...studentDetails, [name]: value };
    // }

    this.setState({
      studentDetails,
    });
  };

  handleBlur = (event) => {
    const { name, value } = event.target;

    let errors = this.state.errors;

    const error = this.state.validate[name](value);

    errors = { ...errors, [name]: error };

    this.setState({
      errors: { ...errors },
    });
  };

  validateForm = () => {
    let valid = true;
    let studentDetails = { ...this.state.studentDetails };
    let errors = { ...this.state.errors };
    let error = null;

    for (const item in studentDetails) {
      if (item !== "_id" || item !== "__v") {
        error = this.state.validate[item](studentDetails[item]);
      }

      if (error) {
        valid = false;
      }

      errors = { ...errors, [item]: error };
    }

    this.setState({
      errors,
    });
    return valid;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let isValidForm = this.validateForm();

    if (isValidForm) {
      if (this.state.id === "_add") {
        StudentService.addStudent({ ...this.state.studentDetails }).then(
          (res) => {
            this.props.history.push("/students");
          }
        );
      } else {
        StudentService.updateStudent(this.state.id, {
          ...this.state.studentDetails,
        }).then((res) => {
          this.props.history.push(`/view-student/${this.state.id}`);
        });
      }

      this.setState({
        isEdit: false,
        studentDetails: {
          firstName: "",
          middleName: "",
          lastName: "",
          dob: "",
          email: "",
          phoneNumber: "",
          birthPlace: "",
          firstLanguage: "",
          country: "select",
          state: "select",
          city: "select",
          pincode: "",
          fatherFirstName: "",
          fatherMiddleName: "",
          fatherLastName: "",
          fatherEmail: "",
          fatherEducation: "select",
          fatherProfession: "",
          fatherDesignation: "",
          fatherPhoneNumber: "",
          motherFirstName: "",
          motherMiddleName: "",
          motherLastName: "",
          motherEmail: "",
          motherEducation: "select",
          motherProfession: "",
          motherDesignation: "",
          motherPhoneNumber: "",
          relation: "",
          emergencyPhoneNumber: "",
          referenceThrough: "",
          referenceAddress: "",
          studentImage: "",
        },
      });
    } else {
      console.log("Not Valid Form");
    }
  };

  render() {
    const { studentDetails, errors, isEdit } = this.state;
    const handleBlur = this.handleBlur;
    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;
    const {
      firstName,
      middleName,
      lastName,
      email,
      phoneNumber,
      dob,
      birthPlace,
      firstLanguage,
      country,
      state,
      city,
      pincode,
      fatherFirstName,
      fatherMiddleName,
      fatherLastName,
      fatherEmail,
      fatherEducation,
      fatherProfession,
      fatherDesignation,
      fatherPhoneNumber,
      motherFirstName,
      motherMiddleName,
      motherLastName,
      motherEmail,
      motherEducation,
      motherProfession,
      motherDesignation,
      motherPhoneNumber,
      relation,
      emergencyPhoneNumber,
      referenceThrough,
      referenceAddress,
      studentImage,
    } = studentDetails;

    return (
      <div className="container my-5">
        <div className="card student-form">
          <h1 className="text-center card-header text-white bg-dark py-3">
            Addmission Form
          </h1>
          <div className="card-body my-5 student-form-body">
            <form onSubmit={handleSubmit}>
              <h5 className="text-muted">Student's Info</h5>
              <hr />
              <div className="form-group row">
                <label htmlFor="name" className="col-lg-3 col-form-label">
                  Student Name
                </label>
                <div className="col-lg-3">
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.firstName}</p>
                </div>
                <div className="col-lg-3 name-md-mt">
                  <input
                    type="text"
                    name="middleName"
                    className="form-control"
                    placeholder="Middle Name"
                    value={middleName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.middleName}</p>
                </div>
                <div className="col-lg-3 name-md-mt">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.lastName}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label htmlFor="email" className="col-lg-3 col-form-label">
                  Email
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.email}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label
                  htmlFor="phoneNumber"
                  className="col-lg-3 col-form-label"
                >
                  Phone Number
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="phoneNumber"
                    className="form-control"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.phoneNumber}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label htmlFor="dob" className="col-lg-3 col-form-label">
                  Date of Birth
                </label>
                <div className="col-lg-9">
                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                    placeholder="Date of Birth"
                    value={dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.dob}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label htmlFor="birthPlace" className="col-lg-3 col-form-label">
                  Birth Place
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="birthPlace"
                    className="form-control"
                    placeholder="Place of Birth"
                    value={birthPlace}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.birthPlace}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label
                  htmlFor="firstLanguage"
                  className="col-lg-3 col-form-label"
                >
                  First Language
                </label>
                <div className="col-lg-9">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="firstLanguage"
                      value="gujarati"
                      checked={firstLanguage === "gujarati"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="gujarati">
                      Gujarati
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="firstLanguage"
                      value="hindi"
                      checked={firstLanguage === "hindi"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="hindi">
                      Hindi
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="firstLanguage"
                      value="english"
                      checked={firstLanguage === "english"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="english">
                      English
                    </label>
                  </div>
                  <p className="text-danger mb-0">{errors.firstLanguage}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label htmlFor="country" className="col-md-3 col-form-label">
                  Select Country
                </label>
                <div className="col-md-9">
                  <select
                    name="country"
                    className="form-control text-capitalize"
                    value={country}
                    onChange={(event) => {
                      // handleChange(event);
                      this.countryChange(event, handleChange);
                    }}
                  >
                    <option value="select">Select</option>
                    {Object.entries(this.state.countries).map((item, index) => {
                      return (
                        <option
                          value={item[0]}
                          key={index}
                          className="text-capitalize"
                        >
                          {item[0]}
                        </option>
                      );
                    })}
                  </select>
                  <p className="text-danger mb-0">{errors.country}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label htmlFor="state" className="col-md-3 col-form-label">
                  Select State
                </label>
                <div className="col-md-9">
                  <select
                    name="state"
                    className="form-control text-capitalize"
                    value={state}
                    onChange={(event) => {
                      // handleChange(event);
                      this.stateChange(event, handleChange, country);
                    }}
                  >
                    <option value="select">Select</option>
                    {Object.entries(this.state.states).map((item, index) => {
                      return (
                        <option
                          value={item[0]}
                          key={index}
                          className="text-capitalize"
                        >
                          {item[0]}
                        </option>
                      );
                    })}
                  </select>
                  <p className="text-danger mb-0">{errors.state}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label htmlFor="city" className="col-md-3 col-form-label">
                  Select City
                </label>
                <div className="col-md-9">
                  <select
                    name="city"
                    className="form-control text-capitalize"
                    value={city}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  >
                    <option value="select">Select</option>
                    {this.state.cities.map((item, index) => {
                      return (
                        <option
                          value={item}
                          key={index}
                          className="text-capitalize"
                        >
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <p className="text-danger mb-0">{errors.city}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label htmlFor="pincode" className="col-lg-3 col-form-label">
                  Pincode
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="pincode"
                    className="form-control"
                    placeholder="Pincode"
                    value={pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.pincode}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label
                  htmlFor="studentImage"
                  className="col-lg-3 col-form-label"
                >
                  Student's Image
                </label>
                <div className="col-lg-9">
                  <input
                    type="file"
                    name="studentImage"
                    className="form-control border-white pl-0"
                    onChange={handleChange}
                  />
                  <p className="text-danger mb-0">{errors.studentImage}</p>
                </div>
              </div>

              {studentImage && (
                <div className="row">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-9 justify-content-center d-flex">
                    <div className="form-student-image mx-auto rounded-circle">
                      <img
                        className="rounded-circle"
                        width="175"
                        height="175"
                        src={`../${studentImage}`}
                        alt="student"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ---------- Father's Info ---------- */}
              <h5 className="text-muted mt-5">Father's Info</h5>
              <hr />

              <div className="form-group row">
                <label htmlFor="fatherName" className="col-lg-3 col-form-label">
                  Name
                </label>
                <div className="col-lg-3">
                  <input
                    type="text"
                    name="fatherFirstName"
                    className="form-control"
                    placeholder="First Name"
                    value={fatherFirstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.fatherFirstName}</p>
                </div>
                <div className="col-lg-3 name-md-mt">
                  <input
                    type="text"
                    name="fatherMiddleName"
                    className="form-control"
                    placeholder="Middle Name"
                    value={fatherMiddleName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.fatherMiddleName}</p>
                </div>
                <div className="col-lg-3 name-md-mt">
                  <input
                    type="text"
                    name="fatherLastName"
                    className="form-control"
                    placeholder="Last Name"
                    value={fatherLastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.fatherLastName}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label
                  htmlFor="fatherEmail"
                  className="col-lg-3 col-form-label"
                >
                  Email
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="fatherEmail"
                    className="form-control"
                    placeholder="Father's email"
                    value={fatherEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.fatherEmail}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label
                  htmlFor="fatherEducation"
                  className="col-md-3 col-form-label"
                >
                  Education
                </label>
                <div className="col-md-9">
                  <select
                    name="fatherEducation"
                    className="form-control text-capitalize"
                    value={fatherEducation}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  >
                    <option value="select">Select</option>
                    {this.state.educationQualifications.map((item, index) => {
                      return (
                        <option
                          value={item}
                          key={index}
                          className="text-capitalize"
                        >
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <p className="text-danger mb-0">{errors.fatherEducation}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label
                  htmlFor="fatherProfession"
                  className="col-lg-3 col-form-label"
                >
                  Profession
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="fatherProfession"
                    className="form-control"
                    placeholder="Father's profession"
                    value={fatherProfession}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.fatherProfession}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label
                  htmlFor="fatherDesignation"
                  className="col-lg-3 col-form-label"
                >
                  Designation
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="fatherDesignation"
                    className="form-control"
                    placeholder="Father's designation"
                    value={fatherDesignation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.fatherDesignation}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label
                  htmlFor="fatherPhoneNumber"
                  className="col-lg-3 col-form-label"
                >
                  Phone Number
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="fatherPhoneNumber"
                    className="form-control"
                    placeholder="Father's phone number"
                    value={fatherPhoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.fatherPhoneNumber}</p>
                </div>
              </div>

              {/* ---------- Mother's Info ---------- */}
              <h5 className="text-muted mt-5">Mother's Info</h5>
              <hr />

              <div className="form-group row">
                <label htmlFor="motherName" className="col-lg-3 col-form-label">
                  Name
                </label>
                <div className="col-lg-3">
                  <input
                    type="text"
                    name="motherFirstName"
                    className="form-control"
                    placeholder="First Name"
                    value={motherFirstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.motherFirstName}</p>
                </div>
                <div className="col-lg-3 name-md-mt">
                  <input
                    type="text"
                    name="motherMiddleName"
                    className="form-control"
                    placeholder="Middle Name"
                    value={motherMiddleName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.motherMiddleName}</p>
                </div>
                <div className="col-lg-3 name-md-mt">
                  <input
                    type="text"
                    name="motherLastName"
                    className="form-control"
                    placeholder="Last Name"
                    value={motherLastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.motherLastName}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label
                  htmlFor="motherEmail"
                  className="col-lg-3 col-form-label"
                >
                  Email
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="motherEmail"
                    className="form-control"
                    placeholder="Mother's email"
                    value={motherEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.motherEmail}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label
                  htmlFor="motherEducation"
                  className="col-md-3 col-form-label"
                >
                  Education
                </label>
                <div className="col-md-9">
                  <select
                    name="motherEducation"
                    className="form-control text-capitalize"
                    value={motherEducation}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  >
                    <option value="select">Select</option>
                    {this.state.educationQualifications.map((item, index) => {
                      return (
                        <option
                          value={item}
                          key={index}
                          className="text-capitalize"
                        >
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <p className="text-danger mb-0">{errors.motherEducation}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label
                  htmlFor="motherProfession"
                  className="col-lg-3 col-form-label"
                >
                  Profession
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="motherProfession"
                    className="form-control"
                    placeholder="Mother's profession"
                    value={motherProfession}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.motherProfession}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label
                  htmlFor="motherDesignation"
                  className="col-lg-3 col-form-label"
                >
                  Designation
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="motherDesignation"
                    className="form-control"
                    placeholder="Mother's designation"
                    value={motherDesignation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.motherDesignation}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label
                  htmlFor="motherPhoneNumber"
                  className="col-lg-3 col-form-label"
                >
                  Phone Number
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="motherPhoneNumber"
                    className="form-control"
                    placeholder="Mother's phone number"
                    value={motherPhoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.motherPhoneNumber}</p>
                </div>
              </div>

              {/* ---------- Emergency Info ---------- */}
              <h5 className="text-muted mt-5">Emergency Info</h5>
              <hr />

              <div className="form-group row mt-4">
                <label htmlFor="relation" className="col-lg-3 col-form-label">
                  Relation
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="relation"
                    className="form-control"
                    placeholder="Relation"
                    value={relation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.relation}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label
                  htmlFor="emergencyPhoneNumber"
                  className="col-lg-3 col-form-label"
                >
                  Phone Number
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="emergencyPhoneNumber"
                    className="form-control"
                    placeholder="Emergency phone number"
                    value={emergencyPhoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">
                    {errors.emergencyPhoneNumber}
                  </p>
                </div>
              </div>

              {/* ---------- Reference Info ---------- */}
              <h5 className="text-muted mt-5">Reference Info</h5>
              <hr />

              <div className="form-group row mt-4">
                <label
                  htmlFor="referenceThrough"
                  className="col-lg-3 col-form-label"
                >
                  Reference Through
                </label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="referenceThrough"
                    className="form-control"
                    placeholder="Reference through"
                    value={referenceThrough}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger mb-0">{errors.referenceThrough}</p>
                </div>
              </div>

              <div className="form-group row mt-4">
                <label
                  htmlFor="referenceAddress"
                  className="col-lg-3 col-form-label"
                >
                  Reference Address
                </label>
                <div className="col-lg-9">
                  <textarea
                    name="referenceAddress"
                    className="form-control"
                    placeholder="Reference address"
                    rows="3"
                    value={referenceAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                  <p className="text-danger mb-0">{errors.referenceAddress}</p>
                </div>
              </div>

              <div className="form-group row mb-0">
                <div className="col-lg-3"></div>
                <div className="col-lg-9">
                  <button
                    type="submit"
                    className={
                      isEdit
                        ? "btn btn-success btn-block w-50 mx-auto mt-4 text-uppercase"
                        : "btn btn-dark btn-block w-50 mx-auto mt-4 text-uppercase"
                    }
                  >
                    {isEdit ? "edit student" : "add student"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

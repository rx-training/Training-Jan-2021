import React, { useEffect, useState } from "react";
import StudentService from "../services/StudentService";

const countries = {
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
};

const educationQualifications = [
  "10th",
  "12th",
  "Ptc",
  "Diploma",
  "ITI",
  "B.E. / B. Tech.",
];

export default function AddStudentComponent(props) {
  //  ********** STATES **********
  const [states, setStates] = useState({});

  //  ********** CITIES **********
  const [cities, setCities] = useState([]);

  //  ********** STUDENT ID **********
  const [id] = useState(props.match.params.id);

  //  ********** STUDENT DATA **********
  const [studentDetails, setStudentDetails] = useState({
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
  });

  //  ********** DE-STRUCTURE STUDENT DATA **********
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

  //  ********** VALIDATION OBJECT FOR MAPPING FUNCTIONS **********
  const validate = {
    _id: () => {},
    __v: () => {},
    firstName: (name) => nameValidation("First Name", name),
    middleName: (name) => nameValidation("Middle Name", name),
    lastName: (name) => nameValidation("Last Name", name),
    email: (email) => emailValidation(email),
    phoneNumber: (number) => phoneNumberValidation(number),
    dob: (dob) => dobValidation(dob),
    birthPlace: (birthPlace) => nameValidation("Birth place", birthPlace),
    firstLanguage: (firstLanguage) => firstLanguageValidation(firstLanguage),
    country: (country) => selectionValidation("Country", country),
    state: (state) => selectionValidation("State", state),
    city: (city) => selectionValidation("City", city),
    pincode: (pincode) => pincodeValidation(pincode),
    fatherFirstName: (name) => nameValidation("First Name", name),
    fatherMiddleName: (name) => nameValidation("Middle Name", name),
    fatherLastName: (name) => nameValidation("Last Name", name),
    fatherEmail: (email) => emailValidation(email),
    fatherEducation: (education) => selectionValidation("Education", education),
    fatherProfession: (profession) => nameValidation("Profession", profession),
    fatherDesignation: (designation) =>
      nameValidation("Designation", designation),
    fatherPhoneNumber: (number) => phoneNumberValidation(number),
    motherFirstName: (name) => nameValidation("First Name", name),
    motherMiddleName: (name) => nameValidation("Middle Name", name),
    motherLastName: (name) => nameValidation("Last Name", name),
    motherEmail: (email) => emailValidation(email),
    motherEducation: (education) => selectionValidation("Education", education),
    motherProfession: (profession) => nameValidation("Profession", profession),
    motherDesignation: (designation) =>
      nameValidation("Designation", designation),
    motherPhoneNumber: (number) => phoneNumberValidation(number),
    relation: (relation) => nameValidation("Relation", relation),
    emergencyPhoneNumber: (number) => phoneNumberValidation(number),
    referenceThrough: (name) => nameValidation("Reference through", name),
    referenceAddress: (add) => nameValidation("Reference through", add),
    studentImage: (image) => imageValidation(image),
  };

  //  ********** ERRORS **********
  const [errors, setErrors] = useState({
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
  });

  //  ********** IS EDIT **********
  const [isEdit, setIsEdit] = useState(false);

  //  ********** USE EFFECT **********
  useEffect(() => {
    // console.log("In Use Effect.....");
    if (id === "_add") {
      return;
    } else {
      StudentService.getStudentById(id).then((res) => {
        let student = { ...res.data };
        let dob = new Date(student.dob);
        let day = dob.getDate();
        let month = dob.getMonth() + 1;
        let year = dob.getFullYear();
        if (month.toString().length < 2) {
          month = "0" + month.toString();
        }
        student.dob = `${year}-${month}-${day}`;
        setStates(countries[res.data.country][0]);
        setCities(countries[res.data.country][0][res.data.state]);
        setStudentDetails({ ...student });
        setIsEdit(true);
      });
    }
  }, [id]);

  //  ********** COUNTRY CHANGE **********
  const countryChange = async (event) => {
    if (event.target.value === "select") {
      setStates({});
      setCities([]);
      setStudentDetails({
        ...studentDetails,
        country: "select",
        state: "select",
        city: "select",
      });
    } else {
      setStates(countries[event.target.value][0]);
      setStudentDetails({
        ...studentDetails,
        country: event.target.value,
        state: "select",
        city: "select",
      });
    }
  };

  //  ********** STATE CHANGE **********
  const stateChange = async (event) => {
    if (event.target.value === "select") {
      setStudentDetails({ ...studentDetails, state: "select", city: "select" });
      setCities([]);
    } else {
      setCities(countries[country][0][event.target.value]);
      setStudentDetails({
        ...studentDetails,
        state: event.target.value,
        city: "select",
      });
    }
  };

  //  ********** VALIDATION FUNCTIONS **********
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

  const dobValidation = (dob) => {
    if (dob.trim() === "") {
      return "Date is required";
    }

    let age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (age < 5 || age > 20) {
      return "Age should be between 5 and 20";
    }

    return null;
  };

  const firstLanguageValidation = (firstLanguage) => {
    if (!firstLanguage) {
      return "Select language";
    }
    return null;
  };

  const selectionValidation = (fieldName, selection) => {
    if (selection === "select") {
      return `Select ${fieldName}`;
    }
    return null;
  };

  const pincodeValidation = (pincode) => {
    if (pincode.trim() === "") {
      return `Pincode is required`;
    }

    if (!/\d{6}/.test(pincode.trim())) {
      return "Pincode must be length of 6 digits";
    }
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
    return "Please enter a valid email";
  };

  const phoneNumberValidation = (number) => {
    if (number.trim() === "") {
      return "Phone number is required";
    }
    if (!/\d{10}/.test(number)) {
      return "Phone number contains exactly 10 digits";
    }

    return null;
  };

  const imageValidation = (image) => {
    if (image.length === 0) {
      return "Image is required";
    }

    return null;
  };
  //  ********** END OF VALIDATION FUNCTIONS **********

  //  ********** HANDLE CHANGE **********
  const handleChange = (event) => {
    let { name, value } = event.target;

    let tempErrors = errors;
    if (
      name === "firstLanguage" ||
      (name === "country" && value !== "select") ||
      (name === "state" && value !== "select") ||
      (name === "city" && value !== "select") ||
      (name === "fatherEducation" && value !== "select") ||
      (name === "motherEducation" && value !== "select")
    ) {
      tempErrors[name] = null;
      setErrors(tempErrors);
    }

    if (name === "studentImage") {
      value = `images/${event.target.files[0].name}`;
    }

    setStudentDetails({ ...studentDetails, [name]: value });
  };

  //  ********** HANDLE BLUR **********
  const handleBlur = (event) => {
    const { name, value } = event.target;

    const error = validate[name](value);

    setErrors({ ...errors, [name]: error });
  };

  //  ********** FUNCTION TO VALIDATE FORM **********
  const validateForm = () => {
    let valid = true;
    let error = null;

    let tempErrors = errors;

    for (const item in studentDetails) {
      error = validate[item](studentDetails[item]);

      if (error) {
        valid = false;
      }

      tempErrors = { ...tempErrors, [item]: error };
    }

    setErrors(tempErrors);

    return valid;
  };

  //  ********** HANDLE SUBMIT **********
  const handleSubmit = (event) => {
    event.preventDefault();

    let isValidForm = validateForm();

    if (isValidForm) {
      if (id === "_add") {
        StudentService.addStudent({ ...studentDetails }).then((res) => {
          props.history.push("/students");
        });
      } else {
        StudentService.updateStudent(id, {
          ...studentDetails,
        }).then((res) => {
          props.history.push(`/view-student/${id}`);
        });
      }

      setIsEdit(false);
      setStudentDetails({
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
      });
    } else {
      alert("Not Valid Form");
    }
  };

  //  ********** RETURN **********
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
              <label htmlFor="phoneNumber" className="col-lg-3 col-form-label">
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
              <label htmlFor="country" className="col-lg-3 col-form-label">
                Select Country
              </label>
              <div className="col-lg-9">
                <select
                  name="country"
                  className="form-control text-capitalize"
                  value={country}
                  onChange={countryChange}
                >
                  <option value="select">Select</option>
                  {Object.entries(countries).map((item, index) => {
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
              <label htmlFor="state" className="col-lg-3 col-form-label">
                Select State
              </label>
              <div className="col-lg-9">
                <select
                  name="state"
                  className="form-control text-capitalize"
                  value={state}
                  onChange={stateChange}
                >
                  <option value="select">Select</option>
                  {Object.entries(states).map((item, index) => {
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
              <label htmlFor="city" className="col-lg-3 col-form-label">
                Select City
              </label>
              <div className="col-lg-9">
                <select
                  name="city"
                  className="form-control text-capitalize"
                  value={city}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                >
                  <option value="select">Select</option>
                  {cities.map((item, index) => {
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
              <label htmlFor="studentImage" className="col-lg-3 col-form-label">
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
              <label htmlFor="fatherEmail" className="col-lg-3 col-form-label">
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
                  {educationQualifications.map((item, index) => {
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
              <label htmlFor="motherEmail" className="col-lg-3 col-form-label">
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
                  {educationQualifications.map((item, index) => {
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

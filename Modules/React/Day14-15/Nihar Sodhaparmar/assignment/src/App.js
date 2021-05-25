import React, { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentIdCardsList from "./components/StudentList";

function App() {
  const [student, setStudent] = useState({
    id: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    studentImage: "",
    collegeName: "",
    collegeAddress: "",
    collegeCountry: "select",
    collegeLogo: "",
  });

  const [students, setStudents] = useState([]);

  const [errors, setErrors] = useState({
    id: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    studentImage: "",
    collegeName: "",
    collegeAddress: "",
    collegeCountry: "",
    collegeLogo: "",
  });

  const validate = {
    id: (id) => idValidation(id),
    firstName: (name) => nameValidation("First Name", name),
    lastName: (name) => nameValidation("Last Name", name),
    dob: (dob) => dobValidation(dob),
    gender: (gender) => genderValidation(gender),
    studentImage: (image) => imageValidation("Student image", image),
    collegeName: (name) => nameValidation("College Name", name),
    collegeAddress: (address) => addressValidation(address),
    collegeCountry: (country) =>
      selectionValidation("College country", country),
    collegeLogo: (image) => imageValidation("College logo", image),
  };

  const idValidation = (id) => {
    if (id === "") {
      return "Id is required";
    }
    return null;
  };

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

  const genderValidation = (gender) => {
    if (!gender) {
      return "Select gender";
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

  const imageValidation = (fieldName, image) => {
    if (image.length === 0) {
      return `${fieldName} is required`;
    }

    return null;
  };

  const addressValidation = (address) => {
    if (address === "") {
      return "Address is required";
    }
    return null;
  };

  const selectionValidation = (fieldName, selection) => {
    if (selection === "select") {
      return `Select ${fieldName}`;
    }
    return null;
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    const error = validate[name](value);

    setErrors({ ...errors, [name]: error });
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "studentImage" || name === "collegeLogo") {
      value = URL.createObjectURL(e.target.files[0]);
    }
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;

    let error = null;

    let tempErrors = errors;

    for (const item in student) {
      error = validate[item](student[item]);

      if (error) {
        valid = false;
      }

      tempErrors = { ...tempErrors, [item]: error };
    }

    setErrors({ ...tempErrors });

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValidForm = validateForm();
    if (isValidForm) {
      setStudents([...students, { ...student }]);
      setStudent({
        id: "",
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        studentImage: "",
        collegeName: "",
        collegeAddress: "",
        collegeCountry: "",
        collegeLogo: "",
      });
    } else {
      alert("Form is not valid");
    }
  };

  return (
    <>
      <StudentForm
        student={{ ...student }}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleBlur={handleBlur}
      />
      <StudentIdCardsList students={students} />
    </>
  );
}

export default App;

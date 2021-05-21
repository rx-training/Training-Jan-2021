import React, { Component } from "react";
import uuid from "uuid/dist/v1";
import "./App.css";
import AdmissionForm from "./components/AdmissionForm";
import StudentList from "./components/StudentList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      isEdit: false,
      studentDetails: {
        id: uuid(),
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
    const { name, value } = event.target;
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

    let studentDetails = this.state.studentDetails;
    if (name === "studentImage") {
      studentDetails = {
        ...studentDetails,
        [name]: URL.createObjectURL(event.target.files[0]),
      };
    } else {
      studentDetails = { ...studentDetails, [name]: value };
    }

    this.setState(
      {
        studentDetails,
      },
      () => {
        console.log(this.state);
      }
    );
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
      if (item !== "id") {
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
      console.log("Valid Form");
      this.setState(
        {
          students: [...this.state.students, this.state.studentDetails],
          isEdit: false,
          studentDetails: {
            id: uuid(),
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
        },
        () => console.log(this.state.students)
      );
      console.log(this.state.studentDetails);
    } else {
      console.log("Not Valid Form");
    }
  };

  editStudent = (id) => {
    const filteredStudents = this.state.students.filter(
      (student) => student.id !== id
    );

    const selectedStudent = this.state.students.find(
      (student) => student.id === id
    );

    this.setState({
      students: filteredStudents,
      studentDetails: { ...selectedStudent },
      isEdit: true,
    });

    console.log(selectedStudent);
  };

  deleteStudent = (id) => {
    const filteredStudents = this.state.students.filter(
      (student) => student.id !== id
    );
    this.setState({
      students: filteredStudents,
    });
  };

  render() {
    return (
      <>
        <AdmissionForm
          studentDetails={this.state.studentDetails}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleBlur={this.handleBlur}
          isEdit={this.state.isEdit}
        />

        <StudentList
          students={this.state.students}
          editStudent={this.editStudent}
          deleteStudent={this.deleteStudent}
        />
      </>
    );
  }
}

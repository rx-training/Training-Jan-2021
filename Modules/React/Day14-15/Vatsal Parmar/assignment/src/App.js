import Form from "./components/Form";
import StudentList from "./components/StudentList";
import React, { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    city: "",
    gender: "",
    college: "",
    studentImg: "",
    collegeLogo: "",
  });
  const [showForm, setShowForm] = useState(true);
  const [showStudents, setShowStudents] = useState(false);
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === "studentImg" || e.target.name === "collegeLogo") {
      setValues({
        ...values,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleShow = (x) => {
    if (x === "students") {
      setShowStudents(true);
      setShowForm(false);
    } else if (x === "form") {
      setShowStudents(false);
      setShowForm(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const student = {
      id: students.length + 1,
      firstName: values.firstName,
      lastName: values.lastName,
      city: values.city,
      gender: values.gender,
      college: values.college,
      studentImg: values.studentImg,
      collegeLogo: values.collegeLogo,
    };
    setValues({
      firstName: "",
      lastName: "",
      city: "",
      gender: "",
      college: "",
      studentImg: "",
      collegeLogo: "",
    });
    const updatedStudents = [...students, student];
    setStudents(updatedStudents);
    handleShow("students");
  };

  return (
    <div className="container">
      {showForm && (
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleShow={handleShow}
          student={values}
          students={students}
        />
      )}
      {showStudents && (
        <StudentList handleShow={handleShow} students={students} />
      )}
    </div>
  );
}

import React from "react";
import Student from "./Student";

export default function StudentList(props) {
  const { handleShow, students } = props;

  return (
    <div className="col-md-10 mx-auto my-5">
      <div className="p-3 bg-dark text-white text-center rounded-top">
        <h4 className="text-uppercase">Students List</h4>
      </div>
      <div className="p-5 bg-light rounded-bottom">
        {students.map((item) => (
          <Student key={item.id} student={item} />
        ))}
        <button
          className="mt-3 btn btn-danger"
          onClick={() => handleShow("form")}
        >
          Back To Registration
        </button>
      </div>
    </div>
  );
}

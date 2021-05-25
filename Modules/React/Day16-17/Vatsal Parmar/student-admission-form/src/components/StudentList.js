import React, { useState, useEffect } from "react";
import StudentId from "./StudentId";
import StudentService from "../services/StudentService";

export default function StudentList(props) {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    StudentService.getStudents().then((res) => {
      setStudentList(res.data);
    });
  }, []);

  const handleInfo = (id) => {
    props.history.push(`/student/${id}`);
  };
  let stdNo = studentList.length;
  return (
    <div className="my-5">
      <div className="p-3 bg-dark text-white text-center rounded-top">
        <h4 className="text-uppercase">Students List</h4>
      </div>
      <div className="p-5 bg-light rounded-bottom">
        {stdNo > 0 ? (
          <div className="row">
            {studentList.map((item) => (
              <StudentId
                key={item._id}
                student={item}
                handleInfo={handleInfo}
              />
            ))}
          </div>
        ) : (
          <h1 className="text-danger text-center">Opps! No Students To Show</h1>
        )}
      </div>
    </div>
  );
}

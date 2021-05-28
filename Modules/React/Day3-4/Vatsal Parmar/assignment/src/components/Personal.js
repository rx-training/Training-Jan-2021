import React from "react";

const Personal = ({ id, firstName, lastName, dob }) => {
  return (
    <div className="student">
      <p>
        <span>Student Id :</span> {id}
      </p>
      <p>
        <span>Name :</span> {firstName + " " + lastName}
      </p>
      <p>
        <span>Date Of Birth :</span> {dob}
      </p>
    </div>
  );
};

export default Personal;

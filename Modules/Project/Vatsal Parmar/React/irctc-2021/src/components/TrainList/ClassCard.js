import React from "react";
import { FaRupeeSign } from "react-icons/fa";

const ClassCard = ({
  classData,
  distance,
  selected,
  setSelectedClass,
  setBookingDetails,
  bookingDetails,
  train,
}) => {
  return (
    <div
      className={
        selected
          ? "col-md-3 border border-success bg-warning"
          : "col-md-3 border border-dark"
      }
      style={{ cursor: "pointer" }}
      onClick={() => {
        if (classData.avail_seat > 4) {
          setSelectedClass(classData._id);
          setBookingDetails({ ...bookingDetails, ...train });
        }
      }}
    >
      <strong>{classData.class_type}</strong>
      <p className={classData.avail_seat > 4 ? "text-success" : "text-danger"}>
        <strong>{classData.avail_seat > 4 ? "Available" : "Boocked"}</strong>
      </p>
      <FaRupeeSign />
      <strong>{classData.price * distance}</strong>
    </div>
  );
};

export default ClassCard;

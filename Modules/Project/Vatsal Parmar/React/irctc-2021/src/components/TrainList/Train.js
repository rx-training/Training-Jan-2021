import React, { useContext, useState } from "react";
import ClassCard from "./ClassCard";
import { TrainContext } from "../../context/context";

const Train = (props) => {
  const { train, distance, from, to, travel_class } = props.train;
  const { train_name, train_type, days, _id } = train;
  const { arr_time, name, id } = from;
  const to_time = to.arr_time;
  const to_name = to.name;
  const to_id = to.id;
  const { book, date } = props;
  const trainDetails = {
    train_name: train_name,
    train_type: train_type,
    days: days,
    trainId: _id,
    from: name,
    from_id: id,
    from_time: arr_time,
    to: to_name,
    to_id: to_id,
    to_time: to_time,
    distance: distance,
    booking_date: date,
  };

  const { bookingDetails, setBookingDetails } = useContext(TrainContext);
  const [selectedClass, setSelectedClass] = useState("");
  return (
    <div className="container border border-dark mb-3">
      <div className="row p-2 train-card-secondary">
        <strong>{train_name}</strong>
        <p className="mx-auto">Runs On : {days}</p>
        <strong>{train_type}</strong>
      </div>
      <div className="row p-2">
        <p>
          <strong>START |</strong> {name} | {arr_time}
        </p>
        <p className="mx-auto">To</p>
        <p>
          <strong>STOP | </strong>
          {to_name} | {to_time}
        </p>
      </div>
      <div className="row p-2 mb-2">
        {travel_class.map((item) => {
          return (
            <ClassCard
              key={item._id}
              classData={item}
              train={trainDetails}
              bookingDetails={bookingDetails}
              setBookingDetails={setBookingDetails}
              distance={distance}
              selected={selectedClass === item._id}
              setSelectedClass={setSelectedClass}
            />
          );
        })}
      </div>
      <div className="row train-card-secondary p-2">
        <button
          className="btn btn-warning"
          disabled={selectedClass ? false : true}
          onClick={() => book(selectedClass)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Train;

import React, { useContext, useState, useEffect } from "react";
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
  const { selectedClass, setSelectedClass } = props;
  const result = travel_class.find((item) => item._id === selectedClass);
  const [isDeparted, setIsDeparted] = useState(false);

  //to get journey duration
  function diff(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);

    if (hours < 0) hours = hours + 24;

    return (
      (hours <= 9 ? "0" : "") +
      hours +
      ":" +
      (minutes <= 9 ? "0" : "") +
      minutes
    );
  }

  useEffect(() => {
    var d1 = new Date();
    var d2 = new Date(date);
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);
    if (d1.getTime() === d2.getTime()) {
      const mydate = new Date();
      // console.log(mydate.getHours());
      // console.log(mydate.getMinutes());
      if (mydate.getHours() > parseInt(arr_time.split(":")[0])) {
        setIsDeparted(true);
      }
    }
  }, []);
  //console.log(isDeparted);
  return (
    <div className="container border border-dark mb-3">
      <div className="row p-2 train-card-secondary">
        <strong>{train_name}</strong>
        <div className="mx-auto">
          <p>Runs On : {days.map((days) => ` ${days} `)}</p>
          {isDeparted && (
            <p className="text-danger mb-0 mt-n3">Train Is Already Departed</p>
          )}
        </div>
        <strong>{train_type}</strong>
      </div>
      <div className="row p-2">
        <p>
          <strong>START |</strong> {name} | {arr_time}
        </p>
        <p className="mx-auto">
          Journey Duration : {diff(arr_time, to_time)} hrs
        </p>
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
        {!isDeparted && (
          <button
            className="btn btn-warning"
            disabled={result ? false : true}
            onClick={() => book(selectedClass)}
          >
            Book Now
          </button>
        )}
        {isDeparted && (
          <p className="text-danger">Train Is Already Departed.</p>
        )}
      </div>
    </div>
  );
};

export default Train;

import React, { useContext, useState, useEffect } from "react";
import Train from "./Train";
import { TrainContext } from "../../context/context";
import loadingImg from "../../images/loading.gif";

const List = ({ book, loading }) => {
  const value = useContext(TrainContext);
  const { searchQuery, availTrains } = value;
  const [trainList, setTrainList] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const convertDate = (x) => {
    let rowDate = new Date(x);
    let dd = rowDate.getDate();
    let mm = rowDate.getMonth();
    let yyyy = rowDate.getFullYear();
    if (rowDate.getMonth() < 10) {
      mm = `0${rowDate.getMonth() + 1}`;
    }
    if (rowDate.getDate() < 10) {
      dd = `0${rowDate.getDate()}`;
    }
    const date = `${yyyy}-${mm}-${dd}`;
    return date;
  };
  const sortData = (trains) => {
    let sorted = trains;
    if (searchQuery.date) {
      // sorted = sorted.filter((item) => item.date === searchQuery.date);
      var days = ["Sn", "M", "T", "W", "Th", "F", "S"];
      var dayName = days[new Date(searchQuery.date).getDay()];
      // console.log(dayName);
      let a = [];
      for (let i = 0; i < sorted.length; i++) {
        // const a = data.train.days.find((item) => item.toString() === dayName);
        for (let j = 0; j < sorted[i].train.days.length; j++) {
          if (sorted[i].train.days[j] === dayName) {
            a.push(sorted[i]);
          }
        }
      }
      sorted = a;
    }
    if (searchQuery.travelClass) {
      sorted = sorted.map((item) => {
        item.travel_class = item.travel_class.filter(
          (item) => item.class_type === searchQuery.travelClass
        );
        return item;
      });
    }
    // console.log(sorted);
    return sorted;
  };

  useEffect(() => {
    const trains = availTrains.map((item) => {
      let newDate = convertDate(item.train.date);
      let newTrain = { ...item, date: newDate };
      return newTrain;
    });
    setTrainList(sortData(trains));
  }, [availTrains]);

  const { date, travelClass } = searchQuery;

  return (
    <div className="col-md-9">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <img src={loadingImg} width="70%" alt="Loading..." />
        </div>
      ) : (
        <div>
          {trainList.length > 0 ? (
            <div>
              <div className="container p-2">
                <p>
                  <span>{trainList.length}</span> Results For{" "}
                  <strong>{trainList[0].from.name.toUpperCase()}</strong>
                  <strong> - </strong>
                  <strong>{trainList[0].to.name.toUpperCase()}</strong>
                  <strong> | </strong>
                  <strong>{date}</strong> For Class |{" "}
                  <span>{travelClass ? travelClass : "All Class"}</span>
                </p>
              </div>

              {/* Train List  */}
              <div>
                {trainList.map((train) => {
                  return (
                    <Train
                      train={train}
                      key={train.train._id}
                      book={book}
                      date={date}
                      selectedClass={selectedClass}
                      setSelectedClass={setSelectedClass}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            <h1 className="text-center text-danger my-5">
              No Trains Available!
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default List;

import React from "react";

const StatusList = ({ trainStatus, deleteTrainStatus, editTrainStatus }) => {
  return (
    <table className="table table-hover table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Train Name</th>
          <th scope="col">Class Type</th>
          <th scope="col">Price</th>
          <th scope="col">Avail Seats</th>
          <th scope="col">Booked Seats</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody className="text-capitalize">
        {trainStatus.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item.train.train_name}</td>
              <td>{item.class_type}</td>
              <td>{item.price}</td>
              <td>{item.avail_seat}</td>
              <td>{item.booked_seat}</td>
              <td>
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => editTrainStatus(item._id)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteTrainStatus(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StatusList;

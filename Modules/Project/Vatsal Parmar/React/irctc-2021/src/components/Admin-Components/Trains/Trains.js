import React from "react";

const Trains = ({ trains, deleteTrain, editTrain }) => {
  return (
    <table className="table table-hover table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Train Name</th>
          <th scope="col">Type</th>
          <th scope="col">Update</th>
          {/* <th scope="col">Delete</th> */}
        </tr>
      </thead>
      <tbody className="text-capitalize">
        {trains.map((item, index) => {
          return (
            <tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td>{item.train_name}</td>
              <td>{item.train_type}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => editTrain(item._id)}
                >
                  Update
                </button>
              </td>
              {/* <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTrain(item._id)}
                >
                  Delete
                </button>
              </td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Trains;

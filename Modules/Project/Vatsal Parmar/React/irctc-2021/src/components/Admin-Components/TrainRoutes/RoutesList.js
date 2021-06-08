import React from "react";

const RoutesList = ({ routes, editRoute, deleteRoute }) => {
  return (
    <table className="table table-hover table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Train Name</th>
          <th scope="col">Station Name</th>
          <th scope="col">Stop No</th>
          <th scope="col">Arr Time</th>
          <th scope="col">Depart Time</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody className="text-capitalize">
        {routes.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item.train.train_name}</td>
              <td>{item.station.station_name}</td>
              <td>{item.stop_no}</td>
              <td>{item.arr_time}</td>
              <td>{item.depart_time}</td>
              <td>
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => editRoute(item._id)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteRoute(item._id)}
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

export default RoutesList;

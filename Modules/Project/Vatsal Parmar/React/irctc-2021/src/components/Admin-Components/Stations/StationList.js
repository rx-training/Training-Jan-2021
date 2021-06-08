import React from "react";

const StationList = ({ stations, deleteStation, editStation }) => {
  return (
    <table className="table table-hover table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Station Name</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody className="text-capitalize">
        {stations.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item.station_name}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => editStation(item._id)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteStation(item._id)}
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

export default StationList;

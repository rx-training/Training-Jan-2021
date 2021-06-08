import React from "react";

const Passengers = ({ passengers }) => {
  return (
    <table className="table table-hover table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">FirstName</th>
          <th scope="col">LastName</th>
          <th scope="col">Age</th>
          <th scope="col">Gender</th>
          <th scope="col">Seat No</th>
        </tr>
      </thead>
      <tbody className="text-capitalize">
        {passengers.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.seat_no}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Passengers;

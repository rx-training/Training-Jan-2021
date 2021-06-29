import React from "react";
import { FaRupeeSign } from "react-icons/fa";

const Passengers = ({ passengers, distance, unit_price }) => {
  return (
    <table className="table table-hover table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">FirstName</th>
          <th scope="col">LastName</th>
          <th scope="col">Age</th>
          <th scope="col">Gender</th>
          <th scope="col">Price</th>
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
              <td>
                <FaRupeeSign /> {unit_price * distance}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Passengers;

import React from "react";

const UserList = ({ users, deleteUser }) => {
  return (
    <table className="table table-hover table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email Id</th>
          <th scope="col">Mobile No</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => {
          return (
            <tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(item._id)}
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

export default UserList;

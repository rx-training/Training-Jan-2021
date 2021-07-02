import React from "react";

export default function UserRow({ user, index, deleteUser }) {
  const { customerName, email, contactNumber, _id: id } = user;
  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="text-capitalize">{customerName}</td>
      <td>{email}</td>
      <td>{contactNumber}</td>
      <td></td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={() => {
            deleteUser(id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

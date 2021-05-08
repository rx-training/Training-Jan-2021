import React from "react";

export default function Button({ handleDelete }) {
  return (
    <div>
      <button
        onClick={handleDelete}
        className="btn btn-sm btn-danger mt-3"
        type="button"
      >
        Delete Book
      </button>
    </div>
  );
}

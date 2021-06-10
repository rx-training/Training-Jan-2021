import React from "react";

export default function CategoryRow({
  category,
  index,
  deleteCategory,
  updateCategory,
}) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td className="text-capitalize">{category.categoryName}</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={() => updateCategory(category._id, category.categoryName)}
        >
          Update
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={() => deleteCategory(category._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

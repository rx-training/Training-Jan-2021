import React from "react";

export default function SubCategoryRow({
  subCategory,
  index,
  deleteCategory,
  updateCategory,
}) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td className="text-capitalize">{subCategory.subCategoryName}</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={() =>
            updateCategory(subCategory._id, subCategory.subCategoryName)
          }
        >
          Update
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={() => deleteCategory(subCategory._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

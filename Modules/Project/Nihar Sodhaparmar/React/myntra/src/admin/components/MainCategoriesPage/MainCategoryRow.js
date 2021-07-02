import React from "react";

export default function SubCategoryRow({
  mainCategory,
  index,
  deleteCategory,
  updateCategory,
}) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td className="text-capitalize">{mainCategory.mainCategoryName}</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={() =>
            updateCategory(mainCategory._id, mainCategory.mainCategoryName)
          }
        >
          Update
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={() => deleteCategory(mainCategory._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

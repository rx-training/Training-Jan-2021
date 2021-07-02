import React from "react";

export default function CategoryRow({
  category,
  index,
  deleteCategory,
  updateCategory,
  openCategoryToBagModal,
  deleteCategoryToBag,
}) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td className="text-capitalize">
        {category.mainCategory.mainCategoryName}
      </td>
      <td className="text-capitalize">{category.categoryName}</td>
      <td>
        {category.inCategoriesToBag === false ? (
          <button
            type="button"
            className="btn btn-sm btn-success"
            style={{ width: "80px" }}
            onClick={() =>
              openCategoryToBagModal(category.categoryName, category._id)
            }
          >
            Add
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-sm btn-danger"
            style={{ width: "80px" }}
            onClick={() => deleteCategoryToBag(category._id)}
          >
            Remove
          </button>
        )}
      </td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={() =>
            updateCategory(
              category._id,
              category.categoryName,
              category.mainCategory._id,
              category.inCategoriesToBag
            )
          }
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

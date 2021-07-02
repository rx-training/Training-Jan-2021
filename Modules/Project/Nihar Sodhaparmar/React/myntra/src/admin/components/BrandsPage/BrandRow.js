import React from "react";

export default function BrandRow({ brand, index, updateBrand, deleteBrand }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td className="text-capitalize">{brand.mainCategory.mainCategoryName}</td>
      <td className="text-capitalize">{brand.category.categoryName}</td>
      <td className="text-capitalize">{brand.brandName}</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={() =>
            updateBrand(
              brand._id,
              brand.mainCategory._id,
              brand.category._id,
              brand.brandName
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
          onClick={() => deleteBrand(brand._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

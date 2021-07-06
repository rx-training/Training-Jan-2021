import React from "react";
import { Link } from "react-router-dom";

export default function ProductRow({
  product,
  index,
  viewProductBtnClick,
  deleteProduct,
}) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td className="text-capitalize line-1">{product.productName}</td>
      <td className="text-capitalize">
        {product.mainCategory.mainCategoryName}
      </td>
      <td className="text-capitalize">{product.category.categoryName}</td>
      <td className="text-capitalize">{product.brand.brandName}</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-success"
          onClick={() => viewProductBtnClick(product._id)}
        >
          View
        </button>
      </td>
      <td>
        <Link to={`/dashboard/update-product/${product._id}`}>
          <button type="button" className="btn btn-sm btn-primary">
            Update
          </button>
        </Link>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={() => deleteProduct(product._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

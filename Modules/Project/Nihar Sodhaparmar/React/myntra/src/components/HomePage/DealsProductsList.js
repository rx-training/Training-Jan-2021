import React from "react";
import DealsProduct from "./DealsProduct";

export default function DealsProductsList({ products }) {
  if (products.length < 1) {
    return (
      <div className="container-fluid">
        <div className="error-container my-5 text-center p-5 mx-auto">
          <h1 className="text-capitalize text-center ">
            no products available
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid mb-5">
      <div className="row">
        {products.map((product) => {
          return <DealsProduct key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
}

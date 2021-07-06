import React from "react";
import OrderItem from "./OrderItem";

export default function Order({
  products,
  totalPrice,
  totalItems,
  orderDate,
  id,
}) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  orderDate = new Date(orderDate);

  return (
    <li className="list-group-item p-4 my-4 rounded order-list-item">
      <div>
        <ul className="list-group list-group-flush">
          {products.map((product) => {
            return <OrderItem product={product} key={product._id} />;
          })}

          <li className="list-group-item">
            <div className="row my-2">
              <div className="col-md-1 col-lg-1"></div>
              <div className="col-sm col-md-3 col-lg-2"></div>
              <div className="col-sm col-md-8 col-lg-8 mx-auto wishlist-and-bag-content">
                <div className="h6 font-weight-bold">
                  Total Items : {totalItems}
                </div>
                <div className="h6 font-weight-bold">
                  Order Total : Rs. {totalPrice}
                </div>
                <div className="h6 font-weight-bold">
                  Order Date :{" "}
                  {[
                    pad(orderDate.getDate()),
                    pad(orderDate.getMonth() + 1),
                    orderDate.getFullYear(),
                  ].join("/")}
                </div>
                <div className="h6 font-weight-bold">Order # : {id}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
}

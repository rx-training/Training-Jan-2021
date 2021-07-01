import React, { useEffect, useState } from "react";
import OrderService from "../services/OrderService";
import { getToken, getUserId, removeUserSession } from "../utils/Storage";
import EmptyBanner from "../components/EmptyBanner";
import Loading from "../components/Loading";
import Order from "../components/OrdersPage/Order";
import Navbar from "../components/Navbar";

export default function OrdersPage(props) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        let res = await OrderService.getOrdersByCustomerId(
          getUserId(),
          getToken()
        );
        let orders = res.data;
        setOrders(orders);
        setLoading(false);
      } catch (error) {
        if (error.response.status === 401) {
          props.history.push("/login");
          removeUserSession();
        }
        setOrders([]);
        setLoading(false);
        console.error(error);
      }
    }
    getData();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  }

  if (orders.length < 1) {
    return (
      <>
        <Navbar />
        <EmptyBanner title="no orders yet" />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="text-center pt-4 category-header text-capitalize">
          orders
        </div>
        <div className="container mt-2 mb-5" style={{ width: "fit-content" }}>
          <ul className="list-group">
            {orders.map((order) => {
              return (
                <Order
                  products={order.products}
                  key={order._id}
                  id={order._id}
                  totalPrice={order.totalPrice}
                  totalItems={order.totalItems}
                  orderDate={order.orderDate}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

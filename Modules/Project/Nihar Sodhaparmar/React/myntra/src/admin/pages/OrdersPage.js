import React, { useState } from "react";
import Navbar from "../../admin/components/Navbar";
import Loading from "../../components/Loading";
import EmptyBanner from "../components/EmptyBanner";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { useEffect } from "react";
import { getToken, removeUserSession } from "../../utils/Storage";
import OrderService from "../../services/OrderService";
import Order from "../../admin/components/UserOrdersPage/Order";

export default function OrdersPage(props) {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  async function getData() {
    try {
      setLoading(true);

      let orders = await OrderService.getAllOrders(getToken());
      setOrders(orders.data);
      console.log(orders.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response.status === 403 || error.response.status === 401) {
        props.history.push("/dashboard/login");
        removeUserSession();
      }
    }
  }

  useEffect(() => {
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
        <div>
          <Link to="/dashboard" className="text-capitalize back-btn">
            <MdKeyboardBackspace className="back-btn-arrow" />
          </Link>
        </div>
        <EmptyBanner title="no orders yet" />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div>
        <Link to="/dashboard" className="text-capitalize back-btn">
          <MdKeyboardBackspace className="back-btn-arrow" />
        </Link>
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
    </>
  );
}

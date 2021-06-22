import React, { useEffect, useState } from "react";
import BagService from "../services/BagService";
import OrderService from "../services/OrderService";
import { getToken, getUserId, removeUserSession } from "../Utils/Storage";
import EmptyBanner from "../components/EmptyBanner";
import BagItem from "../components/BagPage/BagItem";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

export default function BagPage(props) {
  const [bagItems, setBagItems] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    try {
      setLoading(true);
      let res = await BagService.getBagItemsByCustomerId(
        getUserId(),
        getToken()
      );
      let items = res.data.map((item) => {
        let bagItemId = item._id;
        let newItem = {
          ...item.product,
          bagItemId,
          size: item.size,
          quantity: item.quantity,
        };
        return newItem;
      });
      setBagItems(items);
      setLoading(false);
    } catch (error) {
      if (error.response.status === 401) {
        props.history.push("/login");
        removeUserSession();
      }
      setBagItems([]);
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const removeFromBag = async (bagItemId) => {
    try {
      setLoading(true);
      await BagService.deleteBagItem(bagItemId, getToken());
      setLoading(false);
      getData();
    } catch (error) {
      if (error.response.status === 401) {
        props.history.push("/login");
        removeUserSession();
      }
      console.error(error);
    }
  };

  const updateBagItem = async (bagItemId, productId, size, quantity) => {
    try {
      setLoading(true);
      if (quantity < 1) {
        removeFromBag(bagItemId);
      } else {
        let data = {
          customer: getUserId(),
          product: productId,
          size,
          quantity,
        };
        await BagService.updateBagItem(bagItemId, data, getToken());
      }

      setLoading(false);
      getData();
    } catch (error) {
      if (error.response.status === 401) {
        props.history.push("/login");
        removeUserSession();
      }
      console.error(error);
    }
  };

  const placeOrder = async () => {
    try {
      setLoading(true);
      let tempProducts = bagItems.map((product) => {
        let newProduct = {
          product: product._id,
          size: product.size,
          quantity: product.quantity,
        };

        return newProduct;
      });
      let data = {
        customer: getUserId(),
        products: tempProducts,
      };
      await OrderService.addOrder(data, getToken());
      setLoading(false);
      getData();
      props.history.push("/orders");
    } catch (error) {
      setLoading(false);
      if (error.response.status === 401) {
        props.history.push("/login");
        removeUserSession();
      }
      console.error(error);
    }
  };

  let total = 0;
  let totalItems = 0;

  if (bagItems.length >= 1) {
    bagItems.map((product) => {
      total += parseInt(product.quantity) * parseFloat(product.price);
      totalItems = product.quantity;
      return null;
    });
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  }

  if (bagItems.length < 1) {
    return (
      <>
        <Navbar />
        <EmptyBanner title="bag is empty" />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="text-center pt-4 category-header text-capitalize">
          bag items
        </div>
        <div className="container my-5" style={{ width: "fit-content" }}>
          <ul className="list-group">
            {bagItems.map((item, index) => {
              return (
                <BagItem
                  key={index}
                  item={item}
                  removeFromBag={removeFromBag}
                  updateBagItem={updateBagItem}
                />
              );
            })}
          </ul>
        </div>
        <div className="my-5 text-center">
          <div className="h2">Total Items : {totalItems}</div>
          <div className="h2 mt-3">Total : Rs. {total.toFixed(2)}</div>
          <div>
            <button
              className="btn btn-pink btn-lg text-capitalize mt-3"
              onClick={placeOrder}
            >
              Place Your Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

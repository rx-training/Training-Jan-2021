import React, { useEffect, useState } from "react";
import WishlistService from "../services/WishlistServie";
import BagService from "../services/BagService";
import { getUserId, getToken, removeUserSession } from "../utils/Storage";
import WishlistItem from "../components/WishlistPage/WishlistItem";
import EmptyBanner from "../components/EmptyBanner";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { NotificationManager } from "react-notifications";

export default function WishlistPage(props) {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sizeError, setSizeError] = useState({});

  async function getData() {
    try {
      setLoading(true);
      let res = await WishlistService.getWishlistItemsByCustomerId(
        getUserId(),
        getToken()
      );
      let items = res.data.map((item) => {
        let wishlistItemId = item._id;
        let newItem = { ...item.product, wishlistItemId };
        return newItem;
      });
      setWishlistItems(items);
      setLoading(false);
    } catch (error) {
      if (error.response.status === 401) {
        props.history.push("/login");
        removeUserSession();
      }
      setWishlistItems([]);
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const deleteWishlistItem = async (wishlistItemId) => {
    if (window.confirm("Are you sure you want to remove item from wishlist?")) {
      try {
        setLoading(true);
        await WishlistService.deleteWishlistItem(wishlistItemId, getToken());
        setLoading(false);
        NotificationManager.error("Item removed from wishlist", "", 2000);
        getData();
      } catch (error) {
        if (error.response.status === 401) {
          props.history.push("/login");
          removeUserSession();
        }
        console.error(error);
      }
    }
  };

  const addToBag = async (wishlistItemId, size, quantity) => {
    if (size === "" || size === null) {
      setSizeError({ ...sizeError, [wishlistItemId]: "Please select a size" });
      return;
    }

    try {
      setLoading(true);
      await BagService.addWishlistToBag(
        wishlistItemId,
        { size, quantity },
        getToken()
      );
      setLoading(false);
      NotificationManager.success("Item added in bag", "", 2000);
      getData();
    } catch (error) {
      if (error.response.status === 401) {
        props.history.push("/login");
        removeUserSession();
      }
      console.error(error);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  }

  if (wishlistItems.length < 1) {
    return (
      <>
        <Navbar />
        <EmptyBanner title="wishlist is empty" />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="text-center pt-4 category-header text-capitalize">
          wishlist items
        </div>
        <div className="container my-4" style={{ width: "fit-content" }}>
          <ul className="list-group">
            {wishlistItems.map((item, index) => {
              return (
                <WishlistItem
                  key={index}
                  item={item}
                  deleteWishlistItem={deleteWishlistItem}
                  addToBag={addToBag}
                  sizeError={sizeError}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

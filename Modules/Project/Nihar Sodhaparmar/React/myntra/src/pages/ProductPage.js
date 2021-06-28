import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import BagService from "../services/BagService";
import WishlistService from "../services/WishlistServie";
import { Link } from "react-router-dom";
import ProductImage from "../components/ProductPage/ProductImage";
import ProductInfo from "../components/ProductPage/ProductInfo";
import Loading from "../components/Loading";
import { getToken, getUserId, removeUserSession } from "../utils/Storage";
import Navbar from "../components/Navbar";
import { NotificationManager } from "react-notifications";

export default function ProductPage(props) {
  const [id] = useState(props.match.params.id);
  const [isProductAvaiable, setIsProductAvailable] = useState(false);
  const [product, setProduct] = useState({ imgurls: [] });
  const [loading, setLoading] = useState(false);
  const [isInBag, setIsInBag] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [sizeError, setSizeError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        var res = await ProductService.getProductById(id);
        if (res.data) {
          setProduct(res.data);
          setIsProductAvailable(true);
        } else {
          setProduct({});
          setIsProductAvailable(false);
        }

        let token = getToken();
        if (token) {
          let id = getUserId();
          let bagData = await BagService.getBagItemsByCustomerId(id, token);
          let inBag = false;

          for (let p of bagData.data) {
            if (p.product._id === res.data._id) {
              inBag = true;
            }
          }
          setIsInBag(inBag);

          let wishlistData = await WishlistService.getWishlistItemsByCustomerId(
            id,
            token
          );
          let inWishlist = false;

          for (let p of wishlistData.data) {
            if (p.product._id === res.data._id) {
              inWishlist = true;
            }
          }
          setIsInWishlist(inWishlist);
        }

        setLoading(false);
      } catch (error) {
        if (error.response.status === 401) {
          props.history.push("/login");
          removeUserSession();
        }
        setLoading(false);
        setProduct({});
        setIsProductAvailable(false);
        console.error(error.message);
      }
    }

    getData();
  }, [id, isInWishlist, isInBag]);

  const addToBag = async (productId, size, quantity) => {
    if (size === "" || size === null) {
      setSizeError("Please select a size");
      return;
    }
    try {
      let data = {
        customer: getUserId(),
        product: productId,
        size,
        quantity,
      };
      await BagService.addBagItem(data, getToken());
      setIsInBag(true);
      setSizeError("");
      NotificationManager.success("Item added in bag", "", 2000);
    } catch (error) {
      if (error.response.status === 401) {
        props.history.push("/login");
        removeUserSession();
      }
      console.error(error);
    }
  };

  const addToWishlist = async (productId) => {
    try {
      await WishlistService.addWishlistItem(getUserId(), productId, getToken());
      setIsInWishlist(true);
      NotificationManager.success("Item added in wishlist", "", 2000);
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

  if (!isProductAvaiable) {
    return (
      <>
        <Navbar />
        <div className="container-fluid py-5">
          <div className="text-center mx-auto error-container p-5">
            <div className="rounded px-5">
              <h1 className="font-weight-bold">404</h1>
              <div className="underline"></div>
              <h2 className="text-capitalize my-4 font-weight-bold">
                product not found
              </h2>
              <Link
                to="/home"
                className="btn btn-pink btn-lg text-capitalize my-2"
              >
                back to home
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="container-fluid pt-4">
          <div className="row">
            {product.imgurls.map((img, index) => {
              return <ProductImage key={index} img={img} />;
            })}
          </div>
          <ProductInfo
            product={product}
            isInBag={isInBag}
            isInWishlist={isInWishlist}
            addToBag={addToBag}
            addToWishlist={addToWishlist}
            sizeError={sizeError}
          />
        </div>
      </>
    );
  }
}

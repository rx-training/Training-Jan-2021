import React, { useState, useEffect } from "react";
import OfferImage from "../components/HomePage/OfferImage";
import Carousel from "../components/HomePage/Carousel";
import Title from "../components/HomePage/Title";
import DealsProductsList from "../components/HomePage/DealsProductsList";
import CategoriesList from "../components/HomePage/CategoriesList";
import ProductService from "../services/ProductService";
import CategoriesToBagService from "../services/CategoriesToBagService";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { isAdmin } from "../utils/Storage";

export default function HomePage(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoriesToBag, setCategoriesToBag] = useState([]);

  function sortProducts(field) {
    return function (a, b) {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      }
      return 0;
    };
  }

  async function getData() {
    try {
      setLoading(true);

      let res = await ProductService.getAllProducts();
      const products = res.data;
      if (products.length < 1) {
        setProducts([]);
      } else {
        products.sort(sortProducts("offer"));
        var newProducts = products.splice(0, 6);
        setProducts(newProducts);
      }

      let categoriesToBag =
        await CategoriesToBagService.getAllCategoriesToBag();
      setCategoriesToBag(categoriesToBag.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  }

  useEffect(() => {
    if (isAdmin()) {
      props.history.push("/dashboard/products");
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

  return (
    <>
      <Navbar />

      {/* ***** OFFER IMAGE ***** */}
      <OfferImage image="./images/republic-offer.gif" />

      {/* ***** CAROUSEL ***** */}
      <Carousel images={["./images/wrogn-img.jpg", "./images/saree-img.jpg"]} />

      {/* ***** DEALS OF THE DAY ***** */}
      <Title title="deals of the day" />
      <DealsProductsList products={products} />

      {/* ***** CATEGORIES TO BAG ***** */}
      <Title title="categories to bag" />
      <CategoriesList categoriesToBag={categoriesToBag} />
    </>
  );
}

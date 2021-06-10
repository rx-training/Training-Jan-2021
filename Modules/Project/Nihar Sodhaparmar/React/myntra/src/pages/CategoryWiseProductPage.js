import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

export default function CategoryWiseProductPage(props) {
  const [category] = useState(props.match.params.category);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        let res = await ProductService.getAllProducts();
        const products = res.data;
        if (products.length < 1) {
          setProducts([]);
        } else {
          const categoryProducts = products.filter((product) => {
            return (
              product.category.categoryName.toLowerCase() ===
              category.toLowerCase()
            );
          });
          setProducts(categoryProducts);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error.message);
      }
    }

    getData();
  }, [category]);

  if (loading) {
    return <Loading />;
  }

  if (products.length < 1) {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <div className="text-center pt-4 category-header text-uppercase">
            {category}
          </div>
          <div className="error-container my-5 text-center p-5 mx-auto">
            <h1 className="text-capitalize text-center ">
              no products available
            </h1>
            <Link to="/" className="btn btn-pink btn-lg text-capitalize mt-3">
              back to home
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="text-center pt-4 category-header text-uppercase">
          {category}
        </div>
        <div className="row py-5">
          {products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import ProductService from "../services/ProductService";
import { Link } from "react-router-dom";
import Product from "../components/Product";

export default function SubCategoryWiseProductPage(props) {
  const subCategory = props.match.params.subCategory;
  const category = props.match.params.category;
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        let products = await ProductService.getAllProducts();
        products = products.data;
        products = products.filter(
          (product) =>
            product.category.categoryName.toLowerCase() ===
              category.toLowerCase() &&
            product.subCategory.subCategoryName.toLowerCase() ===
              subCategory.toLowerCase()
        );

        setProducts(products);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }

    getData();
  }, [category, subCategory]);

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

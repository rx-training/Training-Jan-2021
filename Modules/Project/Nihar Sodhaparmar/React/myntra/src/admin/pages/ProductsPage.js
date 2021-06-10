import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaPlus } from "react-icons/fa";
// import CategoryService from "../services/CategoryService";
// import BrandService from "../services/BrandService";
import ProductService from "../../services/ProductService";
import Loading from "../../components/Loading";
import EmptyBanner from "../components/EmptyBanner";
import Product from "../components/Product";

export default function ProductsPage(props) {
  const [loading, setLoading] = useState(false);
  // const [categories, setCategories] = useState([]);
  // const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        // let categories = await CategoryService.getAllCategories();
        // setCategories(categories.data);

        // let brands = await BrandService.getAllBrands();
        // setBrands(brands.data);

        let proucts = await ProductService.getAllProducts();
        setProducts(proucts.data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }

    getData();
  }, []);
  const addProductBtnClick = () => {
    props.history.push("/dashboard/add-product");
  };

  if (loading) {
    return <Loading />;
  }

  if (products.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container pt-5">
          <button
            className="btn login-btn btn-block add-category-btn mb-4"
            onClick={addProductBtnClick}
          >
            <FaPlus style={{ fontSize: "13.5px" }} /> Add Product
          </button>
        </div>
        <EmptyBanner title="no products available" />{" "}
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container-fluid py-5">
        <div className="container">
          <button
            className="btn login-btn btn-block add-category-btn mb-4"
            onClick={addProductBtnClick}
          >
            <FaPlus style={{ fontSize: "13.5px" }} /> Add Product
          </button>
        </div>

        <div className="row my-5">
          {products.map((product) => {
            return <Product product={product} key={product._id} />;
          })}
        </div>
      </div>
    </>
  );
}

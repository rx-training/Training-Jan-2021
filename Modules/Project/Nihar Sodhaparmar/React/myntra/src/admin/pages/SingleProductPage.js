import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductService from "../../services/ProductService";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ProductImage from "../components/SingleProductPage/ProductImage";
import ProductInfo from "../components/SingleProductPage/ProductInfo";
import { getToken, removeUserSession } from "../../utils/Storage";
import { MdKeyboardBackspace } from "react-icons/md";
import { NotificationManager } from "react-notifications";

export default function SingleProductPage(props) {
  const [id] = useState(props.match.params.id);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [isProductAvaiable, setIsProductAvailable] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        let res = await ProductService.getProductById(id);
        if (res.data) {
          setProduct(res.data);
          setIsProductAvailable(true);
        } else {
          setProduct({});
          setIsProductAvailable(false);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }

    getData();
  }, [id]);

  const updateProduct = (id) => {
    props.history.push(`/dashboard/update-product/${id}`);
  };

  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure, you want to delete?")) {
      try {
        setLoading(true);
        await ProductService.deleteProduct(id, getToken());
        setLoading(false);
        NotificationManager.error("Product deleted successfully", "", 2000);
        props.history.push("/dashboard/products");
      } catch (error) {
        console.error(error);
        if (error.response.status === 403 || error.response.status === 401) {
          props.history.push("/dashboard/login");
          removeUserSession();
        } else if (error.response.status === 409) {
          alert("Product is not allowed to delete");
        }
        setLoading(false);
      }
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
    const { productName, brand, category, imgurls, mainCategory } = product;
    return (
      <>
        <Navbar />
        <div>
          <Link to="/dashboard/products" className="text-capitalize back-btn">
            <MdKeyboardBackspace className="back-btn-arrow" />
          </Link>
        </div>
        <div className="container mb-5">
          <div className="margin-left-sm">
            <div className="text-center pt-4 h2 text-capitalize">
              {productName}
            </div>
            <div className="text-center h4 text-muted text-capitalize">
              {brand.brandName} {category.categoryName}{" "}
              {mainCategory.mainCategoryName}
            </div>
          </div>

          <div className="row product-images-container">
            {imgurls.map((image, index) => {
              return <ProductImage image={image} key={index} />;
            })}
          </div>

          <ProductInfo product={product} />

          <div className="row mt-3 pt-5 margin-left-sm">
            <div className="col-md-4 mx-auto">
              <button
                className="btn btn-block btn-primary"
                onClick={() => updateProduct(id)}
              >
                UPDATE PRODUCT
              </button>
            </div>
            <div className="col-md-4 mx-auto">
              <button
                className="btn btn-block btn-danger margin-on-small-btn"
                onClick={() => {
                  deleteProduct(id);
                }}
              >
                DELETE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

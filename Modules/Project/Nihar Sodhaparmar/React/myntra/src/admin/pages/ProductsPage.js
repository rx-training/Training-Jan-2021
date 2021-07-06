import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaPlus } from "react-icons/fa";
// import CategoryService from "../services/CategoryService";
// import BrandService from "../services/BrandService";
import ProductService from "../../services/ProductService";
import Loading from "../../components/Loading";
import EmptyBanner from "../components/EmptyBanner";
import ProductRow from "../components/ProductsPage/ProductRow";
import MainCategoryService from "../../services/MainCategoryService";
import CategoryService from "../../services/CategoryService";
import BrandService from "../../services/BrandService";
import { getToken, removeUserSession } from "../../utils/Storage";
import { NotificationManager } from "react-notifications";

export default function ProductsPage(props) {
  const [loading, setLoading] = useState(false);
  // const [categories, setCategories] = useState([]);
  // const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [filterData, setFilterData] = useState({
    productName: "",
    mainCategory: "select",
    category: "select",
    brand: "select",
  });

  async function getData() {
    try {
      setLoading(true);
      // let categories = await CategoryService.getAllCategories();
      // setCategories(categories.data);

      // let brands = await BrandService.getAllBrands();
      // setBrands(brands.data);

      let proucts = await ProductService.getAllProducts();
      setProducts(proucts.data);
      setData(proucts.data);

      let mainCategories = await MainCategoryService.getAllMainCategories();
      setMainCategories(mainCategories.data);

      let categories = await CategoryService.getAllCategories();
      setCategories(categories.data);

      let brands = await BrandService.getAllBrands();
      setBrands(brands.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // ********** MAIN CATEGORY CHANGE FUNCTION **********
  const mainCategoryChange = (event) => {
    let value = event.target.value;

    if (value !== "select") {
      let filteredCategories = categories.filter(
        (category) => category.mainCategory._id === value
      );

      setFilteredCategories(filteredCategories);
      setFilteredBrands([]);

      let filteredProducts = products.filter(
        (product) => product.mainCategory._id === value
      );

      if (productName.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
          let tempSearch = productName.toLowerCase();
          let tempTitle = product.productName
            .toLowerCase()
            .slice(0, tempSearch.length);
          console.log(tempSearch, tempTitle);
          if (tempSearch === tempTitle) {
            return product;
          }

          return null;
        });
      }

      setData(filteredProducts);
      setCurrentPage(1);

      setFilterData({
        ...filterData,
        mainCategory: value,
        category: "select",
        brand: "select",
      });
    } else {
      setFilteredCategories([]);
      setFilteredBrands([]);
      let filteredProducts = products;
      if (productName.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
          let tempSearch = productName.toLowerCase();
          let tempTitle = product.productName
            .toLowerCase()
            .slice(0, tempSearch.length);
          console.log(tempSearch, tempTitle);
          if (tempSearch === tempTitle) {
            return product;
          }

          return null;
        });
      }
      setData(filteredProducts);
      setCurrentPage(1);
      setFilterData({
        ...filterData,
        mainCategory: "select",
        category: "select",
        brand: "select",
      });
    }
  };

  const { productName, mainCategory, category, brand } = filterData;

  // ********** CATEGORY CHANGE FUNCTION **********
  const categoryChange = (event) => {
    let value = event.target.value;

    if (value !== "select") {
      let filteredBrands = brands.filter(
        (brand) => brand.category._id === value
      );

      setFilteredBrands(filteredBrands);

      let filteredProducts = products.filter(
        (product) => product.category._id === value
      );

      if (productName.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
          let tempSearch = productName.toLowerCase();
          let tempTitle = product.productName
            .toLowerCase()
            .slice(0, tempSearch.length);
          console.log(tempSearch, tempTitle);
          if (tempSearch === tempTitle) {
            return product;
          }

          return null;
        });
      }

      setData(filteredProducts);
      setCurrentPage(1);

      setFilterData({
        ...filterData,
        category: value,
        brand: "select",
      });
    } else {
      setFilteredBrands([]);
      let filteredProducts = products.filter(
        (product) => product.mainCategory._id === mainCategory
      );

      if (productName.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
          let tempSearch = productName.toLowerCase();
          let tempTitle = product.productName
            .toLowerCase()
            .slice(0, tempSearch.length);
          console.log(tempSearch, tempTitle);
          if (tempSearch === tempTitle) {
            return product;
          }

          return null;
        });
      }

      setData(filteredProducts);
      setCurrentPage(1);
      setFilterData({
        ...filterData,
        category: "select",
        brand: "select",
      });
    }
  };

  const handleFilterDataChange = (event) => {
    const { name, value } = event.target;

    let filteredProducts = products;

    if (name === "brand") {
      if (value !== "select") {
        filteredProducts = filteredProducts.filter(
          (product) => product.brand._id === value
        );
      }

      if (productName.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
          let tempSearch = productName.toLowerCase();
          let tempTitle = product.productName
            .toLowerCase()
            .slice(0, tempSearch.length);
          console.log(tempSearch, tempTitle);
          if (tempSearch === tempTitle) {
            return product;
          }

          return null;
        });
      }

      if (mainCategory !== "select") {
        filteredProducts = filteredProducts.filter(
          (product) => product.mainCategory._id === mainCategory
        );
      }

      if (category !== "select") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category._id === category
        );
      }
    }

    if (name === "productName") {
      if (productName.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
          let tempSearch = value.toLowerCase();
          let tempTitle = product.productName
            .toLowerCase()
            .slice(0, tempSearch.length);
          console.log(tempSearch, tempTitle);
          if (tempSearch === tempTitle) {
            return product;
          }

          return null;
        });
      }

      if (mainCategory !== "select") {
        filteredProducts = filteredProducts.filter(
          (product) => product.mainCategory._id === mainCategory
        );
      }

      if (category !== "select") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category._id === category
        );
      }

      if (brand !== "select") {
        filteredProducts = filteredProducts.filter(
          (product) => product.brand._id === brand
        );
      }
    }

    setData(filteredProducts);
    setCurrentPage(1);
    setFilterData({ ...filterData, [name]: value });
  };

  const addProductBtnClick = () => {
    props.history.push("/dashboard/add-product");
  };

  const viewProductBtnClick = (id) => {
    props.history.push(`/dashboard/products/${id}`);
  };

  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure, you want to delete?")) {
      try {
        setLoading(true);
        await ProductService.deleteProduct(id, getToken());
        setLoading(false);
        NotificationManager.error("Product deleted successfully", "", 2000);
        getData();
        setCurrentPage(1);
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

  // *************** PAGINATION ***************
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [pageNumberLimit] = useState(25);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(25);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          onClick={() => handleClick(number)}
          className={`page-item  ${currentPage === number ? "active" : null}`}
        >
          <div className="page-link">{number}</div>
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextBtnClick = () => {
    if (currentPage !== pages[pages.length - 1]) {
      setCurrentPage(currentPage + 1);

      if (currentPage + 1 > maxPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  };

  const handlePreviousBtnClick = () => {
    if (currentPage !== pages[0]) {
      setCurrentPage(currentPage - 1);

      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li className="page-item">
        <span className="page-link" onClick={handleNextBtnClick}>
          &hellip;
        </span>
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= pageNumberLimit) {
    pageDecrementBtn = (
      <li className="page-item">
        <span className="page-link" onClick={handlePreviousBtnClick}>
          &hellip;
        </span>
      </li>
    );
  }
  // *************** END OF PAGINATION ***************

  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
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
        <EmptyBanner title="no products available" />
      </>
    );
  }

  return (
    <>
      <Navbar />
      {/* <div className="text-center text-danger h3">* sign</div> */}
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col col-md-3 col-lg-2">
            <button
              className="btn add-btn btn-block mt-2"
              onClick={addProductBtnClick}
            >
              <FaPlus style={{ fontSize: "13.5px" }} /> Add Product
            </button>

            <div>
              <div className="form-group mt-4">
                <label
                  className="form-control-label mb-1"
                  htmlFor="productName"
                >
                  Product Name
                </label>
                <input
                  type="search"
                  className="form-control"
                  id="productName"
                  name="productName"
                  value={productName}
                  onChange={handleFilterDataChange}
                />
              </div>

              <div className="form-group mt-3">
                <label
                  className="form-control-label mb-1"
                  htmlFor="mainCategory"
                >
                  Maincategory
                </label>
                <select
                  className="form-control"
                  name="mainCategory"
                  id="mainCategory"
                  value={mainCategory}
                  onChange={mainCategoryChange}
                >
                  <option value="select"> Select Maincategory</option>
                  {mainCategories.map((mainCategory) => {
                    return (
                      <option
                        value={mainCategory._id}
                        className="text-capitalize"
                        key={mainCategory._id}
                      >
                        {mainCategory.mainCategoryName}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="form-group mt-3">
                <label className="form-control-label mb-1" htmlFor="category">
                  Category
                </label>
                <select
                  className="form-control"
                  name="category"
                  id="category"
                  value={category}
                  onChange={categoryChange}
                >
                  <option value="select"> Select Category</option>
                  {filteredCategories.map((category) => {
                    return (
                      <option
                        value={category._id}
                        className="text-capitalize"
                        key={category._id}
                      >
                        {category.categoryName}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="form-group mt-3">
                <label className="form-control-label mb-1" htmlFor="brand">
                  Brand
                </label>
                <select
                  className="form-control"
                  name="brand"
                  id="brand"
                  value={brand}
                  onChange={handleFilterDataChange}
                >
                  <option value="select"> Select Brand</option>
                  {filteredBrands.map((brand) => {
                    return (
                      <option
                        value={brand._id}
                        className="text-capitalize"
                        key={brand._id}
                      >
                        {brand.brandName}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="col col-md-9 col-lg-10">
            <table className="table table-hover table-bordered text-center bg-white table-striped">
              <thead className="thead-dark">
                <tr>
                  <th className="text-spacing">No.</th>
                  <th className="text-spacing">Product Name</th>
                  <th className="text-spacing">Maincategory</th>
                  <th className="text-spacing">Category</th>
                  <th className="text-spacing">Brand</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((product, index) => {
                  return (
                    <ProductRow
                      key={product._id}
                      product={product}
                      index={(currentPage - 1) * itemsPerPage + index}
                      viewProductBtnClick={viewProductBtnClick}
                      deleteProduct={deleteProduct}
                    />
                  );
                })}
              </tbody>
            </table>

            {/* *************** PAGINATION *************** */}
            <div className="pt-2">
              <ul className="pagination">
                <li
                  className={`page-item ${
                    currentPage === pages[0] ? "disabled" : null
                  }`}
                >
                  <span className="page-link" onClick={handlePreviousBtnClick}>
                    Previous
                  </span>
                </li>

                {pageDecrementBtn}

                {renderPageNumbers}

                {pageIncrementBtn}

                <li
                  className={`page-item ${
                    currentPage === pages[pages.length - 1] ? "disabled" : null
                  }`}
                >
                  <span className="page-link" onClick={handleNextBtnClick}>
                    Next
                  </span>
                </li>
              </ul>
            </div>
            {/* *************** END OF PAGINATION *************** */}
          </div>
        </div>

        {/* <div className="row">
          {products.map((product) => {
            return <Product product={product} key={product._id} />;
          })}
        </div> */}
      </div>
    </>
  );
}

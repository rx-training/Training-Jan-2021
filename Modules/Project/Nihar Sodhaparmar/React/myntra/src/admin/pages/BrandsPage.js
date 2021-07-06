import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaPlus } from "react-icons/fa";
import { getToken, removeUserSession } from "../../utils/Storage";
import Loading from "../../components/Loading";
import { Modal } from "react-bootstrap";
import BrandRow from "../components/BrandsPage/BrandRow";
import BrandService from "../../services/BrandService";
import MainCategoryService from "../../services/MainCategoryService";
import CategoryService from "../../services/CategoryService";
import { NotificationManager } from "react-notifications";

export default function BrandsPage(props) {
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState("");
  const [mainCategories, setMainCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [brand, setBrand] = useState({
    mainCategory: "select",
    category: "select",
    brandName: "",
  });
  const [oldBrand, setOldBrand] = useState({
    oldMainCategory: "",
    oldCategory: "",
    oldBrandName: "",
  });
  const [errors, setErrors] = useState({
    mainCategory: "",
    category: "",
    brandName: "",
  });
  const [filteredCategoriesForFilter, setFilteredCategoriesForFilter] =
    useState([]);
  const [filterData, setFilterData] = useState({
    filterBrandName: "",
    filterMainCategory: "select",
    filterCategory: "select",
  });

  const validate = {
    mainCategory: (mainCategory) =>
      selectionValidation("Maincategory", mainCategory),
    category: (category) => selectionValidation("Category", category),
    brandName: (brandName) => nameValidation("Brand name", brandName),
  };

  async function getData() {
    try {
      setLoading(true);

      let res = await BrandService.getAllBrands();
      setBrands(res.data);
      setData(res.data);

      let mainCategories = await MainCategoryService.getAllMainCategories();
      setMainCategories(mainCategories.data);

      let categories = await CategoryService.getAllCategories();
      setCategories(categories.data);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const mainCategoryChange = (event) => {
    let value = event.target.value;

    if (value !== "select") {
      let filteredCategories = categories.filter(
        (category) => category.mainCategory._id === value
      );

      setFilteredCategories(filteredCategories);
      setBrand({ ...brand, mainCategory: value, category: "select" });
    } else {
      setFilteredCategories([]);
      setBrand({ ...brand, mainCategory: value, category: "select" });
    }
  };

  const filterMainCategoryChange = (event) => {
    let value = event.target.value;

    if (value !== "select") {
      let filteredCategoriesForFilter = categories.filter(
        (category) => category.mainCategory._id === value
      );

      setFilteredCategoriesForFilter(filteredCategoriesForFilter);

      let filteredBrands = brands;

      filteredBrands = filteredBrands.filter(
        (brand) => brand.mainCategory._id === value
      );

      if (filterBrandName.length > 0) {
        filteredBrands = filteredBrands.filter((brand) => {
          let tempSearch = filterBrandName.toLowerCase();
          let tempName = brand.brandName
            .toLowerCase()
            .slice(0, tempSearch.length);

          if (tempSearch === tempName) {
            return brand;
          }

          return null;
        });
      }

      setData(filteredBrands);
      setFilterData({
        ...filterData,
        filterMainCategory: value,
        filterCategory: "select",
      });
    } else {
      let filteredBrands = brands;

      if (filterBrandName.length > 0) {
        filteredBrands = filteredBrands.filter((brand) => {
          let tempSearch = filterBrandName.toLowerCase();
          let tempName = brand.brandName
            .toLowerCase()
            .slice(0, tempSearch.length);

          if (tempSearch === tempName) {
            return brand;
          }

          return null;
        });
      }

      setData(filteredBrands);
      setFilteredCategoriesForFilter([]);
      setFilterData({
        ...filterData,
        filterMainCategory: value,
        filterCategory: "select",
      });
    }
  };

  const filterDataChange = (event) => {
    const { name, value } = event.target;

    let filteredBrands = brands;

    if (name === "filterBrandName") {
      if (value.length > 0) {
        filteredBrands = filteredBrands.filter((brand) => {
          let tempSearch = value.toLowerCase();
          let tempName = brand.brandName
            .toLowerCase()
            .slice(0, tempSearch.length);

          if (tempSearch === tempName) {
            return brand;
          }

          return null;
        });
      }

      if (filterMainCategory !== "select") {
        filteredBrands = filteredBrands.filter(
          (brand) => brand.mainCategory._id === filterMainCategory
        );
      }

      if (filterCategory !== "select") {
        filteredBrands = filteredBrands.filter(
          (brand) => brand.category._id === filterCategory
        );
      }
    }

    if (name === "filterCategory") {
      if (value !== "select") {
        filteredBrands = filteredBrands.filter(
          (brand) => brand.category._id === value
        );
      }

      if (filterBrandName.length > 0) {
        filteredBrands = filteredBrands.filter((brand) => {
          let tempSearch = filterBrandName.toLowerCase();
          let tempName = brand.brandName
            .toLowerCase()
            .slice(0, tempSearch.length);

          if (tempSearch === tempName) {
            return brand;
          }

          return null;
        });
      }

      if (filterMainCategory !== "select") {
        filteredBrands = filteredBrands.filter(
          (brand) => brand.mainCategory._id === filterMainCategory
        );
      }
    }

    setData(filteredBrands);
    setFilterData({ ...filterData, [name]: value });
  };

  // ********** VALIDATION FUNCTIONS **********
  const selectionValidation = (fieldName, fieldValue) => {
    if (fieldValue === "select") {
      return `${fieldName} is required`;
    }
  };

  const nameValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === "") {
      return `${fieldName} is required`;
    }
    return null;
  };
  // ********** END OF VALIDATION FUNCTIONS **********

  // ********** FORM VALIDATION FUNCTION **********
  const validateForm = () => {
    let valid = true;
    let error = null;
    let tempErrors = errors;

    for (const item in brand) {
      error = validate[item](brand[item]);

      if (error) {
        valid = false;
      }

      tempErrors = { ...tempErrors, [item]: error };
    }

    setErrors({ ...tempErrors });

    return valid;
  };

  const handleBrandChabge = (event) => {
    const { name, value } = event.target;

    setBrand({ ...brand, [name]: value });
  };

  const handleBrandSubmit = async (event) => {
    let isValidForm = validateForm();

    if (isValidForm) {
      if (isUpdate) {
        try {
          setLoading(true);

          await BrandService.updateBrand(id, { ...brand }, getToken());
          NotificationManager.success("Brand updated successfully", "", 2000);
          getData();
          closeModal();
          setIsUpdate(false);
          setLoading(false);
        } catch (error) {
          if (error.response.status === 401) {
            removeUserSession();
            props.history.push("/dashboard/login");
          }
          setLoading(false);
        }
      } else {
        try {
          setLoading(true);

          await BrandService.addBrand({ ...brand }, getToken());
          NotificationManager.success("Brand added successfully", "", 2000);
          getData();
          closeModal();
          setLoading(false);
        } catch (error) {
          if (error.response.status === 401) {
            removeUserSession();
            props.history.push("/dashboard/login");
          }
          setLoading(false);
        }
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setIsUpdate(false);
    setId("");
    setOldBrand({
      oldMainCategory: "",
      oldCategory: "",
      oldBrandName: "",
    });
    setBrand({
      mainCategory: "select",
      category: "select",
      brandName: "",
    });
    setErrors({
      mainCategory: "",
      category: "",
      brandName: "",
    });
  };

  const updateBrand = (id, mainCategory, category, brandName) => {
    setIsUpdate(true);
    setId(id);
    let filteredCategories = categories.filter(
      (category) => category.mainCategory._id === mainCategory
    );

    setFilteredCategories(filteredCategories);
    setOldBrand({
      oldMainCategory: mainCategory,
      oldCategory: category,
      oldBrandName: brandName,
    });
    setBrand({
      mainCategory: mainCategory,
      category: category,
      brandName: brandName,
    });
    setShowModal(true);
  };

  const deleteBrand = async (id) => {
    if (window.confirm("Are you sure, you want to delete?")) {
      try {
        setLoading(true);

        await BrandService.deleteBrand(id, getToken());
        NotificationManager.error("Brand deleted successfully", "", 2000);
        getData();
        setLoading(false);
        setCurrentPage(1);
      } catch (error) {
        if (error.response.status === 401) {
          removeUserSession();
          props.history.push("/dashboard/login");
        } else if (error.response.status === 409) {
          alert("Brand is not allowed to delete");
        }
        setLoading(false);
      }
    }
  };

  const { mainCategory, category, brandName } = brand;
  const { oldMainCategory, oldCategory, oldBrandName } = oldBrand;

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

  const { filterBrandName, filterCategory, filterMainCategory } = filterData;

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

      <div className="">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col col-md-3 col-lg-2">
              <button
                className="btn add-btn btn-block mt-2"
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                <FaPlus style={{ fontSize: "13px" }} /> Add Brand
              </button>

              <div>
                <div className="form-group mt-4">
                  <label
                    className="form-control-label mb-1"
                    htmlFor="filterBrandName"
                  >
                    Brand Name
                  </label>
                  <input
                    type="search"
                    className="form-control"
                    id="filterBrandName"
                    name="filterBrandName"
                    value={filterBrandName}
                    onChange={filterDataChange}
                  />
                </div>

                <div className="form-group mt-3">
                  <label
                    className="form-control-label mb-1"
                    htmlFor="filterMainCategory"
                  >
                    Maincategory
                  </label>
                  <select
                    className="form-control"
                    name="filterMainCategory"
                    id="filterMainCategory"
                    value={filterMainCategory}
                    onChange={filterMainCategoryChange}
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
                  <label
                    className="form-control-label mb-1"
                    htmlFor="filterCategory"
                  >
                    Category
                  </label>
                  <select
                    className="form-control"
                    name="filterCategory"
                    id="filterCategory"
                    value={filterCategory}
                    onChange={filterDataChange}
                  >
                    <option value="select"> Select Category</option>
                    {filteredCategoriesForFilter.map((category) => {
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
              </div>
            </div>
            <div className="col col-md-9 col-lg-10">
              <table className="table table-hover table-bordered text-center bg-white table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th className="text-spacing">No.</th>
                    <th className="text-spacing">Maincategory</th>
                    <th className="text-spacing">Category</th>
                    <th className="text-spacing">Brand</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((brand, index) => {
                    return (
                      <BrandRow
                        brand={brand}
                        index={(currentPage - 1) * itemsPerPage + index}
                        key={brand._id}
                        updateBrand={updateBrand}
                        deleteBrand={deleteBrand}
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
                    <span
                      className="page-link"
                      onClick={handlePreviousBtnClick}
                    >
                      Previous
                    </span>
                  </li>

                  {pageDecrementBtn}

                  {renderPageNumbers}

                  {pageIncrementBtn}

                  <li
                    className={`page-item ${
                      currentPage === pages[pages.length - 1]
                        ? "disabled"
                        : null
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
        </div>
      </div>

      {/* ------------------------------- ADD BRAND MODAL ------------------------------- */}
      <Modal show={showModal} size="lg" onHide={closeModal}>
        <Modal.Header className="bg-pink text-white border">
          <Modal.Title>{isUpdate ? "Update" : "Add"} Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isUpdate === false && (
            <>
              <div className="form-group">
                <label className="form-control-label" htmlFor="mainCategory">
                  Main Category
                </label>
                <select
                  name="mainCategory"
                  id="mainCategory"
                  className="form-control login-form-control"
                  value={mainCategory}
                  onChange={mainCategoryChange}
                >
                  <option value="select">Select Maincategory</option>
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
                <p className="text-danger mb-0 font-weight-bold">
                  {errors.mainCategory}
                </p>
              </div>

              <div className="form-group">
                <label className="form-control-label" htmlFor="category">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-control login-form-control"
                  value={category}
                  onChange={handleBrandChabge}
                >
                  <option value="select">Select Category</option>
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
                <p className="text-danger mb-0 font-weight-bold">
                  {errors.category}
                </p>
              </div>

              <div className="form-group">
                <label className="form-control-label" htmlFor="brandName">
                  Brand Name
                </label>
                <input
                  type="text"
                  className="form-control login-form-control"
                  id="brandName"
                  name="brandName"
                  value={brandName}
                  onChange={handleBrandChabge}
                />
                <p className="text-danger mb-0 font-weight-bold">
                  {errors.brandName}
                </p>
              </div>
            </>
          )}
          {isUpdate === true && (
            <>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label
                      className="form-control-label"
                      htmlFor="oldMainCategory"
                    >
                      Old Main Category
                    </label>
                    <select
                      name="oldMainCategory"
                      id="oldMainCategory"
                      className="form-control login-form-control"
                      value={oldMainCategory}
                      disabled
                    >
                      <option value="select">Select Maincategory</option>
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
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label
                      className="form-control-label"
                      htmlFor="mainCategory"
                    >
                      Main Category
                    </label>
                    <select
                      name="mainCategory"
                      id="mainCategory"
                      className="form-control login-form-control"
                      value={mainCategory}
                      onChange={mainCategoryChange}
                    >
                      <option value="select">Select Maincategory</option>
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
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.mainCategory}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="oldCategory">
                      Old Category
                    </label>
                    <select
                      name="oldCategory"
                      id="oldCategory"
                      className="form-control login-form-control"
                      value={oldCategory}
                      disabled
                    >
                      <option value="select">Select Category</option>
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
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="category">
                      Category
                    </label>
                    <select
                      name="category"
                      id="category"
                      className="form-control login-form-control"
                      value={category}
                      onChange={handleBrandChabge}
                    >
                      <option value="select">Select Category</option>
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
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.category}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label
                      className="form-control-label"
                      htmlFor="oldBrandName"
                    >
                      Old Brand Name
                    </label>
                    <input
                      type="text"
                      className="form-control login-form-control"
                      id="oldBrandName"
                      name="oldBrandName"
                      value={oldBrandName}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="brandName">
                      Brand Name
                    </label>
                    <input
                      type="text"
                      className="form-control login-form-control"
                      id="brandName"
                      name="brandName"
                      value={brandName}
                      onChange={handleBrandChabge}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.brandName}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary btn-radius-0"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            className="btn btn-pink-2 btn-radius-0"
            onClick={handleBrandSubmit}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

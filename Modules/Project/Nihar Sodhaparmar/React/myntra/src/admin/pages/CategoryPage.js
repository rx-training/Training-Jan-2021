import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaPlus } from "react-icons/fa";
import CategoryService from "../../services/CategoryService";
import CategoryRow from "../components/CategoriesPage/CategoryRow";
import { getToken, removeUserSession } from "../../utils/Storage";
import Loading from "../../components/Loading";
import { Modal } from "react-bootstrap";
import MainCategoryService from "../../services/MainCategoryService";
import CategoriesToBagService from "../../services/CategoriesToBagService";
import { NotificationManager } from "react-notifications";

export default function CategoryPage(props) {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const [mainCategory, setMainCategory] = useState("select");
  const [oldMainCategory, setOldMainCategory] = useState("select");
  const [categoryName, setCategoryName] = useState("");
  const [oldCategoryName, setOldCategoryName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [mainCategoryError, setMainCateGoryError] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState("");
  const [inCategoriesToBag, setInCategoriesToBag] = useState(false);
  const [showCategoryToBagModal, setShowCategoryToBagModal] = useState(false);
  const [categoryToBagImage, setCategoryToBagImage] = useState("");
  const [categoryToBagBlobImage, setCategoryToBagBlobImage] = useState("");
  const [categoryToBagImageError, setCategoryToBagImageError] = useState("");
  const [filterData, setFilterData] = useState({
    filterMainCategory: "select",
    filterCategoryName: "",
  });

  async function getData() {
    try {
      setLoading(true);

      let res = await CategoryService.getAllCategories();
      setCategories(res.data);
      setData(res.data);

      let mainCategories = await MainCategoryService.getAllMainCategories();
      setMainCategories(mainCategories.data);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const filterDataChange = (event) => {
    const { name, value } = event.target;

    let filteredCategories = categories;

    if (name === "filterMainCategory") {
      if (value !== "select") {
        filteredCategories = filteredCategories.filter(
          (category) => category.mainCategory._id === value
        );
      }

      if (filterCategoryName.length > 0) {
        filteredCategories = filteredCategories.filter((category) => {
          let tempSearch = filterCategoryName.toLowerCase();
          let tempName = category.categoryName
            .toLowerCase()
            .slice(0, tempSearch.length);

          if (tempSearch === tempName) {
            return category;
          }

          return null;
        });
      }
    }

    if (name === "filterCategoryName") {
      if (value.length > 0) {
        filteredCategories = filteredCategories.filter((category) => {
          let tempSearch = value.toLowerCase();
          let tempName = category.categoryName
            .toLowerCase()
            .slice(0, tempSearch.length);

          if (tempSearch === tempName) {
            return category;
          }

          return null;
        });
      }

      if (filterMainCategory !== "select") {
        filteredCategories = filteredCategories.filter(
          (category) => category.mainCategory._id === filterMainCategory
        );
      }
    }

    setData(filteredCategories);
    setCurrentPage(1);
    setFilterData({ ...filterData, [name]: value });
  };

  const handleChange = (event) => {
    setCategoryName(event.target.value);
  };

  const mainCategoryChange = (event) => {
    setMainCategory(event.target.value);
  };

  const addCategory = async () => {
    let isValid = true;

    if (categoryName === "") {
      setError("Category name should not be empty");
      isValid = false;
    } else {
      setError("");
    }

    if (mainCategory === "select") {
      setMainCateGoryError("Select Maincategory");
      isValid = false;
    } else {
      setMainCateGoryError("");
    }

    if (!isValid) {
      return;
    }

    if (isUpdate) {
      try {
        setLoading(true);
        await CategoryService.updateCategory(
          id,
          {
            mainCategory: mainCategory,
            categoryName: categoryName,
            inCategoriesToBag: inCategoriesToBag,
          },
          getToken()
        );
        NotificationManager.success("Category updated successfully", "", 2000);
        getData();
        closeModel();
        setCategoryName("");
        setLoading(false);
        setError("");
        setIsUpdate(false);
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
        await CategoryService.addCategory(
          {
            mainCategory: mainCategory,
            categoryName: categoryName,
            inCategoriesToBag: false,
          },
          getToken()
        );
        NotificationManager.success("Category added successfully", "", 2000);
        getData();
        closeModel();
        setCategoryName("");
        setLoading(false);
        setError("");
      } catch (error) {
        if (error.response.status === 401) {
          removeUserSession();
          props.history.push("/dashboard/login");
        }
        setLoading(false);
      }
    }
  };

  const updateCategory = (
    id,
    categoryName,
    mainCategory,
    inCategoriesToBag
  ) => {
    setIsUpdate(true);
    setId(id);
    setShowModal(true);
    setOldCategoryName(categoryName);
    setCategoryName(categoryName);
    setMainCategory(mainCategory);
    setOldMainCategory(mainCategory);
    setInCategoriesToBag(inCategoriesToBag);
  };

  const deleteCategory = async (id) => {
    if (window.confirm("Are you sure, you want to delete?")) {
      try {
        setLoading(true);
        await CategoryService.deleteCategory(id, getToken());
        NotificationManager.error("Category deleted successfully", "", 2000);
        setCurrentPage(1);
        getData();
        setLoading(false);
      } catch (error) {
        console.error(error);
        if (error.response.status === 401) {
          removeUserSession();
          props.history.push("/dashboard/login");
        } else if (error.response.status === 409) {
          alert("Category is not allowed to delete");
        }
        setLoading(false);
      }
    }
  };

  const closeModel = () => {
    setShowModal(false);
    setIsUpdate(false);
    setCategoryName("");
    setMainCategory("select");
    setError("");
    setMainCateGoryError("");
    setId("");
    setInCategoriesToBag(false);
  };

  const closeCategoryToBagModal = () => {
    setShowCategoryToBagModal(false);
    setCategoryName("");
    setCategoryToBagBlobImage("");
    setCategoryToBagImage("");
    setId("");
    setCategoryToBagImageError("");
  };

  const openCategoryToBagModal = (categoryName, id) => {
    setId(id);
    setCategoryName(categoryName);
    setShowCategoryToBagModal(true);
  };

  const categoryToBagImageChange = (event) => {
    const image = event.target.files[0];
    setCategoryToBagBlobImage(URL.createObjectURL(image));
    setCategoryToBagImage(image);
  };

  const addCategoryToBag = async () => {
    if (categoryToBagImage === "" || categoryToBagImage === null) {
      setCategoryToBagImageError("Image is required");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("category", id);
      formData.append("image", categoryToBagImage);

      await CategoriesToBagService.addCategoryToBag(formData, getToken());

      closeCategoryToBagModal();
      getData();
      setLoading(false);
    } catch (error) {
      console.error(error);
      if (error.response.status === 401) {
        removeUserSession();
        props.history.push("/dashboard/login");
      }
      setLoading(false);
    }
  };

  const deleteCategoryToBag = async (id) => {
    if (
      window.confirm("Are you sure you want to remove from categories to bag?")
    ) {
      try {
        setLoading(true);

        await CategoriesToBagService.deleteCategoryToBag(id, getToken());

        getData();
        setLoading(false);
      } catch (error) {
        if (error.response.status === 401) {
          removeUserSession();
          props.history.push("/dashboard/login");
        }
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

  const { filterMainCategory, filterCategoryName } = filterData;

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
                <FaPlus style={{ fontSize: "13px" }} /> Add Category
              </button>
              <div>
                <div className="form-group mt-4">
                  <label
                    className="form-control-label mb-1"
                    htmlFor="filterCategoryName"
                  >
                    Category Name
                  </label>
                  <input
                    type="search"
                    className="form-control"
                    id="filterCategoryName"
                    name="filterCategoryName"
                    value={filterCategoryName}
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
                    onChange={filterDataChange}
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
              </div>
            </div>
            <div className="col col-md-9 col-lg-10">
              <div>
                <table className="table table-hover table-bordered text-center bg-white table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th className="text-spacing">No.</th>
                      <th className="text-spacing">Maincategory</th>
                      <th className="text-spacing">Category</th>
                      <th className="text-spacing">In Categories To Bag</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((category, index) => {
                      return (
                        <CategoryRow
                          category={category}
                          index={(currentPage - 1) * itemsPerPage + index}
                          key={category._id}
                          deleteCategory={deleteCategory}
                          updateCategory={updateCategory}
                          openCategoryToBagModal={openCategoryToBagModal}
                          deleteCategoryToBag={deleteCategoryToBag}
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
      </div>

      {/* ------------------------------- ADD CATEGORY MODAL ------------------------------- */}
      <Modal show={showModal} size="lg" onHide={closeModel}>
        <Modal.Header className="bg-pink text-white border">
          <Modal.Title>{isUpdate ? "Update" : "Add"} Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isUpdate === false && (
            <div>
              <div className="form-group">
                <label className="form-control-label" htmlFor="category">
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
                  {mainCategoryError}
                </p>
              </div>
              <div className="form-group">
                <label className="form-control-label" htmlFor="category">
                  Category Title
                </label>
                <input
                  type="text"
                  className="form-control login-form-control"
                  id="category"
                  value={categoryName}
                  onChange={handleChange}
                />
                <p className="text-danger mb-0 font-weight-bold">{error}</p>
              </div>
            </div>
          )}
          {isUpdate && (
            <div>
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
                      {mainCategoryError}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="category">
                      Old Category Title
                    </label>
                    <input
                      type="text"
                      className="form-control login-form-control"
                      id="oldcategory"
                      value={oldCategoryName}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="category">
                      New Category Title
                    </label>
                    <input
                      type="text"
                      className="form-control login-form-control"
                      id="category"
                      value={categoryName}
                      onChange={handleChange}
                    />
                    <p className="text-danger mb-0 font-weight-bold">{error}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary btn-radius-0"
            onClick={closeModel}
          >
            Close
          </button>
          <button className="btn btn-pink-2 btn-radius-0" onClick={addCategory}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      {/* ---------------------------- ADD CATEGORY TO BAG MODAL ---------------------------- */}
      <Modal
        show={showCategoryToBagModal}
        size="lg"
        onHide={closeCategoryToBagModal}
      >
        <Modal.Header className="bg-pink text-white border">
          <Modal.Title>Add Category To Bag</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label className="form-control-label" htmlFor="category">
              Category Title
            </label>
            <input
              type="text"
              className="form-control login-form-control"
              value={categoryName}
              disabled
            />
          </div>
          <div className="form-group">
            <label className="form-control-label" htmlFor="categoryToBagImage">
              Image
            </label>
            <input
              type="file"
              className="form-control border-0"
              name="categoryToBagImage"
              id="categoryToBagImage"
              onChange={categoryToBagImageChange}
            />
            <p className="text-danger mb-0 font-weight-bold">
              {categoryToBagImageError}
            </p>
            {categoryToBagBlobImage && (
              <div
                className="card mx-auto add-product-card mt-2"
                style={{ border: "none", width: "fit-content" }}
              >
                <div className="card-body">
                  <div className="deals-img-container">
                    <img
                      src={categoryToBagBlobImage}
                      alt="categoryToBag"
                      width="120px"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary btn-radius-0"
            onClick={closeCategoryToBagModal}
          >
            Close
          </button>
          <button
            className="btn btn-pink-2 btn-radius-0"
            onClick={addCategoryToBag}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

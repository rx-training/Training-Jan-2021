import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaPlus } from "react-icons/fa";
import { getToken, removeUserSession } from "../../utils/Storage";
import Loading from "../../components/Loading";
import { Modal } from "react-bootstrap";
import MainCategoryService from "../../services/MainCategoryService";
import MainCategoryRow from "../components/MainCategoriesPage/MainCategoryRow";
import { NotificationManager } from "react-notifications";

export default function MainCategoriesPage(props) {
  const [loading, setLoading] = useState(false);
  const [mainCategories, setMainCategories] = useState([]);
  const [mainCategoryName, setMainCategoryName] = useState("");
  const [oldMainCategoryName, setOldMainCategoryName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const [filterMainCategoryName, setFilterMainCategoryName] = useState("");

  async function getData() {
    try {
      setLoading(true);
      let res = await MainCategoryService.getAllMainCategories();
      setMainCategories(res.data);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const filterMainCategoryNameChange = (event) => {
    let value = event.target.value;

    let filteredMainCategories = mainCategories;
    if (value.length > 0) {
      filteredMainCategories = filteredMainCategories.filter((mainCategory) => {
        let tempSearch = value.toLowerCase();
        let tempName = mainCategory.mainCategoryName
          .toLowerCase()
          .slice(0, tempSearch.length);

        if (tempSearch === tempName) {
          return mainCategory;
        }

        return null;
      });
    }

    setData(filteredMainCategories);
    setFilterMainCategoryName(value);
  };

  const handleChange = (event) => {
    setMainCategoryName(event.target.value);
  };

  const addMainCategory = async () => {
    if (mainCategoryName === "") {
      setError("Main Category name should not be empty");
      return;
    }

    if (isUpdate) {
      try {
        setLoading(true);
        await MainCategoryService.updateMainCategory(
          id,
          { mainCategoryName: mainCategoryName },
          getToken()
        );
        getData();
        closeModel();
        setMainCategoryName("");
        setLoading(false);
        setIsUpdate(false);
        setError("");
        NotificationManager.success(
          "Maincategory updated successfully",
          "",
          2000
        );
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
        await MainCategoryService.addMainCategory(
          { mainCategoryName: mainCategoryName },
          getToken()
        );
        getData();
        closeModel();
        setMainCategoryName("");
        setLoading(false);
        setError("");
        NotificationManager.success(
          "Maincategory added successfully",
          "",
          2000
        );
      } catch (error) {
        if (error.response.status === 401) {
          removeUserSession();
          props.history.push("/dashboard/login");
        }
        setLoading(false);
      }
    }
  };

  const updateCategory = (id, name) => {
    setIsUpdate(true);
    setId(id);
    setShowModal(true);
    setOldMainCategoryName(name);
  };

  const deleteCategory = async (id) => {
    if (window.confirm("Are you sure, you want to delete?")) {
      try {
        setLoading(true);
        await MainCategoryService.deleteMainCategory(id, getToken());
        NotificationManager.error(
          "Maincategory deleted successfully",
          "",
          2000
        );
        getData();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
        if (error.response.status === 401) {
          removeUserSession();
          props.history.push("/dashboard/login");
        } else if (error.response.status === 409) {
          alert("Main Category is not allowed to delete");
        }
      }
    }
  };

  const closeModel = () => {
    setShowModal(false);
    setIsUpdate(false);
    setId("");
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
                <FaPlus style={{ fontSize: "13px" }} /> Add Maincategory
              </button>

              <div>
                <div className="form-group mt-4">
                  <label
                    className="form-control-label mb-1"
                    htmlFor="mainCategoryName"
                  >
                    Maincategory Name
                  </label>
                  <input
                    type="search"
                    className="form-control"
                    id="mainCategoryName"
                    name="mainCategoryName"
                    value={filterMainCategoryName}
                    onChange={filterMainCategoryNameChange}
                  />
                </div>
              </div>
            </div>
            <div className="col col-md-9 col-lg-10">
              <table className="table table-hover table-bordered text-center bg-white table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th className="text-spacing">No.</th>
                    <th className="text-spacing">Maincategory</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((mainCategory, index) => {
                    return (
                      <MainCategoryRow
                        mainCategory={mainCategory}
                        index={index}
                        key={mainCategory._id}
                        deleteCategory={deleteCategory}
                        updateCategory={updateCategory}
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

      {/* ----------------------------- ADD MAIN CATEGORY MODAL ----------------------------- */}
      <Modal show={showModal} size="lg" onHide={closeModel}>
        <Modal.Header className="bg-pink text-white border">
          <Modal.Title>{isUpdate ? "Update" : "Add"} Main Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isUpdate && (
            <div className="form-group">
              <label
                className="form-control-label"
                htmlFor="oldMainCategoryName"
              >
                Old Main Category Title
              </label>
              <input
                type="text"
                className="form-control login-form-control"
                id="oldMainCategoryName"
                value={oldMainCategoryName}
                disabled
              />
            </div>
          )}
          <div className="form-group">
            <label className="form-control-label" htmlFor="mainCategoryName">
              {isUpdate && "New "}Main Category Title
            </label>
            <input
              type="text"
              className="form-control login-form-control"
              id="mainCategoryName"
              value={mainCategoryName}
              onChange={handleChange}
            />
            <p className="text-danger mb-0 font-weight-bold">{error}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary btn-radius-0"
            onClick={closeModel}
          >
            Close
          </button>
          <button
            className="btn btn-pink-2 btn-radius-0"
            onClick={addMainCategory}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

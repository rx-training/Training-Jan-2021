import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaPlus } from "react-icons/fa";
import { getToken, removeUserSession } from "../../utils/Storage";
import Loading from "../../components/Loading";
import { Modal } from "react-bootstrap";
import SubCategoryService from "../../services/SubCategoryService";
import SubCategoryRow from "../components/SubCategoriesPage/SubCategoryRow";

export default function SubCategoriesPage(props) {
  const [loading, setLoading] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [subCategoryName, setSubCategoryName] = useState("");
  const [oldSubCategoryName, setOldSubCategoryName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  async function getData() {
    try {
      setLoading(true);
      let res = await SubCategoryService.getAllSubCategories();
      setSubCategories(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (event) => {
    setSubCategoryName(event.target.value);
  };

  const addSubCategory = async () => {
    if (subCategoryName === "") {
      setError("Sub Category name should not be empty");
      return;
    }

    if (isUpdate) {
      try {
        setLoading(true);
        await SubCategoryService.updateSubCategory(
          id,
          { subCategoryName: subCategoryName },
          getToken()
        );
        getData();
        closeModel();
        setSubCategoryName("");
        setLoading(false);
        setError("");
      } catch (error) {
        if (error.response.status === 401) {
          removeUserSession();
          props.history.push("/login");
        }
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        await SubCategoryService.addSubCategory(
          { subCategoryName: subCategoryName },
          getToken()
        );
        getData();
        closeModel();
        setSubCategoryName("");
        setLoading(false);
        setError("");
      } catch (error) {
        if (error.response.status === 401) {
          removeUserSession();
          props.history.push("/login");
        }
        setLoading(false);
      }
    }
  };

  const updateCategory = (id, name) => {
    setIsUpdate(true);
    setId(id);
    setShowModal(true);
    setOldSubCategoryName(name);
  };

  const deleteCategory = async (id) => {
    if (window.confirm("Are you sure, you want to delete?")) {
      try {
        setLoading(true);
        await SubCategoryService.deleteSubCategory(id, getToken());
        getData();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
        if (error.response.status === 401) {
          removeUserSession();
          props.history.push("/login");
        } else if (error.response.status === 409) {
          alert("Sub Category is not allowed to delete");
        }
      }
    }
  };

  const closeModel = () => {
    setShowModal(false);
    setIsUpdate(false);
    setId("");
  };

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
        <div className="container py-5">
          <button
            className="btn login-btn btn-block add-category-btn mb-4"
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            <FaPlus style={{ fontSize: "13.5px" }} /> Add Sub Category
          </button>

          <h1 className="text-center pb-3">Sub Categories</h1>

          <table className="table table-hover table-bordered text-center bg-white table-striped">
            <thead className="thead-dark">
              <tr>
                <th style={{ letterSpacing: "2px" }}>No.</th>
                <th style={{ letterSpacing: "2px" }}>Sub Category</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {subCategories.map((subCategory, index) => {
                return (
                  <SubCategoryRow
                    subCategory={subCategory}
                    index={index}
                    key={subCategory._id}
                    deleteCategory={deleteCategory}
                    updateCategory={updateCategory}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ----------------------------- ADD SUB CATEGORY MODAL ----------------------------- */}
      <Modal show={showModal} size="lg" onHide={closeModel}>
        <Modal.Header className="bg-pink text-white border">
          <Modal.Title>{isUpdate ? "Update" : "Add"} Sub Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isUpdate && (
            <div className="form-group">
              <label
                className="form-control-label"
                htmlFor="oldSubCategoryName"
              >
                Old Sub Category Title
              </label>
              <input
                type="text"
                className="form-control login-form-control"
                id="oldSubCategoryName"
                value={oldSubCategoryName}
                disabled
              />
            </div>
          )}
          <div className="form-group">
            <label className="form-control-label" htmlFor="subCategoryName">
              {isUpdate && "New "}Sub Category Title
            </label>
            <input
              type="text"
              className="form-control login-form-control"
              id="subCategoryName"
              value={subCategoryName}
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
            onClick={addSubCategory}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaPlus } from "react-icons/fa";
import CategoryService from "../../services/CategoryService";
import CategoryRow from "../components/CategoriesPage/CategoryRow";
import { getToken, removeUserSession } from "../../Utils/Storage";
import Loading from "../../components/Loading";
import { Modal } from "react-bootstrap";

export default function CategoryPage(props) {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [oldCategoryName, setOldCategoryName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState("");

  async function getData() {
    try {
      setLoading(true);
      let res = await CategoryService.getAllCategories();
      setCategories(res.data);
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
    setCategoryName(event.target.value);
  };

  const addCategory = async () => {
    if (categoryName === "") {
      setError("Category name should not be empty");
      return;
    }

    if (isUpdate) {
      try {
        setLoading(true);
        await CategoryService.updateCategory(
          id,
          { categoryName: categoryName },
          getToken()
        );
        getData();
        closeModel();
        setCategoryName("");
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
        await CategoryService.addCategory(
          { categoryName: categoryName },
          getToken()
        );
        getData();
        closeModel();
        setCategoryName("");
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
    setOldCategoryName(name);
  };

  const deleteCategory = async (id) => {
    try {
      setLoading(true);
      await CategoryService.deleteCategory(id, getToken());
      getData();
      setLoading(false);
    } catch (error) {
      console.error(error);
      if (error.response.status === 401) {
        removeUserSession();
        props.history.push("/login");
      }
      setLoading(false);
    }
  };

  const closeModel = () => {
    setShowModal(false);
    setIsUpdate(false);
    setId("");
  };

  if (loading) {
    return <Loading />;
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
            <FaPlus style={{ fontSize: "13.5px" }} /> Add Category
          </button>

          <h1 className="text-center pb-3">Categories</h1>

          <table className="table table-hover table-bordered text-center bg-white table-striped">
            <thead className="thead-dark">
              <tr>
                <th style={{ letterSpacing: "2px" }}>No.</th>
                <th style={{ letterSpacing: "2px" }}>Category</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => {
                return (
                  <CategoryRow
                    category={category}
                    index={index}
                    key={category._id}
                    deleteCategory={deleteCategory}
                    updateCategory={updateCategory}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ------------------------------- ADD CATEGORY MODAL ------------------------------- */}
      <Modal show={showModal} size="lg" onHide={closeModel}>
        <Modal.Header className="bg-pink text-white border">
          <Modal.Title>{isUpdate ? "Update" : "Add"} Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isUpdate && (
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
          )}
          <div className="form-group">
            <label className="form-control-label" htmlFor="category">
              {isUpdate && "New "}Category Title
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
    </>
  );
}

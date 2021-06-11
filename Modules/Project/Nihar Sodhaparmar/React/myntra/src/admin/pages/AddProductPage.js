import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CategoryService from "../../services/CategoryService";
import SubCategoryService from "../../services/SubCategoryService";
import BrandService from "../../services/BrandService";
import Loading from "../../components/Loading";
import ProductService from "../../services/ProductService";
import { removeUserSession, getToken } from "../../Utils/Storage";
import Images from "../components/AddProductPage/Images";

export default function AddProductPage(props) {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [product, setProduct] = useState({
    category: "select",
    subCategory: "select",
    brand: "select",
    productName: "",
    details: "",
    images: [],
    price: "",
    sizes: "",
    pincodes: "",
    returnable: true,
    offer: "",
  });
  const [blobImages, setBlobImages] = useState([]);

  const [errors, setErrors] = useState({
    category: "",
    subCategory: "",
    brand: "",
    productName: "",
    details: "",
    images: "",
    price: "",
    sizes: "",
    pincodes: "",
    returnable: "",
    offer: "",
  });

  const validate = {
    category: (category) => selectionValidation("Category", category),
    subCategory: (subCategory) =>
      selectionValidation("Sub Category", subCategory),
    brand: (brand) => selectionValidation("Brand", brand),
    productName: (productName) => nameValidation("Product Name", productName),
    details: (details) => requiredValidation("Details", details),
    images: (images) => arrayValidation("Images", images),
    price: (price) => requiredValidation("Price", price),
    sizes: (sizes) => requiredValidation("Sizes", sizes),
    pincodes: (pincodes) => requiredValidation("Pincodes", pincodes),
    returnable: () => {},
    offer: (offer) => requiredValidation("Offer", offer),
  };

  const {
    category,
    subCategory,
    brand,
    productName,
    details,
    price,
    sizes,
    pincodes,
    offer,
  } = product;

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        let categories = await CategoryService.getAllCategories();
        setCategories(categories.data);

        let subCategories = await SubCategoryService.getAllSubCategories();
        setSubCategories(subCategories.data);

        let brands = await BrandService.getAllBrands();
        setBrands(brands.data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error.message);
      }
    }

    getData();
  }, []);

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

    if (fieldValue.trim().length < 3) {
      return `${fieldName} needs to be at least three characters`;
    }
    return null;
  };

  const requiredValidation = (fieldName, fieldValue) => {
    if (fieldValue === "") {
      return `${fieldName} is required`;
    }
  };

  const arrayValidation = (fieldName, fieldValue) => {
    if (fieldValue.length === 0) {
      return `${fieldName} is required`;
    }
  };
  // ********** END OF VALIDATION FUNCTIONS **********

  // ********** HANDLE CHANGE  **********
  const handeChange = async (event) => {
    const { name, value: newValue, type } = event.target;
    // keep number fields as numbers
    const value = type === "number" ? +newValue : newValue;

    if (name === "images") {
      let images = [];
      let blobImages = [];
      for (const i of event.target.files) {
        images.push(i);
        blobImages.push(URL.createObjectURL(i));
      }
      setProduct({ ...product, [name]: images });
      setBlobImages(blobImages);
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  // ********** FORM VALIDATION FUNCTION **********
  const validateForm = () => {
    let valid = true;
    let error = null;
    let tempErrors = errors;

    for (const item in product) {
      error = validate[item](product[item]);

      if (error) {
        valid = false;
      }

      tempErrors = { ...tempErrors, [item]: error };
    }

    setErrors({ ...tempErrors });

    return valid;
  };

  // ********** HANDLE SUBMIT  **********
  const handleSubmit = async (event) => {
    event.preventDefault();

    let isValidForm = validateForm();

    if (isValidForm) {
      const formData = new FormData();
      for (let i in product) {
        if (i === "images") {
          for (let j of product.images) {
            formData.append("images", j);
          }
        } else if (i === "pincodes" || i === "sizes") {
          let array1 = product[i].split(",");
          for (let j of array1) {
            formData.append(i, j);
          }
        } else {
          formData.append(i, product[i]);
        }
      }

      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }

      try {
        setLoading(true);
        let res = await ProductService.addProduct(formData, getToken());
        setProduct({
          category: "select",
          brand: "select",
          productName: "",
          details: "",
          images: [],
          price: "",
          sizes: "",
          pincodes: "",
          returnable: true,
          offer: "",
        });
        setBlobImages([]);
        setLoading(false);
        props.history.push("/dashboard/products/" + res.data._id);
      } catch (error) {
        console.error(error);
        if (error.response.status === 403 || error.response.status === 401) {
          props.history.push("/login");
          removeUserSession();
        }
        setLoading(false);
      }
    } else {
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

  return (
    <>
      <Navbar />
      <div className="gradient-container pb-5">
        <div className="container py-3 add-product-form-card-container">
          <div className="card add-product-card">
            <div className="card-header add-product-card-header">
              PRODUCT DETAILS
            </div>
            <div className="card-body p-5">
              <form onSubmit={handleSubmit}>
                {/* ********** input ********** */}
                <div className="row">
                  <div className="col-md-3">
                    <label
                      className="add-product-form-control-label"
                      htmlFor="brand"
                    >
                      Select Brand
                    </label>
                  </div>
                  <div className="col-md-9 add-product-form-control-container">
                    <select
                      className="form-control add-product-form-control"
                      name="brand"
                      id="brand"
                      value={brand}
                      onChange={handeChange}
                    >
                      <option value="select"> Select Brand</option>
                      {brands.map((brand) => {
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
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.brand}
                    </p>
                  </div>
                </div>
                {/* ********** end of input ********** */}

                {/* ********** input ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="add-product-form-control-label"
                      htmlFor="category"
                    >
                      Select Category
                    </label>
                  </div>
                  <div className="col-md-9 add-product-form-control-container">
                    <select
                      className="form-control add-product-form-control"
                      name="category"
                      id="category"
                      value={category}
                      onChange={handeChange}
                    >
                      <option value="select"> Select Category</option>
                      {categories.map((category) => {
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
                {/* ********** end of input ********** */}

                {/* ********** input ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="add-product-form-control-label"
                      htmlFor="subCategory"
                    >
                      Select Subcategory
                    </label>
                  </div>
                  <div className="col-md-9 add-product-form-control-container">
                    <select
                      className="form-control add-product-form-control"
                      name="subCategory"
                      id="subCategory"
                      value={subCategory}
                      onChange={handeChange}
                    >
                      <option value="select"> Select Subcategory</option>
                      {subCategories.map((subCategory) => {
                        return (
                          <option
                            value={subCategory._id}
                            className="text-capitalize"
                            key={subCategory._id}
                          >
                            {subCategory.subCategoryName}
                          </option>
                        );
                      })}
                    </select>
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.subCategory}
                    </p>
                  </div>
                </div>
                {/* ********** end of input ********** */}

                {/* ********** input ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="add-product-form-control-label"
                      htmlFor="productName"
                    >
                      Product Name
                    </label>
                  </div>
                  <div className="col-md-9 add-product-form-control-container">
                    <input
                      type="text"
                      className="form-control add-product-form-control"
                      name="productName"
                      id="productName"
                      value={productName}
                      onChange={handeChange}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.productName}
                    </p>
                  </div>
                </div>
                {/* ********** end of input ********** */}

                {/* ********** input ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="add-product-form-control-label"
                      htmlFor="details"
                    >
                      Product Details
                    </label>
                  </div>
                  <div className="col-md-9 add-product-form-control-container">
                    <textarea
                      className="form-control add-product-text-area"
                      name="details"
                      id="details"
                      rows="4"
                      value={details}
                      onChange={handeChange}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.details}
                    </p>
                  </div>
                </div>
                {/* ********** end of input ********** */}

                {/* ********** input ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="add-product-form-control-label"
                      htmlFor="images"
                    >
                      Product Images
                    </label>
                  </div>
                  <div className="col-md-9 add-product-form-control-container">
                    <input
                      type="file"
                      className="form-group mt-2"
                      name="images"
                      id="images"
                      onChange={handeChange}
                      multiple
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.images}
                    </p>
                  </div>
                </div>
                {/* ********** end of input ********** */}

                {/* ********** IMAGES ********** */}
                <div className="container">
                  <div className="row">
                    {blobImages.map((image, index) => {
                      return <Images image={image} key={index} />;
                    })}
                  </div>
                </div>
                {/* ********** end of IMAGES ********** */}

                {/* ********** input ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="add-product-form-control-label"
                      htmlFor="price"
                    >
                      Product Price
                    </label>
                  </div>
                  <div className="col-md-9 add-product-form-control-container">
                    <input
                      type="number"
                      className="form-control add-product-form-control"
                      name="price"
                      id="price"
                      value={price}
                      onChange={handeChange}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.price}
                    </p>
                  </div>
                </div>
                {/* ********** end of input ********** */}

                {/* ********** input ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="add-product-form-control-label"
                      htmlFor="sizes"
                    >
                      Product Sizes
                    </label>
                  </div>
                  <div className="col-md-9 add-product-form-control-container">
                    <input
                      type="text"
                      className="form-control add-product-form-control"
                      name="sizes"
                      id="sizes"
                      value={sizes}
                      onChange={handeChange}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.sizes}
                    </p>
                  </div>
                </div>
                {/* ********** end of input ********** */}

                {/* ********** input ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="add-product-form-control-label"
                      htmlFor="pincodes"
                    >
                      Deliverable Pincodes
                    </label>
                  </div>
                  <div className="col-md-9 add-product-form-control-container">
                    <textarea
                      className="form-control add-product-text-area"
                      name="pincodes"
                      id="pincodes"
                      rows="4"
                      value={pincodes}
                      onChange={handeChange}
                    ></textarea>
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.pincodes}
                    </p>
                  </div>
                </div>
                {/* ********** end of input ********** */}

                {/* ********** input ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="add-product-form-control-label"
                      htmlFor="returnable"
                    >
                      Returnable
                    </label>
                  </div>
                  <div className="col-md-9 add-product-form-control-container">
                    <div className="form-check form-check-inline mt-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="returnable"
                        value="true"
                        onChange={handeChange}
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="true radio">
                        True
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="returnable"
                        value="false"
                        onChange={handeChange}
                      />
                      <label className="form-check-label" htmlFor="false radio">
                        False
                      </label>
                    </div>
                  </div>
                </div>
                {/* ********** end of input ********** */}

                {/* ********** input ********** */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <label
                      className="add-product-form-control-label"
                      htmlFor="offer"
                    >
                      Offer
                    </label>
                  </div>
                  <div className="col-md-9 add-product-form-control-container">
                    <input
                      type="number"
                      className="form-control add-product-form-control"
                      name="offer"
                      id="offer"
                      value={offer}
                      onChange={handeChange}
                    />
                    <p className="text-danger mb-0 font-weight-bold">
                      {errors.offer}
                    </p>
                  </div>
                </div>
                {/* ********** end of input ********** */}

                {/* ********** input ********** */}
                <div className="row mt-5">
                  <div className="col-md-3"></div>
                  <div className="col-md-9 form-control-container">
                    <input
                      className="btn btn-pink btn-block w-50 mx-auto"
                      type="submit"
                      value="Add Product"
                    />
                  </div>
                </div>
                {/* ********** end of input ********** */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

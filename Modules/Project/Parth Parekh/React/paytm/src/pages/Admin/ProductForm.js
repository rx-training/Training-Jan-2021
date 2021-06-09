import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PaytmServices from "../../Services/paytmServices";
import { getUserId, getToken, removeUserSession } from "../../Utils/Common";
import AdminHeader from "./AdminHeader";

export default function ProductForm(props) {
    const { id } = useParams();
    const [message, setMessage] = useState("");
    const [category, setCateogry] = useState([]);

    const [values, setValues] = useState({
        ProductName: "",
        ProductCategory: "",
        ProductPrice: "",
        ProductType: "",
        Qty: "",
        Rating: "",
        featured: false,
        image: "",
        moreInfo: [],
        Spec: "",
    });

    useEffect(() => {
        async function Category() {
            try {
                const res = await PaytmServices.getCategory(
                    getUserId(),
                    getToken()
                );
                setCateogry(res.data);
                // console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        Category();

        if (id === "add") {
            return;
        } else {
            PaytmServices.getProductDetailsFromId(id)
                .then((res) => {
                    const data = res.data;
                    //console.log(data);
                    setValues({
                        ...values,
                        ProductName: data.ProductName,
                        ProductPrice: data.ProductPrice,
                        ProductType: data.ProductType,
                        ProductCategory: data.ProductCategory._id,
                        Qty: data.Qty,
                        Rating: data.Rating,
                        featured: data.featured,
                        Spec: data.Spec,
                        featured: data.featured,
                        image: data.image,
                        moreInfo: data.moreInfo,
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        setMessage("");
        let value =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;

        if (event.target.type === "file") {
            value = event.target.files;
        }

        setValues({ ...values, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (id === "add") {
            const formData = new FormData();
            formData.append("ProductName", values.ProductName);
            formData.append("ProductPrice", values.ProductPrice);
            formData.append("ProductType", values.ProductType);
            formData.append("ProductCategory", values.ProductCategory);
            formData.append("Qty", values.Qty);
            formData.append("Spec", values.Spec);
            formData.append("featured", values.featured);
            formData.append("Rating", values.Rating);
            formData.append("image", values.image[0]);

            for (const key of Object.keys(values.moreInfo)) {
                formData.append("moreInfo", values.moreInfo[key]);
            }

            PaytmServices.addProduct(getToken(), formData)
                .then((res) => {
                    //console.log(res.data);
                    props.history.push("/addProducts");
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        removeUserSession();
                        window.location.href = "/login";
                    } else if (error.response.status === 500) {
                        setMessage("Something Wrong !!");
                    } else if (error.response.status === 400) {
                        setMessage("bad request");
                    }
                });
        } else {
            const formData = new FormData();
            formData.append("ProductName", values.ProductName);
            formData.append("ProductPrice", values.ProductPrice);
            formData.append("ProductType", values.ProductType);
            formData.append("ProductCategory", values.ProductCategory);
            formData.append("Qty", values.Qty);
            formData.append("Spec", values.Spec);
            formData.append("featured", values.featured);
            formData.append("Rating", values.Rating);

            PaytmServices.updateProduct(id, getToken(), formData)
                .then((res) => {
                    //console.log(res.data);
                    props.history.push("/addProducts");
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        removeUserSession();
                        window.location.href = "/login";
                    } else if (error.response.status === 500) {
                        setMessage("Something Wrong !!");
                    }
                });
        }
    };
    const {
        ProductName,
        ProductCategory,
        ProductPrice,
        ProductType,
        Qty,
        Rating,
        featured,

        Spec,
    } = values;

    return (
        <div className="main-container">
            <AdminHeader />

            <div className="row m-2 p-2">
                <div
                    className="col-md-9 mx-auto border"
                    style={{
                        fontFamily: "verdana",
                        background: "#2996af38",
                    }}
                >
                    <h1 className="text-center">Product</h1>
                    <form
                        className="p-4 "
                        encType="mutlipart/form-data"
                        onSubmit={handleSubmit}
                    >
                        <div className="row my-2">
                            <div className="col-md-3 h5">Product Name</div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="ProductName"
                                    value={ProductName}
                                    placeholder="name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row my-2">
                            <div className="col-md-3 h5">Product Category</div>
                            <div className="col-md-8">
                                <select
                                    name="ProductCategory"
                                    className="custom-select"
                                    onChange={handleChange}
                                    value={ProductCategory}
                                    required
                                >
                                    <option defaultValue value="">
                                        Select Category
                                    </option>

                                    {category.map((cat) => {
                                        return (
                                            <option
                                                key={cat._id}
                                                value={cat._id}
                                            >
                                                {cat.CategoryName}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className="row my-2 ">
                            <div className="col-md-3 h5">Product Price</div>
                            <div className="col-md-8">
                                <input
                                    type="number"
                                    className="form-control"
                                    name="ProductPrice"
                                    value={ProductPrice}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row my-2">
                            <div className="col-md-3 h5">Product Type</div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="ProductType"
                                    value={ProductType}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row my-3 justify-content-around">
                            <div className="col-md-3">
                                <h5>Qty</h5>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="Qty"
                                    value={Qty}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-3">
                                <h5>Rating</h5>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="Rating"
                                    value={Rating}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-3">
                                <h5>Featured</h5>
                                <input
                                    type="checkbox"
                                    className="form-check"
                                    name="featured"
                                    onChange={handleChange}
                                    checked={featured}
                                    style={{ height: "18px", width: "18px" }}
                                />
                            </div>
                        </div>
                        {id === "add" && (
                            <div className="row my-2 justify-content-around">
                                <div className="col-md-4">
                                    <label className="h5">Product Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="image"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-4">
                                    <label className="h5">More Images</label>
                                    <input
                                        multiple
                                        type="file"
                                        className="form-control"
                                        name="moreInfo"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        )}
                        <div className="row">
                            <div className="col-md-4 h5">
                                Specifications or Size
                            </div>
                            <div className="col-md-8">
                                <textarea
                                    className="form-control"
                                    name="Spec"
                                    rows="3"
                                    value={Spec}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            {id === "add" ? (
                                <button className="btn btn-primary btn-lg my-3">
                                    Add Product
                                </button>
                            ) : (
                                <button className="btn btn-success btn-lg my-3">
                                    Edit Product
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

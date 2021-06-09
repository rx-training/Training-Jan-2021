import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import PaytmServices from "../../Services/paytmServices";
import { getToken, removeUserSession } from "../../Utils/Common";
import { GoPlus } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import FilterProductForm from "./FilterProductForm";

export default function AddProducts(props) {
    //const [product, setProducts] = useState([]);

    const [message, setMessage] = useState("");
    const [values, setValues] = useState({
        price: 0,
        min: 0,
        max: 0,
        category: "all",
    });
    const [search, setSearch] = useState("");
    const [productData, setProductData] = useState([]);
    const [difCat, setDifCat] = useState([]);
    const [filterItem, setFilterItem] = useState([]);

    /************      To Get Category All Data   ********************/
    useEffect(() => {
        async function getPro() {
            const tempData1 = await PaytmServices.getProduct();
            const data = tempData1.data;

            const tempData = data.map((item) => {
                let ProductCategory = item.ProductCategory.CategoryName;
                let {
                    _id,
                    ProductName,
                    ProductPrice,
                    ProductType,
                    featured,
                    Rating,
                    moreInfo,
                    Qty,
                    image,
                    Spec,
                } = item;
                let productData = {
                    ProductName,
                    ProductPrice,
                    ProductType,
                    featured,
                    Rating,
                    moreInfo,
                    Qty,
                    image,
                    Spec,
                    _id,
                    ProductCategory,
                };
                return productData;
            });

            setProductData(tempData);

            let maxPrice = Math.max(
                ...tempData.map((item) => item.ProductPrice)
            );

            let minPrice = Math.min(
                ...tempData.map((item) => item.ProductPrice)
            );

            setFilterItem(tempData);

            //For different products in dropdown list
            let cat = new Set();
            cat.add("all");
            for (let product in tempData) {
                cat.add(tempData[product]["ProductCategory"]);
            }
            cat = [...cat];
            //console.log(cat);

            setDifCat([...cat]);
            //console.log(difCat);

            setValues({
                ...values,
                price: maxPrice,
                min: minPrice,
                max: maxPrice,
            });
        }
        getPro();
    }, []);

    /************      Handle Change   ********************/
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        let tempData = [...productData];

        if (name === "search") {
            if (value.length > 0) {
                tempData = tempData.filter((item) => {
                    let tempSearch = value.toLocaleLowerCase();
                    let tempName = item.ProductName.toLocaleLowerCase().slice(
                        0,
                        value.length
                    );

                    if (tempSearch === tempName) {
                        return item;
                    }
                });
            }
            setSearch(value);
        }
        if (name === "category") {
            setValues({ ...values, category: value });
            if (value !== "all") {
                tempData = tempData.filter(
                    (item) => item.ProductCategory === value
                );
            }
        }
        if (name === "price") {
            //filter price
            tempData = tempData.filter((item) => item.ProductPrice <= value);
            setValues({ ...values, price: value });
        }
        setFilterItem(tempData);
    };

    /************      Handle Submit   ********************/
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    //handle delete
    const handleDelete = (id) => {
        PaytmServices.deleteProduct(id, getToken())
            .then((res) => {
                window.location.href = "/addProducts";
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    removeUserSession();
                    window.location.href = "/login";
                } else {
                    setMessage("Something wrong");
                }
            });
    };

    return (
        <div className="main-container">
            <AdminHeader />

            <div className="row">
                <div
                    className="col-md-11  mx-auto border border-primary my-3 bg-light"
                    style={{ fontFamily: "initial" }}
                >
                    <h1 className="text-center  p-2">
                        Products{" "}
                        <button
                            className="btn btn-primary p-2 m-2"
                            onClick={() => {
                                props.history.push(`/newproduct/add`);
                            }}
                        >
                            <GoPlus className="icons1" /> Add Product
                        </button>
                    </h1>

                    <FilterProductForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        price={values.price}
                        search={search}
                        min={values.min}
                        max={values.max}
                        difCat={difCat}
                        category={values.category}
                    />
                    <table className="table table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Product Name</th>
                                <th>Category Name</th>
                                <th>Product Price</th>

                                <th>Quantity</th>

                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterItem.length === 0 && (
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td className="h1">Product not found</td>
                                </tr>
                            )}
                            {filterItem.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.ProductName}</td>
                                        <td>{item.ProductCategory}</td>
                                        <td>{item.ProductPrice}</td>

                                        <td>{item.Qty}</td>

                                        <td>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => {
                                                    props.history.push(
                                                        `/newproduct/${item._id}`
                                                    );
                                                }}
                                            >
                                                <FaEdit /> Edit
                                            </button>
                                        </td>
                                        <td>
                                            {" "}
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => {
                                                    handleDelete(item._id);
                                                }}
                                            >
                                                <FaTrash /> Delete
                                            </button>{" "}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

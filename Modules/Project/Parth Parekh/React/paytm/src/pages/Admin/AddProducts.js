import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import PaytmServices from "../../Services/paytmServices";
import { getUserId, getToken, removeUserSession } from "../../Utils/Common";
import { GoPlus } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import FilterProductForm from "./FilterProductForm";
import { NotificationManager } from "react-notifications";

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
        PaytmServices.getAllUserData(getUserId(), getToken())
            .then((res) => {})
            .catch((error) => {
                if (error.response.status === 401) {
                    removeUserSession();
                    window.location.href = "/login";
                }
            });
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

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(10);

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const pages = [];
    for (let i = 1; i <= Math.ceil(filterItem.length / itemPerPage); i++) {
        pages.push(i);
    }
    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={
                        currentPage === number
                            ? "page-item page-link bg-primary text-white"
                            : "page-item page-link "
                    }
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    const indexofLastItem = currentPage * itemPerPage;
    const indexofFirstItem = indexofLastItem - itemPerPage;
    const currentItems = filterItem.slice(indexofFirstItem, indexofLastItem);

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    /************      Handle Change   ********************/
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        let tempData = [...productData];
        setCurrentPage(1);
        if (name === "search") {
            if (value.length > 0) {
                tempData = tempData.filter((item) => {
                    let tempSearch = value.toLowerCase();
                    let tempName = item.ProductName.toLowerCase().slice(
                        0,
                        value.length
                    );

                    if (tempSearch === tempName) {
                        return item;
                    }
                });
            }
            setSearch(value);
            setValues({ ...values, category: "", price: values.max });
        }
        if (name === "category") {
            setValues({ ...values, category: value, price: values.max });

            setSearch("");

            if (value !== "all") {
                tempData = tempData.filter(
                    (item) => item.ProductCategory === value
                );
            }
        }
        if (name === "price") {
            //filter price
            setSearch("");
            tempData = tempData.filter((item) => item.ProductPrice <= value);
            setValues({ ...values, price: value, category: "" });
        }
        setFilterItem(tempData);
    };

    /************      Handle Submit   ********************/
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    //handle delete
    const handleDelete = (id) => {
        let val = window.confirm(
            "Are you sure , you to want to delete this product ?"
        );
        if (val) {
            PaytmServices.deleteProduct(id, getToken())
                .then((res) => {
                    NotificationManager.success("Product Deleted successfully");
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
        }
    };

    return (
        <div className="main-container">
            <AdminHeader />

            <div className="row">
                <div
                    className="col-md-11 col-11 mx-auto border border-primary my-3 bg-light"
                    style={{ fontFamily: "initial" }}
                >
                    {message.length > 0 && (
                        <h3 className="text-center text-danger">{message}</h3>
                    )}
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
                    {filterItem.length === 0 ? (
                        <h1 className="text-center mt-4 text-danger">
                            Product Not Found
                        </h1>
                    ) : (
                        <>
                            <table className="table table-hover">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>No</th>
                                        <th>Product Name</th>
                                        <th>Category Name</th>
                                        <th>Product Price</th>
                                        <th>Quantity</th>

                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    {(currentPage - 1) *
                                                        itemPerPage +
                                                        index +
                                                        1}
                                                </td>
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
                                                            handleDelete(
                                                                item._id
                                                            );
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
                            {pages.length > 1 ? (
                                <ul
                                    className="pagination pagination-lg"
                                    style={{ cursor: "pointer" }}
                                >
                                    {currentPage === 1 ? (
                                        <li className="page-item page-link text-muted">
                                            {" "}
                                            Prev
                                        </li>
                                    ) : (
                                        <li
                                            className="page-item page-link"
                                            onClick={handlePrevBtn}
                                        >
                                            {" "}
                                            Prev
                                        </li>
                                    )}

                                    {renderPageNumbers}
                                    {currentPage === pages.length ? (
                                        <li className="page-item  page-link text-muted">
                                            {" "}
                                            Next
                                        </li>
                                    ) : (
                                        <li
                                            className="page-item page-link"
                                            onClick={handleNextBtn}
                                        >
                                            {" "}
                                            Next
                                        </li>
                                    )}
                                </ul>
                            ) : (
                                ""
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

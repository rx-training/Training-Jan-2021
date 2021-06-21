import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import PaytmServices from "../../Services/paytmServices";
import { hostServer } from "../../Services/paytmServices";

export default function AllProduct({ id }) {
    const [values, setValues] = useState({
        price: 0,
        min: 0,
        max: 0,
    });
    const [search, setSearch] = useState("");
    const [productData, setProductData] = useState([]);

    const [filterItem, setFilterItem] = useState([]);
    const [item1, setItem1] = useState([]);

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

            const allPro = tempData.filter((item) => {
                return item.ProductCategory === id;
            });
            let maxPrice = Math.max(...allPro.map((item) => item.ProductPrice));

            let minPrice = Math.min(...allPro.map((item) => item.ProductPrice));

            setItem1(allPro);
            setFilterItem(allPro);

            setValues({
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

        let tempData = [...item1];

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

    return (
        <div className="row">
            <div
                className="col-md-3 text-capitalize alert alert-success"
                style={{ fontFamily: "initial" }}
            >
                <h1>Sort by</h1>
                <form onSubmit={handleSubmit}>
                    <h4 className="mt-5">Search by name</h4>
                    <div className="form-group">
                        <input
                            type="text"
                            name="search"
                            value={search}
                            className="form-control"
                            placeholder="search by name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="h4">Price</span>
                        <span className="h4">{values.price}</span>
                    </div>

                    <div className="form-group">
                        <input
                            type="range"
                            name="price"
                            min={values.min}
                            max={values.max}
                            value={values.price}
                            className="form-control"
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
            <div className="col-md-8">
                <div className="row d-flex justify-content-around">
                    {filterItem.length === 0 && (
                        <h1
                            className="alert alert-primary"
                            style={{ fontFamily: "initial" }}
                        >
                            No Item Found !!
                        </h1>
                    )}
                    {filterItem.map((item, index) => {
                        return (
                            <div
                                className="card col-md-5 mt-1 text-muted p-4 hovereffect"
                                key={index}
                            >
                                <div className="mx-auto ">
                                    <img
                                        src={`${hostServer}/${item.image}`}
                                        alt={index}
                                        className=""
                                        height="230px"
                                    />
                                </div>

                                <h5> {item.ProductName}</h5>
                                <h5 className="mt-1 d-flex justify-content-between">
                                    <span>
                                        <FaRupeeSign /> {item.ProductPrice}{" "}
                                    </span>
                                    <div className="ratingbtn">
                                        {item.Rating}/5{" "}
                                        <AiFillStar
                                            style={{
                                                fontSize: "1.7rem",
                                                color: "yellow",
                                            }}
                                        />
                                    </div>
                                </h5>
                                <Link
                                    to={"/product/" + id + "/" + item._id}
                                    className="alert alert-info text-center rounded-pill "
                                >
                                    View more
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

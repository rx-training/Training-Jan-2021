import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Backbutton from "../Backbutton";
import PaytmServices from "../../Services/paytmServices";
import { hostServer } from "../../Services/paytmServices";

export default function AllCateProducts() {
    const [search, setSearch] = useState("");
    const [productData, setProductData] = useState([]);
    const [difCat, setDifCat] = useState([]);
    const [category, setCategory] = useState("");
    const [filterItem, setFilterItem] = useState([]);

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
            setFilterItem(tempData);
            let cat = new Set();
            cat.add("All Products");
            for (let product in tempData) {
                cat.add(tempData[product]["ProductCategory"]);
            }
            cat = [...cat];
            //console.log(cat);

            setDifCat([...cat]);
        }
        getPro();
    }, []);

    /************      Handle Change   ********************/
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCategory("");
        let tempData = [...productData];

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
        }
        if (name === "category") {
            setCategory(value);
            setSearch("");
            if (value !== "All Products") {
                tempData = tempData.filter(
                    (item) => item.ProductCategory === value
                );
            }
        }
        setFilterItem(tempData);
    };
    /************      Handle Submit   ********************/
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="main-container">
            <Backbutton />
            <form onSubmit={handleSubmit}>
                <div
                    className="row  d-flex justify-content-center text-capitalize mx-auto"
                    style={{ fontFamily: "initial" }}
                >
                    <div className="col-md-5 mx-3 p-2">
                        <h4 className=" text-info ">Search by name</h4>
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
                    </div>
                    <div className="col-md-3 mx-3 p-2">
                        <h4 className="text-info ">Category</h4>
                        <select
                            name="category"
                            onChange={handleChange}
                            className="custom-select"
                            value={category}
                        >
                            {difCat.map((cat, index) => {
                                return (
                                    <option value={cat} key={index}>
                                        {cat}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
            </form>
            {category.length > 0 ? (
                <h1 className="text-center text-info text-capitalize">
                    {category}
                </h1>
            ) : (
                ""
            )}

            <div className="row  p-3">
                {filterItem.length === 0 && (
                    <h1 className="alert alert-primary mx-auto">
                        No Item Found !!
                    </h1>
                )}

                {filterItem.map((item, index) => {
                    return (
                        <div className=" col-sm-6 col-md-3  p-2  " key={index}>
                            <div className="card p-3 text-muted  hovereffect">
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
                                    to={
                                        "/product/" +
                                        item.ProductCategory +
                                        "/" +
                                        item._id
                                    }
                                    className="alert alert-info text-center rounded-pill "
                                >
                                    View more
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

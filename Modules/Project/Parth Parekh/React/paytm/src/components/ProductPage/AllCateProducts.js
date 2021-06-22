import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import PaytmServices from "../../Services/paytmServices";
import { hostServer } from "../../Services/paytmServices";

export default function AllCateProducts() {
    const [search, setSearch] = useState("");
    const [productData, setProductData] = useState([]);

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
        setFilterItem(tempData);
    };
    /************      Handle Submit   ********************/
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="main-container">
            <div
                className="row d-flex justify-content-center text-capitalize"
                style={{ fontFamily: "initial" }}
            >
                <div className="col-md-5 mx-3 p-2">
                    <form onSubmit={handleSubmit}>
                        <h4 className="mt-5 text-info ">Search by name</h4>
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
                    </form>
                </div>
            </div>

            <div className="row d-flex justify-content-around p-3">
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

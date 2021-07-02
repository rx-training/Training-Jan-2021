import React from "react";
import { Link } from "react-router-dom";

import DisplayFeatured from "./DisplayFeatured";

export default function Electronics({ item }) {
    return (
        <div className=" bg-light p-md-4 m-5">
            <div className="row">
                <div className="col-9">
                    <img
                        src="https://assetscdn1.paytm.com/images/catalog/view/300930/1591791420896.jpg"
                        width="80"
                        className=" border rounded-circle"
                        alt="productsection"
                    />
                    <span className="fontInfo">Electronics Bestsellers</span>
                </div>
                <div className="col-2  d-flex justify-content-end align-items-center">
                    <button className="btn btn-primary">
                        <Link
                            to="/product/electronics"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            {" "}
                            View All{" "}
                        </Link>
                    </button>
                </div>
                <div className="col-1"></div>
            </div>

            <DisplayFeatured item={item} path="/product/electronics" />
        </div>
    );
}

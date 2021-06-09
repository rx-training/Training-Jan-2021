import React from "react";
import { Link } from "react-router-dom";

import DisplayFeatured from "./DisplayFeatured";

export default function Electronics({ item }) {
    return (
        <div className=" bg-light p-4 m-5">
            <div className="row">
                <div className="col-10">
                    <img
                        src="https://assetscdn1.paytm.com/images/catalog/view/300930/1591791420896.jpg"
                        width="80"
                        className=" border rounded-circle"
                        alt="productsection"
                    />
                    <span className="fontInfo">Electronics Bestsellers</span>
                </div>
                <div className="col-2">
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
            </div>

            <DisplayFeatured item={item} path="/product/electronics" />
        </div>
    );
}

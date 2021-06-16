import React from "react";
import { Link } from "react-router-dom";

import DisplayFeatured from "./DisplayFeatured";

export default function Mobiles({ item }) {
    return (
        <div className="bg-light p-4 m-5">
            <div className="row">
                <div className="col-10">
                    <img
                        src="https://assetscdn1.paytm.com/images/catalog/view/301625/1594810506111.png"
                        width="80"
                        alt="productsection"
                        className="border rounded-circle"
                    />
                    <span className="fontInfo">Mobile Bestsellers</span>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary">
                        <Link
                            to="/product/mobiles"
                            className="btn-style"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            {" "}
                            View All{" "}
                        </Link>
                    </button>
                </div>
            </div>

            <DisplayFeatured item={item} path="/product/mobiles" />
        </div>
    );
}

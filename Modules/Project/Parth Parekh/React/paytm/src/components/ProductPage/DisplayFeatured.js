import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Spinners from "../dummyPage/Spinners";
import { hostServer } from "../../Services/paytmServices";

export default function DisplayFeatured(props) {
    const item = props.item;
    const path = props.path;

    return (
        <div className="row mx-auto p-2 ">
            {item.length === 0 ? <Spinners /> : ""}

            {item.map((item, index) => {
                return (
                    <div
                        className="card col-md-6 col-lg-3  text-muted p-4 hovereffect"
                        key={index}
                    >
                        <div className="mx-auto ">
                            <img
                                src={`${hostServer}/${item.image}`}
                                alt={index}
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
                            to={path + "/" + item._id}
                            className="alert alert-info text-center rounded-pill "
                        >
                            View more
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

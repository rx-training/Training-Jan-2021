import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { getUserId, getToken } from "../../Utils/Common";
import PaytmServices from "../../Services/paytmServices";
import { hostServer } from "../../Services/paytmServices";
import Backbutton from "../Backbutton";

export default function SingleProduct(props) {
    const [imagePath, setImagePath] = useState("");

    const [product, setProduct] = useState({
        Spec: [],
        moreInfo: [],
    });
    let data = useParams();
    //To get Product Details Form Id
    useEffect(() => {
        PaytmServices.getProductDetailsFromId(data.productid).then((res) => {
            let data = res.data;
            //console.log(data);
            setProduct({ ...data, Spec: data.Spec.split(",") });
            setImagePath(data.moreInfo[0]);
        });
    }, []);

    const { ProductName, ProductPrice, Rating, Qty, _id, Spec } = product;

    //Buynow ,if user login then redirect to payment page otherwise redirect to login page
    const handleBuynow = (id) => {
        const userid = getUserId();
        const token = getToken();

        if (!userid || !token) {
            props.history.push("/login");
        } else {
            //console.log(userid);
            props.history.push(`/payment/${id}`);
        }
    };

    return (
        <div className="main-container">
            {/* Signle Product {data.id} {data.productid} */}
            <br />
            <div className="container-fluid">
                <Backbutton />
                <div className="row mx-4 bg-white">
                    <div className=" col-md-6 col-lg-7 ">
                        <div className="row p-md-3 mx-md-5">
                            <div className="col-md-2 col-lg-3 ">
                                {product.moreInfo.map((item, index) => {
                                    return (
                                        <div className="row" key={index}>
                                            <img
                                                src={`${hostServer}/${item}`}
                                                alt={item}
                                                width="50%"
                                                className="img-fluid my-1 singlehovereffect"
                                                onMouseOver={() => {
                                                    setImagePath(item);
                                                }}
                                                style={{
                                                    minHeight: "50px",
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className=" col-9 col-md-9  text-center">
                                <img
                                    src={`${hostServer}/${imagePath}`}
                                    alt={imagePath}
                                    style={{
                                        maxHeight: "500px",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-lg-5 mt-5 py-4 text-muted"
                        style={{
                            fontFamily: "initial",
                            letterSpacing: "3px",
                        }}
                    >
                        <h3>{ProductName}</h3>

                        <h4 className="mt-2">
                            <FaRupeeSign /> {ProductPrice}{" "}
                        </h4>
                        <h5 className="mt-2">
                            <div className="ratingbtn">
                                {Rating}/5{" "}
                                <AiFillStar
                                    style={{
                                        fontSize: "1.5rem",
                                        color: "yellow",
                                    }}
                                />
                            </div>
                        </h5>
                        <div className="my-3">
                            {Spec.length > 0 && (
                                <>
                                    {data.id === "mobiles" && (
                                        <h5 className="text-dark">
                                            Product Hightlights
                                        </h5>
                                    )}

                                    {data.id === "electronics" && (
                                        <h5 className="text-dark">
                                            Product HightLights
                                        </h5>
                                    )}

                                    {data.id === "fashion" && (
                                        <h5>Available Size</h5>
                                    )}
                                    <ul>
                                        {Spec.map((item, index) => {
                                            return <li key={index}>{item}</li>;
                                        })}
                                    </ul>
                                </>
                            )}
                        </div>
                        {Qty <= 0 ? (
                            <button
                                type="button"
                                className="p-3  btn btn-danger text-capitalize"
                                style={{ background: "#ef4e28" }}
                                disabled={true}
                            >
                                Out of Stock
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="p-3  btn btn-danger"
                                style={{ background: "#ef4e28" }}
                                onClick={() => {
                                    handleBuynow(_id);
                                }}
                            >
                                Buy Now <FaRupeeSign /> {ProductPrice}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

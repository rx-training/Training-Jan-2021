import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import singleProductImg from "../images/singleProductBcg.jpeg";
import { ProductConsumer } from "../context/Context";

export default function SingleProductPage() {
    return (
        <>
            <Hero img={singleProductImg} title="single product"></Hero>
            <ProductConsumer>
                {(value) => {
                    const { singleProduct, addTocart, loading } = value;

                    if (loading) {
                        return <h1>Product loading ...</h1>;
                    }
                    const { company, description, id, price, title, image } =
                        singleProduct;
                    return (
                        <section className="py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                                        <img
                                            src={`../${image}`}
                                            alt="singleProduct"
                                            className="img-fuild"
                                        ></img>
                                    </div>
                                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                                        <h5 className="text-title mb-4">
                                            model : {title}
                                        </h5>
                                        <h5 className="text-capitalize text-muted mb-4">
                                            company :{company}
                                        </h5>
                                        <h5 className="text-main text-capitalize mb-4">
                                            price : ${price}
                                        </h5>
                                        <p className="text-capitalize text-title mt-3">
                                            some info about product :
                                        </p>
                                        <p>{description}</p>
                                        <button
                                            type="button"
                                            className="main-link"
                                            style={{ margin: "0.75rem" }}
                                            onClick={() => addTocart(id)}
                                        >
                                            add to cart
                                        </button>
                                        <Link
                                            to="/products"
                                            className="main-link"
                                            style={{ margin: "0.75rem" }}
                                        >
                                            back to products
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                }}
            </ProductConsumer>
        </>
    );
}

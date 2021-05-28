import React from "react";
import {
    FaTrash,
    FaChevronCircleUp,
    FaChevronCircleDown,
} from "react-icons/fa";

export default function CartItem({
    cartItem,
    increment,
    decrement,
    removeItem,
}) {
    const { id, title, price, count, total, image } = cartItem;
    return (
        <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <img src={image} width="60" className="img-fluid" alt="cart" />
            </div>

            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">Product :</span>
                {title}
            </div>

            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">Price : </span>${price}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 ">
                <div className="d-flex justify-content-center">
                    <div>
                        <FaChevronCircleDown
                            className="text-primary cart-icon"
                            onClick={() => {
                                decrement(id);
                            }}
                        />
                    </div>
                    <span className="text-title text-muted mx-3">{count}</span>
                    <div>
                        <FaChevronCircleUp
                            className="text-primary cart-icon"
                            onClick={() => {
                                increment(id);
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2 ">
                <FaTrash
                    className="text-danger cart-icon"
                    onClick={() => removeItem(id)}
                />
            </div>

            <div className="col-10 mx-auto col-lg-2 ">
                <strong className="text-muted">Item Total : ${total} </strong>
            </div>
        </div>
    );
}

import React from "react";
import { ProductConsumer } from "../../context/Context";

export default function CartTotals() {
    return (
        <div className="container">
            <div className="row">
                <ProductConsumer>
                    {(value) => {
                        const { cartTotal, clearCart, cartSubTotal, cartTax } =
                            value;

                        return (
                            <div className="col text-title text-center my-4">
                                <button
                                    type="button"
                                    className="btn btn-outline-danger text-capitalize mb-4"
                                    onClick={clearCart}
                                >
                                    clear cart
                                </button>
                                <h3 className="">subtotal : ${cartSubTotal}</h3>
                                <h3>cart tax : ${cartTax}</h3>
                                <h3>total : ${cartTotal}</h3>
                            </div>
                        );
                    }}
                </ProductConsumer>
            </div>
        </div>
    );
}

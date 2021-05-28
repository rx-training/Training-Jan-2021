import React from "react";
import Title from "../Title";
import CartList from "./CartList";
import CartColumns from "./CartColumns";
import CartTotals from "./CartTotals";
export default function Cart() {
    return (
        <section className="py-5">
            {/* title */}
            <div className="container">
                <Title title="Your cart page items" center />
            </div>
            {/* cart columns */}
            <CartColumns />

            {/* cart list */}
            <CartList />
            <CartTotals />
        </section>
    );
}
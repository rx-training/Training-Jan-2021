import React from "react";
import { ProductConsumer } from "../../context/context";
import Title from "../Title";
import Product from "../Product";
import ProductFilter from "./ProductFilter";

const Products = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              {/* title */}
              <Title center title="our products" />
              {/* product filter */}
              <ProductFilter />
              {/* total count */}
              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    total products : {filteredProducts.length}
                  </h6>
                </div>
              </div>
              {/* products */}
              <div className="row py-5">
                {filteredProducts.length === 0 ? (
                  <div className="col text-title text-center">
                    sorry,no items matched your search
                  </div>
                ) : (
                  filteredProducts.map((product) => {
                    return <Product key={product.id} product={product} />;
                  })
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
};

export default Products;

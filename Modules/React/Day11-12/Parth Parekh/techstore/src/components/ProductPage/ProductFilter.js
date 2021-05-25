import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context/Context";
export default function ProductFilter() {
    return (
        <ProductConsumer>
            {(value) => {
                const {
                    search,
                    min,
                    max,
                    price,
                    company,
                    shipping,
                    handleChange,
                    storeProducts,
                } = value;

                //For different products in dropdown list
                let companies = new Set();
                companies.add("all");
                for (let product in storeProducts) {
                    companies.add(storeProducts[product]["company"]);
                }
                companies = [...companies];
                //console.log(companies);

                return (
                    <div className="row my-5">
                        <div className="col-10 mx-auto">
                            <FilterWrapper>
                                <div>
                                    {/* text */}
                                    <label htmlFor="search">
                                        search products
                                    </label>
                                    <input
                                        type="text"
                                        name="search"
                                        className="filter-item"
                                        onChange={handleChange}
                                        value={search}
                                    />
                                </div>

                                <div>
                                    {/* category search */}
                                    <label htmlFor="company">company</label>
                                    <select
                                        type="company"
                                        name="company"
                                        className="filter-item"
                                        onChange={handleChange}
                                        value={company}
                                    >
                                        {companies.map((company, index) => {
                                            return (
                                                <option
                                                    value={company}
                                                    key={index}
                                                >
                                                    {company}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <div>
                                    <label className="">
                                        product price : <span>${price}</span>
                                    </label>

                                    <input
                                        type="range"
                                        name="price"
                                        className="filter-item"
                                        onChange={handleChange}
                                        min={min}
                                        max={max}
                                        value={price}
                                    />
                                </div>

                                <div className="">
                                    <label htmlFor="shipping ml-2">
                                        free shipping
                                    </label>
                                    <input
                                        type="checkbox"
                                        name="shipping"
                                        className="ml-3"
                                        onChange={handleChange}
                                        checked={shipping && true}
                                    />
                                </div>
                            </FilterWrapper>
                        </div>
                    </div>
                );
            }}
        </ProductConsumer>
    );
}

const FilterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    label {
        font-weight: bold;
        text-transform: capitalize;
    }
    .filter-item {
        display: block;
        width: 100%;
        background: transparent;
        border-radius: 0.5rem;
        border: 2px solid var(--darkGrey);
    }
`;

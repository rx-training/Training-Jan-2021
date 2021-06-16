import React from "react";

export default function FilterProductForm(props) {
    const {
        handleSubmit,
        handleChange,
        search,
        price,
        min,
        max,
        difCat,
        category,
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div
                className="row d-flex justify-content-around"
                style={{ fontFamily: "initial" }}
            >
                <div className="col-md-3 text-capitalize ">
                    <h4 className="">Search by name</h4>
                    <div className="form-group">
                        <input
                            type="text"
                            name="search"
                            value={search}
                            className="form-control"
                            placeholder="search by name"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-md-3">
                    <h4>Category Name</h4>
                    <select
                        name="category"
                        onChange={handleChange}
                        className="custom-select"
                        value={category}
                    >
                        {difCat.map((cat, index) => {
                            return (
                                <option value={cat} key={index}>
                                    {cat}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="col-md-3">
                    <div className="d-flex justify-content-between">
                        <span className="h4">Price</span>
                        <span className="h4">{price}</span>
                    </div>

                    <div className="form-group">
                        <input
                            type="range"
                            name="price"
                            min={min}
                            max={max}
                            value={price}
                            className="form-control"
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}

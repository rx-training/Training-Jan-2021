import React from "react";

export default function FilterUserForm(props) {
    const {
        handleSubmit,
        handleChange,
        nameSearch,
        emailSearch,
        mobileSearch,
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div
                className="row d-flex justify-content-around my-3"
                style={{ fontFamily: "initial" }}
            >
                <div className="col-md-3 text-capitalize ">
                    <h4 className="">Search by name</h4>
                    <div className="form-group">
                        <input
                            type="text"
                            name="nameSearch"
                            value={nameSearch}
                            className="form-control"
                            placeholder="John Doe"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-md-3 text-capitalize ">
                    <h4 className="">Search by email</h4>
                    <div className="form-group">
                        <input
                            type="text"
                            name="emailSearch"
                            value={emailSearch}
                            className="form-control"
                            placeholder="xyz@gmail.com"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-md-3 text-capitalize ">
                    <h4 className="">Search by mobile no</h4>
                    <div className="form-group">
                        <input
                            type="text"
                            name="mobileSearch"
                            value={mobileSearch}
                            className="form-control"
                            placeholder=""
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}

import React from "react";
import { Spinner } from "reactstrap";

const Spinners = (props) => {
    return (
        <h1>
            <Spinner type="grow" color="primary" />
            <Spinner type="grow" color="secondary" />
            <Spinner type="grow" color="success" />
            <Spinner type="grow" color="danger" />
            <Spinner type="grow" color="warning" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="dark" />
        </h1>
    );
};

export default Spinners;

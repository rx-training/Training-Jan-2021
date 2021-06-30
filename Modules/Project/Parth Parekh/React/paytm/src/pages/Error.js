import React from "react";
import { FaRegSadTear } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Error() {
    return (
        <div className="main-container">
            <div className=" p-5 m-5">
                <div className="row justify-content-center align-items-center ">
                    <div className="alert alert-primary p-5 text-center text-monospace">
                        <h1 className="display-3">
                            <FaRegSadTear />
                        </h1>
                        <h1> 404</h1>
                        <h1>Page Not Found</h1>
                        <h3>
                            <Link to="/" className="textUnderline">
                                Back to home
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

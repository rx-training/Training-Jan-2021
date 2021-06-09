import React from "react";
import { serviceData } from "./ServiceData";
export default function Service() {
    return (
        <div className="bg-light p-4 m-5">
            <div className="row p-2 mx-auto text-muted">
                {serviceData.map((item, index) => {
                    return (
                        <div
                            className="col-md-3 text-center hover-effect"
                            key={index}
                        >
                            <h5
                                style={{
                                    fontSize: "2rem",
                                }}
                            >
                                {item.icon}
                            </h5>
                            <h5>{item.title}</h5>
                            <h6>{item.info}</h6>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

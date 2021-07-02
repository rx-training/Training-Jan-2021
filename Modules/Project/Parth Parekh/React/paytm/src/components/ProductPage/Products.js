import React from "react";
import { useParams } from "react-router-dom";

import Error from "../../pages/Error";
import AllProduct from "./AllProduct";

export default function Products() {
    let { id } = useParams();

    return (
        <div className="main-container">
            {id !== "electronics" && id !== "mobiles" && id !== "fashion" ? (
                <Error />
            ) : (
                ""
            )}
            <div className="mx-5">
                {id === "mobiles" && <AllProduct id={id} />}

                {id === "fashion" && <AllProduct id={id} />}

                {id === "electronics" && <AllProduct id={id} />}
            </div>
        </div>
    );
}

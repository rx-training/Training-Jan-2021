import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getToken } from "./Common";
export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                return getToken() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location },
                        }}
                    />
                );
            }}
        />
    );
}

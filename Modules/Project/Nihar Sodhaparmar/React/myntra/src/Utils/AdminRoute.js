import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken, isAdmin, removeUserSession } from "./Storage";

// handle the private routes
function AdminRoute({ component: Component, ...rest }) {
  if (getToken() && isAdmin() === true) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    removeUserSession();
    return (
      <Route
        {...rest}
        render={(props) => (
          <Redirect
            to={{
              pathname: "/dashboard/login",
              state: { from: props.location },
            }}
          />
        )}
      />
    );
  }

  // return (
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       getToken() && isAdmin() === true ? (
  //         <Component {...props} />
  //       ) : (
  //         <Redirect
  //           to={{ pathname: "/login", state: { from: props.location } }}
  //         />
  //       )
  //     }
  //   />
  // );
}

export default AdminRoute;

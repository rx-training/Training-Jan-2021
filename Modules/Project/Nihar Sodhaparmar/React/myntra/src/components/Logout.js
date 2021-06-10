import React, { useEffect } from "react";
import { getToken, removeUserSession } from "../Utils/Storage";

export default function Logout(props) {
  useEffect(() => {
    if (getToken()) {
      removeUserSession();
      props.history.push("/login");
    } else {
      props.history.push("/login");
    }
  });
  return <div>Logout</div>;
}

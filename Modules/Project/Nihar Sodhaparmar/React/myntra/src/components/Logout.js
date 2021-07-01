import React, { useEffect } from "react";
import { getToken, removeUserSession } from "../utils/Storage";
import { NotificationManager } from "react-notifications";

export default function Logout(props) {
  useEffect(() => {
    if (getToken()) {
      removeUserSession();
      props.history.push("/login");
      NotificationManager.error("Logged out successfully", "", 2000);
    } else {
      NotificationManager.error("Logged out successfully", "", 2000);
      props.history.push("/login");
    }
  });
  return <div>Logout</div>;
}

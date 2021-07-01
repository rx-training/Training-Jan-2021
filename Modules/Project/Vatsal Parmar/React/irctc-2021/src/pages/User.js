import React from "react";
import { getUser, removeUserSession } from "../Utils/Common";

const User = (props) => {
  const user = getUser();
  const handleLogout = () => {
    removeUserSession();
    window.location.href = "/";
  };
  const myBookings = () => {
    props.history.push(`user/bookings/${user.id}`);
  };
  const editProfile = () => {
    props.history.push(`/user/edit/${user.id}`);
  };
  return (
    <div style={{ minHeight: "70vh" }}>
      <div className="col-10 col-md-6 my-4 mx-auto">
        <h3 className="text-center p-2 bg-primary rounded-top mb-0">
          User Details
        </h3>
        <div className="border border-primary rounded-bottom p-3">
          <h5>
            Name : {user.first_name} {user.last_name}
          </h5>
          <h5>Email : {user.email}</h5>
          <h5>Mobile No : {user.mobile}</h5>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={myBookings}
            >
              My Bookings
            </button>
            <button
              className="btn btn-info"
              type="button"
              onClick={editProfile}
            >
              Edit Profile
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

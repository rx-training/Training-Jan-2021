import React from "react";

export default function ChangePassword({
  newPassword,
  confirmNewPassword,
  passwordsChange,
  passwordsBlur,
  changePassword,
  errors,
}) {
  return (
    <div className="login-container py-5">
      <div className="container bg-white p-0 mt-5" style={{ width: "360px" }}>
        <img
          src="https://constant.myntassets.com/pwa/assets/img/banner_login_landing_300.jpg"
          alt=""
          width="100%"
        />
        <div className="mx-4 mt-4">
          <form onSubmit={changePassword}>
            <div className="form-group mt-5">
              <label className="form-control-label" htmlFor="newPassword">
                New Password
              </label>
              <input
                className="form-control login-form-control"
                type="password"
                name="newPassword"
                id="newPassword"
                value={newPassword}
                onChange={passwordsChange}
                onBlur={passwordsBlur}
              />
              <p className="text-danger mb-0 font-weight-bold">
                {errors.newPassword}
              </p>
            </div>
            <div className="form-group">
              <label
                className="form-control-label"
                htmlFor="confirmNewPassword"
              >
                Confirm New Password
              </label>
              <input
                className="form-control login-form-control"
                type="password"
                name="confirmNewPassword"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={passwordsChange}
                onBlur={passwordsBlur}
              />
              <p className="text-danger mb-0 font-weight-bold">
                {errors.confirmNewPassword}
              </p>
            </div>
            <div className="pt-1"></div>
            <div className="mt-4">
              <input
                className="btn btn-block login-btn"
                type="submit"
                value="Change Password"
              />
            </div>
            <div style={{ paddingTop: "60px" }} className="mb-5"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

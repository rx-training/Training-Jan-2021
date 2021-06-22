import React from "react";

export default function OtpForm({
  userOtp,
  verifyOtp,
  otpError,
  userOtpChange,
}) {
  return (
    <div className="login-container py-5">
      <div className="container bg-white p-0 mt-5" style={{ width: "360px" }}>
        <img
          src="https://constant.myntassets.com/pwa/assets/img/banner_login_landing_300.jpg"
          alt=""
          width="100%"
        />
        <div className="mx-4 mt-3">
          <div
            className="text-center text-highlighted"
            style={{ fontSize: "25px", letterSpacing: "2px" }}
          >
            <span>Otp</span>
          </div>
          <form onSubmit={verifyOtp}>
            <div className="form-group mt-3">
              <label className="form-control-label" htmlFor="email">
                Enter Otp
              </label>
              <input
                className="form-control login-form-control"
                type="number"
                name="userOtp"
                id="userOtp"
                value={userOtp}
                onChange={userOtpChange}
              />
              <p className="text-danger mb-0 font-weight-bold">{otpError}</p>
              {/* <div className="text-muted mt-4 pt-1">
                By Continuing, I agree to the{" "}
                <span className="text-highlighted">Terms of Usage</span> &#38;{" "}
                <span className="text-highlighted">Privacy Policy</span>
              </div> */}
              <div className="mt-4">
                <input
                  className="btn btn-block login-btn"
                  type="submit"
                  value="Verify"
                />
              </div>
              <div style={{ paddingTop: "40px" }} className="mb-5"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

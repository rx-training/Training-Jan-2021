import React from "react";

const SideBar = () => {
  return (
    <div className="col-md-3">
      <div className="p-3 border border-dark">
        <strong>JOURNEY CLASS</strong>
      </div>
      <div className="p-3 border border-dark">
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              value="Anubhuti Class(EA)"
              id="EA"
            />
            Anubhuti Class
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              value="AC First Class(1A)"
              id="1A"
            />
            AC First Class(1A)
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              value="Exec. Chair Car (EC)"
              id="EC"
            />
            Exec. Chair Car (EC)
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              value="AC 2 Tier"
              id="AC2"
            />
            AC 2 Tier
          </label>
        </div>
      </div>

      <div className="p-3 border border-dark">
        <strong>TRAIN TYPE</strong>
      </div>
      <div className="p-3 border border-dark">
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              value="JANSHATABDI"
            />
            JANSHATABDI
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              value="SHATABDI"
            />
            SHATABDI
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              value="SPECIAL"
            />
            SPECIAL
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              value="SPECIAL TATKAL"
            />
            SPECIAL TATKAL
          </label>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

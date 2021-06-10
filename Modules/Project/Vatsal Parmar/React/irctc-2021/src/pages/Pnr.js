import React, { useState } from "react";

const Pnr = (props) => {
  const [pnr, setPnr] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/ticket/${pnr}`);
  };
  return (
    <div className="container" style={{ minHeight: "75vh" }}>
      <div>
        <h3 className="text-center">
          INDIAN RAILWAYS PASSENGER RESERVATION ENQUIRY
        </h3>
        <div className="col-md-8 mx-auto mt-5">
          <h3 className="text-center text-white bg-primary rounded-top p-2 mb-0">
            Passenger Enquiry
          </h3>
          <div className="p-3 border border-secondary rounded-bottom mb-5">
            <p>Enter the PNR for your booking below.</p>
            <div className="form-group row my-3">
              <label htmlFor="pnrNo" className="col-md-3">
                Enter PNR No.
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter PNR No."
                  onChange={(e) => {
                    setPnr(e.target.value);
                  }}
                  value={pnr}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-9">
                <button
                  className="btn btn-info"
                  type="button"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pnr;

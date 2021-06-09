import React, { useEffect, useState } from "react";
import TrainServices from "../../Services/TrainServices";
import loadingImg from "../../images/loading.gif";
import { removeUserSession } from "../../Utils/Common";

const TrainForm = (props) => {
  const id = props.match.params.id;
  const [train, setTrain] = useState({
    train_name: "",
    train_type: "",
    date: "",
  });
  const [errors, setErrors] = useState({ train_name: "" });
  const [days, setDays] = useState({
    M: false,
    T: false,
    W: false,
    Th: false,
    F: false,
    S: false,
    Sn: false,
  });
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [secondLoading, setSecondLoading] = useState(false);

  useEffect(() => {
    if (id !== "_add") {
      setSecondLoading(true);
      TrainServices.getTrainById(id)
        .then((res) => {
          setTrain({
            train_name: res.data.train_name,
            train_type: res.data.train_type,
            date: res.data.date.split("T")[0],
          });
          let trainD = res.data.days.split(" ");
          let d = {};
          for (let i = 0; i < trainD.length; i++) {
            let name = trainD[i];
            d = { ...d, [name]: true };
          }
          setDays({ ...days, ...d });
          setSecondLoading(false);
        })
        .catch((error) => {
          //setLoading(false);
          if (error.response.status === 401) {
            removeUserSession();
            window.location.href = "/login";
          }
        });
    }
  }, []);

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let error = errors;
    if (name === "train_name") {
      if (value.trim().length < 4) {
        error[name] = "must be at least 4 characters long!";
      } else {
        error[name] = "";
      }
      if (/[^a-zA-Z -]/.test(value)) {
        error[name] = "Invalid characters";
      }
    }
    setErrors({ ...errors, error });
    setTrain({ ...train, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let trainDays = `${days.M ? "M " : ""}${days.T ? "T " : ""}${
      days.W ? "W " : ""
    }${days.Th ? "Th " : ""}${days.F ? "F " : ""}${days.S ? "S " : ""}${
      days.Sn ? "Sn " : ""
    }`;
    if (validateForm(errors)) {
      setLoading(true);
      if (id === "_add") {
        if (trainDays) {
          TrainServices.addTrain({ ...train, days: trainDays })
            .then((res) => {
              if (res.data === "success") {
                setLoading(false);
                props.history.push("/dashboard");
              }
            })
            .catch((error) => {
              //setLoading(false);
              if (error.response.status === 401) {
                removeUserSession();
                window.location.href = "/login";
              }
              if (error.response.status === 400) {
                console.log(error.response.data);
              }
            });
        } else {
          TrainServices.addTrain({ ...train })
            .then((res) => {
              if (res.data === "success") {
                setLoading(false);
                props.history.push("/dashboard");
              }
            })
            .catch((error) => {
              //setLoading(false);
              if (error.response.status === 401) {
                removeUserSession();
                window.location.href = "/login";
              }
              if (error.response.status === 400) {
                console.log(error.response.data);
              }
            });
        }
      } else {
        TrainServices.editTrain(id, { ...train, days: trainDays })
          .then((res) => {
            if (res.data === "success") {
              setLoading(false);
              props.history.push("/dashboard");
            }
          })
          .catch((error) => {
            //setLoading(false);
            if (error.response.status === 401) {
              removeUserSession();
              window.location.href = "/login";
            }
            if (error.response.status === 400) {
              console.log(error.response.data);
            }
          });
      }
    } else {
      let error = "Enter Valid Details";
      setFormError(error);
    }
  };
  return (
    <div className="container">
      <div className="my-5 col-md-8 mx-auto">
        <h2 className="text-center p-3 heading-primary text-white rounded-top mb-0">
          Train
        </h2>
        {secondLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <img src={loadingImg} width="70%" alt="loading..." />
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-4 px-5 border border-secondary rounded-bottom"
          >
            <div className="form-group">
              <label htmlFor="train_name">Train Name :</label>
              <input
                type="text"
                id="train_name"
                name="train_name"
                className="form-control"
                placeholder="train name"
                onChange={handleChange}
                value={train.train_name}
                required
              />
              {errors.train_name.length > 0 && (
                <small className="text-danger">{errors.train_name}</small>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="fname">Train Type :</label>
              <select
                name="train_type"
                className="form-control"
                id="train_type"
                onChange={handleChange}
                value={train.train_type}
                required
              >
                <option value="">Select Train Type</option>
                <option value="REGULAR">Regular</option>
                <option value="EXPRESS">Express</option>
                <option value="SHATABDI">Shatabdi</option>
                <option value="SPECIAL">Special</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Date :</label>
              <input
                type="date"
                id="date"
                name="date"
                className="form-control"
                onChange={handleChange}
                value={train.date}
                // min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="days" className="d-block">
                Days :
              </label>
              <div className="form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="monday"
                  checked={days.M}
                  onChange={(e) => {
                    setDays({ ...days, M: e.target.checked });
                  }}
                  name="M"
                />
                <label className="form-check-label" htmlFor="monday">
                  Monday
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="tuesday"
                  checked={days.T}
                  onChange={(e) => {
                    setDays({ ...days, T: e.target.checked });
                  }}
                  name="T"
                />
                <label className="form-check-label" htmlFor="tuesday">
                  Tuesday
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wednessday"
                  checked={days.W}
                  onChange={(e) => {
                    setDays({ ...days, W: e.target.checked });
                  }}
                  name="W"
                />
                <label className="form-check-label" htmlFor="wednessday">
                  Wednessday
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="thursday"
                  checked={days.Th}
                  onChange={(e) => {
                    setDays({ ...days, Th: e.target.checked });
                  }}
                  name="TH"
                />
                <label className="form-check-label" htmlFor="thursday">
                  Thursday
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="friday"
                  checked={days.F}
                  onChange={(e) => {
                    setDays({ ...days, F: e.target.checked });
                  }}
                  name="F"
                />
                <label className="form-check-label" htmlFor="friday">
                  Friday
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="saturday"
                  name="S"
                  checked={days.S}
                  onChange={(e) => {
                    setDays({ ...days, S: e.target.checked });
                  }}
                />
                <label className="form-check-label" htmlFor="saturday">
                  Saturday
                </label>
              </div>
              <div className="form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="sunday"
                  checked={days.Sn}
                  onChange={(e) => {
                    setDays({ ...days, Sn: e.target.checked });
                  }}
                  name="Sn"
                />
                <label className="form-check-label" htmlFor="sunday">
                  Sunday
                </label>
              </div>
            </div>
            <button
              className={
                id === "_add" ? "btn btn-success w-25" : "btn btn-info w-25"
              }
            >
              {id === "_add" ? "Add" : "Update"}
            </button>
            {loading && <img src={loadingImg} alt="loading..." width="200px" />}
            {formError.length > 0 && (
              <p className="text-danger mt-2">{formError}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default TrainForm;

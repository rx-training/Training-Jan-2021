import React, { useState, useEffect } from "react";
import AdminNav from "../../components/Admin-Components/Navbar";
import TrainServices from "../../Services/TrainServices";
import loadingImg from "../../images/loading.gif";
import StatusList from "../../components/Admin-Components/Status/StatusList";
import { removeUserSession } from "../../Utils/Common";

const Status = (props) => {
  const [trainStatus, setTrainStatus] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    TrainServices.getTrainStatus()
      .then((res) => {
        setTrainStatus(res.data);
        setLoading(false);
      })
      .catch((error) => {
        //setLoading(false);
        if (error.response.status === 401) {
          removeUserSession();
          window.location.href = "/login";
        }
      });
  }, []);
  const deleteTrainStatus = (id) => {
    TrainServices.deleteTrainStatus(id)
      .then((res) => {
        if (res.data === "success") {
          window.location.reload();
        }
      })
      .catch((error) => {
        //setLoading(false);
        if (error.response.status === 401) {
          removeUserSession();
          window.location.href = "/login";
        }
      });
  };
  const editTrainStatus = (id) => {
    props.history.push(`/dashboard/status/${id}`);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <AdminNav />
        <div className="col-md-9">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center">
              <img src={loadingImg} width="60%" alt="loading..." />
            </div>
          ) : (
            <div>
              <StatusList
                trainStatus={trainStatus}
                deleteTrainStatus={deleteTrainStatus}
                editTrainStatus={editTrainStatus}
              />
              <button
                className="btn btn-lg btn-success mb-3"
                type="button"
                onClick={() => props.history.push("/dashboard/status/_add")}
              >
                Add Class
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Status;

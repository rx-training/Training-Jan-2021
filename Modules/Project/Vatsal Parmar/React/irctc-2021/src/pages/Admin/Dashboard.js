import React, { useEffect, useState } from "react";
import AdminNav from "../../components/Admin-Components/Navbar";
import TrainServices from "../../Services/TrainServices";
import loadingImg from "../../images/loading.gif";
import Trains from "../../components/Admin-Components/Trains/Trains";
import { removeUserSession } from "../../Utils/Common";

const Dashboard = (props) => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    TrainServices.getTrains()
      .then((res) => {
        setTrains(res.data);
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

  const deleteTrain = (id) => {
    TrainServices.deleteTrain(id)
      .then((res) => {
        if (res.data === "Train Record Deleted Successfully") {
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
  const editTrain = (id) => {
    props.history.push(`/dashboard/trains/${id}`);
  };
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <img src={loadingImg} width="70%" alt="loading..." />
        </div>
      ) : (
        <div className="container-fluid" style={{ minHeight: "72vh" }}>
          <div className="row mt-3 mb-2">
            <AdminNav active="trains" />
            <div className="col-md-9">
              <Trains
                trains={trains}
                deleteTrain={deleteTrain}
                editTrain={editTrain}
              />
              <button
                className="btn btn-success btn-lg mb-3"
                type="button"
                onClick={() => props.history.push("/dashboard/trains/_add")}
              >
                Add Trains
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;

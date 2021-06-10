import React, { useState, useEffect } from "react";
import AdminNav from "../../components/Admin-Components/Navbar";
import TrainServices from "../../Services/TrainServices";
import loadingImg from "../../images/loading.gif";
import RoutesList from "../../components/Admin-Components/TrainRoutes/RoutesList";
import { removeUserSession } from "../../Utils/Common";

const TrainRoutes = (props) => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    TrainServices.getRoutes()
      .then((res) => {
        setRoutes(res.data);
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
  const deleteRoute = (id) => {
    TrainServices.deleteTrainRoute(id)
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
  const editRoute = (id) => {
    props.history.push(`/dashboard/train-routes/${id}`);
  };
  return (
    <div className="container-fluid" style={{ minHeight: "72vh" }}>
      <div className="row mt-3 mb-2">
        <AdminNav active="routes" />
        <div className="col-md-9">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center">
              <img src={loadingImg} width="60%" alt="loading..." />
            </div>
          ) : (
            <div>
              <RoutesList
                routes={routes}
                deleteRoute={deleteRoute}
                editRoute={editRoute}
              />
              <button
                className="btn btn-lg btn-success mb-3"
                type="button"
                onClick={() =>
                  props.history.push("/dashboard/train-routes/_add")
                }
              >
                Add Routes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainRoutes;

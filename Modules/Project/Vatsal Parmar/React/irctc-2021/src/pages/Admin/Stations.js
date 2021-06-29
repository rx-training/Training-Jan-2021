import React, { useState, useEffect } from "react";
import AdminNav from "../../components/Admin-Components/Navbar";
import TrainServices from "../../Services/TrainServices";
import loadingImg from "../../images/loading.gif";
import StationList from "../../components/Admin-Components/Stations/StationList";
import { removeUserSession } from "../../Utils/Common";

const Stations = (props) => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    TrainServices.getStations()
      .then((res) => {
        setStations(res.data);
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
  const deleteStation = (id) => {
    if (window.confirm("Are you sure you want delete this record ?")) {
      TrainServices.deleteStation(id)
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
    }
  };
  const editStation = (id) => {
    props.history.push(`/dashboard/stations/${id}`);
  };
  return (
    <div className="container-fluid" style={{ minHeight: "72vh" }}>
      <div className="row mt-3 mb-2">
        <AdminNav active="stations" />
        <div className="col-md-9">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center">
              <img src={loadingImg} width="60%" alt="loading..." />
            </div>
          ) : (
            <div>
              <StationList
                stations={stations}
                deleteStation={deleteStation}
                editStation={editStation}
              />
              <button
                className="btn btn-lg btn-success mb-3"
                type="button"
                onClick={() => props.history.push("/dashboard/stations/_add")}
              >
                Add Station
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stations;

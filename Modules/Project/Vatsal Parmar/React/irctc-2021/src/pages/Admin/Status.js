import React, { useState, useEffect } from "react";
import AdminNav from "../../components/Admin-Components/Navbar";
import TrainServices from "../../Services/TrainServices";
import loadingImg from "../../images/loading.gif";
import StatusList from "../../components/Admin-Components/Status/StatusList";
import { removeUserSession } from "../../Utils/Common";
import { FaSearch } from "react-icons/fa";

const Status = (props) => {
  const [trainStatus, setTrainStatus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    TrainServices.getTrainStatus()
      .then((res) => {
        setTrainStatus(res.data);
        setFilteredData(res.data);
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
    if (window.confirm("Are you sure you want delete this record ?")) {
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
    }
  };
  const editTrainStatus = (id) => {
    props.history.push(`/dashboard/status/${id}`);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length > 0) {
      let data = trainStatus.filter((item) => {
        let searchQuery = value.toLowerCase();
        let trainName = item.train.train_name
          .toLowerCase()
          .slice(0, value.length);

        if (searchQuery === trainName) {
          return item;
        }
      });
      setFilteredData(data);
    } else {
      setFilteredData(trainStatus);
    }
    setSearch(value);
    // console.log(search);
  };

  return (
    <div className="container-fluid" style={{ minHeight: "72vh" }}>
      <div className="row mt-3 mb-2">
        <AdminNav active="status" />
        <div className="col-md-9">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center">
              <img src={loadingImg} width="60%" alt="loading..." />
            </div>
          ) : (
            <div>
              <div className="input-group  mt-3 mt-md-0 mb-3 col-md-6 mx-auto">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FaSearch />
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="train name"
                  value={search}
                  onChange={handleChange}
                />
              </div>
              <StatusList
                trainStatus={filteredData}
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

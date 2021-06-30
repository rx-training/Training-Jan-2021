import React, { useEffect, useState } from "react";
import AdminNav from "../../components/Admin-Components/Navbar";
import TrainServices from "../../Services/TrainServices";
import loadingImg from "../../images/loading.gif";
import Trains from "../../components/Admin-Components/Trains/Trains";
import { removeUserSession } from "../../Utils/Common";
import { FaSearch } from "react-icons/fa";

const Dashboard = (props) => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    TrainServices.getTrains()
      .then((res) => {
        setTrains(res.data);
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

  const deleteTrain = (id) => {
    if (window.confirm("Are you sure you want delete this record ?")) {
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
    }
  };
  const editTrain = (id) => {
    props.history.push(`/dashboard/trains/${id}`);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length > 0) {
      let data = trains.filter((item) => {
        let searchQuery = value.toLowerCase();
        let trainName = item.train_name.toLowerCase().slice(0, value.length);

        if (searchQuery === trainName) {
          return item;
        }
      });
      setFilteredData(data);
    } else {
      setFilteredData(trains);
    }
    setSearch(value);
    // console.log(search);
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
              <Trains
                trains={filteredData}
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

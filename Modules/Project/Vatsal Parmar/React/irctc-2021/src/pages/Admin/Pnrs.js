import React, { useState, useEffect } from "react";
import AdminNav from "../../components/Admin-Components/Navbar";
import TrainServices from "../../Services/TrainServices";
import loadingImg from "../../images/loading.gif";
import PnrList from "../../components/Admin-Components/Pnrs/PnrList";
import { removeUserSession } from "../../Utils/Common";
import { FaSearch } from "react-icons/fa";

const Pnrs = (props) => {
  const [pnrs, setPnrs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setLoading(true);
    TrainServices.getAllPnrs()
      .then((res) => {
        setPnrs(res.data);
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
  const viewPnr = (id) => {
    props.history.push(`pnrs/${id}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length > 0) {
      let data = pnrs.filter((item) => {
        let searchQuery = value.toLowerCase();
        let name = item.user_id.first_name + " " + item.user_id.last_name;
        name = name.toLowerCase().slice(0, value.length);

        if (searchQuery === name) {
          return item;
        }
      });
      setFilteredData(data);
    } else {
      setFilteredData(pnrs);
    }
    setSearch(value);
    // console.log(search);
  };

  // console.log(pnrs);

  return (
    <div className="container-fluid" style={{ minHeight: "72vh" }}>
      <div className="row mt-3 mb-2">
        <AdminNav active="pnrs" />
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
                  placeholder="user name"
                  value={search}
                  onChange={handleChange}
                />
              </div>
              <PnrList pnrs={filteredData} viewPnr={viewPnr} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pnrs;

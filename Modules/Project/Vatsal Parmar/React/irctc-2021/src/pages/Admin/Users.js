import React, { useState, useEffect } from "react";
import AdminNav from "../../components/Admin-Components/Navbar";
import TrainServices from "../../Services/TrainServices";
import loadingImg from "../../images/loading.gif";
import UserList from "../../components/Admin-Components/Users/UserList";
import { removeUserSession } from "../../Utils/Common";
import { FaSearch } from "react-icons/fa";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    TrainServices.getUsers()
      .then((res) => {
        setUsers(res.data);
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

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want delete this record ?")) {
      TrainServices.deleteUser(id)
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

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length > 0) {
      let data = users.filter((item) => {
        let searchQuery = value.toLowerCase();
        let name = item.first_name + " " + item.last_name;
        name = name.toLowerCase().slice(0, value.length);

        if (searchQuery === name) {
          return item;
        }
      });
      setFilteredData(data);
    } else {
      setFilteredData(users);
    }
    setSearch(value);
    // console.log(search);
  };

  return (
    <div className="container-fluid" style={{ minHeight: "72vh" }}>
      <div className="row mt-3 mb-2">
        <AdminNav active="users" />
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
                  placeholder="jhon doe"
                  value={search}
                  onChange={handleChange}
                />
              </div>
              <UserList users={filteredData} deleteUser={deleteUser} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;

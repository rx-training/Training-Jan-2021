import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loading from "../../components/Loading";
import { getToken, removeUserSession } from "../../utils/Storage";
import CustomerService from "../../services/CustomerService";
import UserRow from "../components/UsersPage/UserRow";
import { NotificationManager } from "react-notifications";

export default function UsersPage(props) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [filterData, setFilterData] = useState({
    filterValue: "",
  });

  async function getData() {
    try {
      setLoading(true);
      let users = await CustomerService.getAllCustomers(getToken());
      setUsers(users.data);
      setData(users.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response.status === 403 || error.response.status === 401) {
        props.history.push("/dashboard/login");
        removeUserSession();
      }
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const filterDataChange = (event) => {
    const { name, value } = event.target;

    let filteredUsers = users;

    if (value.length > 0) {
      filteredUsers = filteredUsers.filter((user) => {
        let tempSearch = value.toLowerCase();
        let tempName = user.customerName
          .toLowerCase()
          .slice(0, tempSearch.length);
        let tempEmail = user.email.toLowerCase().slice(0, tempSearch.length);
        let tempContactNumber = user.contactNumber
          .toLowerCase()
          .slice(0, tempSearch.length);

        if (
          tempSearch === tempName ||
          tempSearch === tempEmail ||
          tempSearch === tempContactNumber
        ) {
          return user;
        }

        return null;
      });
    }

    setFilterData({ ...filterData, [name]: value });
    setData(filteredUsers);
    setCurrentPage(1);
  };

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure, you want to delete?")) {
      try {
        setLoading(true);
        await CustomerService.deleteCustomer(id, getToken());
        NotificationManager.error("User deleted successfully", "", 2000);
        setCurrentPage(1);
        getData();
        setLoading(false);
      } catch (error) {
        if (error.response.status === 401) {
          removeUserSession();
          props.history.push("/dashboard/login");
        }
        setLoading(false);
      }
    }
  };

  // *************** PAGINATION ***************
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [pageNumberLimit] = useState(25);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(25);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          onClick={() => handleClick(number)}
          className={`page-item  ${currentPage === number ? "active" : null}`}
        >
          <div className="page-link">{number}</div>
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextBtnClick = () => {
    if (currentPage !== pages[pages.length - 1]) {
      setCurrentPage(currentPage + 1);

      if (currentPage + 1 > maxPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  };

  const handlePreviousBtnClick = () => {
    if (currentPage !== pages[0]) {
      setCurrentPage(currentPage - 1);

      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li className="page-item">
        <span className="page-link" onClick={handleNextBtnClick}>
          &hellip;
        </span>
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= pageNumberLimit) {
    pageDecrementBtn = (
      <li className="page-item">
        <span className="page-link" onClick={handlePreviousBtnClick}>
          &hellip;
        </span>
      </li>
    );
  }
  // *************** END OF PAGINATION ***************

  const { filterValue } = filterData;

  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col col-md-3 col-lg-2">
            <div className="form-group mt-2">
              <label className="form-control-label mb-1" htmlFor="filterValue">
                Search By Name / E-mail / Contact Number
              </label>
              <input
                type="search"
                className="form-control"
                id="filterValue"
                name="filterValue"
                value={filterValue}
                onChange={filterDataChange}
              />
            </div>
          </div>
          <div className="col col-md-9 col-lg-10">
            <table className="table table-hover table-bordered bg-white table-striped">
              <thead className="thead-dark">
                <tr>
                  <th className="text-center" style={{ letterSpacing: "2px" }}>
                    No.
                  </th>
                  <th className="text-spacing">Name</th>
                  <th className="text-spacing">E-mail</th>
                  <th className="text-spacing">Contact number</th>
                  <th className="text-spacing text-center">Orders</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((user, index) => {
                  return (
                    <UserRow
                      user={user}
                      key={user._id}
                      index={(currentPage - 1) * itemsPerPage + index}
                      deleteUser={deleteUser}
                    />
                  );
                })}
              </tbody>
            </table>

            {/* *************** PAGINATION *************** */}
            <div className="pt-2">
              <ul className="pagination">
                <li
                  className={`page-item ${
                    currentPage === pages[0] ? "disabled" : null
                  }`}
                >
                  <span className="page-link" onClick={handlePreviousBtnClick}>
                    Previous
                  </span>
                </li>

                {pageDecrementBtn}

                {renderPageNumbers}

                {pageIncrementBtn}

                <li
                  className={`page-item ${
                    currentPage === pages[pages.length - 1] ? "disabled" : null
                  }`}
                >
                  <span className="page-link" onClick={handleNextBtnClick}>
                    Next
                  </span>
                </li>
              </ul>
            </div>
            {/* *************** END OF PAGINATION *************** */}
          </div>
        </div>
      </div>
    </>
  );
}

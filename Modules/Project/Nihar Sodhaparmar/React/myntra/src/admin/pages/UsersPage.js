import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Loading from "../../components/Loading";
import { getToken, removeUserSession } from "../../utils/Storage";
import CustomerService from "../../services/CustomerService";
import UserRow from "../components/UsersPage/UserRow";

export default function UsersPage(props) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  async function getData() {
    try {
      setLoading(true);
      let users = await CustomerService.getAllCustomers(getToken());
      setUsers(users.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response.status === 403 || error.response.status === 401) {
        props.history.push("/login");
        removeUserSession();
      }
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure, you want to delete?")) {
      try {
        setLoading(true);
        await CustomerService.deleteCustomer(id, getToken());
        getData();
        setLoading(false);
      } catch (error) {
        if (error.response.status === 401) {
          removeUserSession();
          props.history.push("/login");
        }
        setLoading(false);
      }
    }
  };

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
      <div className="container py-4">
        <h1 className="text-center pb-3">Users</h1>
        <table className="table table-hover table-bordered bg-white table-striped">
          <thead className="thead-dark">
            <tr>
              <th className="text-center" style={{ letterSpacing: "2px" }}>
                No.
              </th>
              <th style={{ letterSpacing: "2px" }}>Name</th>
              <th style={{ letterSpacing: "2px" }}>E-mail</th>
              <th style={{ letterSpacing: "2px" }}>Contact number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <UserRow
                  user={user}
                  key={user._id}
                  index={index}
                  deleteUser={deleteUser}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

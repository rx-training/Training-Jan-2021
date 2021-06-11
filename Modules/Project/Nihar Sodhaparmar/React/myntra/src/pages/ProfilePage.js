import React, { useEffect, useState } from "react";
import { getUserId, removeUserSession, getToken } from "../Utils/Storage";
import CustomerService from "../services/CustomerService";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

export default function ProfilePage(props) {
  const [user, setUser] = useState({
    customerName: "",
    email: "",
    contactNumber: "",
    gender: "",
    address: { addressLine1: "", addressLine2: "", pincode: "" },
  });
  const [loading, setLoading] = useState(false);

  const id = getUserId();

  useEffect(() => {
    // console.log("in useeffect");
    async function getData() {
      try {
        setLoading(true);
        let token = getToken();
        let res = await CustomerService.getCustomerById(id, token);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        if (error.response.status === 401) {
          props.history.push("/login");
          removeUserSession();
        }
        console.error(error);
        setLoading(false);
      }
    }

    getData();
  }, [id]);

  const handleLogout = () => {
    removeUserSession();
    props.history.push("/");
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  }

  const { customerName, email, contactNumber, gender, address } = user;
  const { addressLine1, addressLine2, pincode, city, state, country } = address;

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text-center pt-4 category-header text-capitalize">
          profile details
        </div>

        <table id="profileDataTable" className="table mx-auto mt-5 w-50">
          <tbody>
            <tr>
              <td className="text-uppercase">full name</td>
              <td className="text-capitalize">{customerName}</td>
            </tr>
            <tr>
              <td className="text-uppercase">email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td className="text-uppercase">contact number</td>
              <td className="text-capitalize">{contactNumber}</td>
            </tr>
            <tr>
              <td className="text-uppercase">gender</td>
              <td className="text-capitalize">{gender}</td>
            </tr>
            <tr>
              <td className="text-uppercase">address</td>
              <td className="text-capitalize">
                <p>{addressLine1},</p>
                <p>
                  {addressLine2}, {pincode}
                </p>
                <p>
                  {city}, {state}, {country}
                </p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <div className="w-25 mx-auto my-5">
          <button className="btn btn-pink btn-block" onClick={handleLogout}>
            LOGOUT
          </button>
        </div>
      </div>
    </>
  );
}

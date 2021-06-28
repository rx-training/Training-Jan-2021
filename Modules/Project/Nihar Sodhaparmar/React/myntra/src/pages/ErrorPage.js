import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import AdminNavbar from "../admin/components/Navbar";
import { isAdmin } from "../utils/Storage";

export default function ErrorPage() {
  return (
    <>
      {isAdmin() ? <AdminNavbar /> : <Navbar />}

      <div className="container-fluid py-5">
        <div className="text-center mx-auto error-container p-5">
          <div className="rounded px-5">
            <h1 className="font-weight-bold">404</h1>
            <div className="underline"></div>
            <h2 className="text-capitalize my-4 font-weight-bold">
              page not found
            </h2>
            <Link to="/" className="btn btn-pink btn-lg text-capitalize my-2">
              back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

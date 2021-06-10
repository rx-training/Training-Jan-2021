import React from "react";

export default function EmptyBanner({ title }) {
  return (
    <div className="container-fluid py-5">
      <div className="error-container my-5 text-center p-5 mx-auto">
        <h1 className="text-capitalize text-center ">{title}</h1>
      </div>
    </div>
  );
}

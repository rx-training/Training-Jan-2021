import React from "react";

export default function Title({ title }) {
  return (
    <div className="container-fluid">
      <div className="deals_header text-uppercase">{title}</div>
    </div>
  );
}

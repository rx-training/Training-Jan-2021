import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function Loading() {
  return (
    <div className="mx-auto py-5" style={{ width: "fit-content" }}>
      <ScaleLoader color="#ff3f6c" height="40px" width="5px" />
    </div>
  );
}

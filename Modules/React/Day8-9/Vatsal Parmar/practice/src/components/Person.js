import React from "react";

export default function Person({ person: { img, name, age, info } }) {
  return (
    <div className="text-center p-3 m-2 bg-secondary text-white rounded col-md-4 mx-auto">
      <img src={img} alt="person" className="rounded" />
      <h4>Name : {name}</h4>
      <h4>Age : {age}</h4>
      <h4>Info :{info || "Default Info"}</h4>
    </div>
  );
}

import React from "react";
import Category from "./Category";

export default function CategoriesList({ categoriesToBag }) {
  return (
    <div className="container-fluid mb-5">
      <div className="row">
        {categoriesToBag.map((categoryToBag) => {
          return (
            <Category key={categoryToBag._id} categoryToBag={categoryToBag} />
          );
        })}
      </div>
    </div>
  );
}

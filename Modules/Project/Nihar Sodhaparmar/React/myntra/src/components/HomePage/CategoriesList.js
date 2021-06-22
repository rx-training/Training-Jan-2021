import React from "react";
import Category from "./Category";

const categories = [
  {
    id: 1,
    categoryName: "shirt",
    title: "shirts",
    image: "./images/shirt2.jpg",
  },
  {
    id: 2,
    categoryName: "t-shirt",
    title: "t-shirts",
    image: "./images/t-shirt.jpg",
  },
  {
    id: 3,
    categoryName: "jeans",
    title: "jeans",
    image: "./images/jeans.jpg",
  },
  {
    id: 4,
    categoryName: "trouser",
    title: "trousers",
    image: "./images/trousers.jpg",
  },
  {
    id: 5,
    categoryName: "shoes",
    title: "casual shoes",
    image: "./images/shoes.jpg",
  },
  {
    id: 6,
    categoryName: "infant-essentials",
    title: "infant essentials",
    image: "./images/infant-essentials.jpg",
  },
  {
    id: 7,
    categoryName: "kurta",
    title: "kurtas & Kurtasets",
    image: "./images/kurta-sets.jpg",
  },
  {
    id: 8,
    categoryName: "saree",
    title: "sarees",
    image: "./images/saree-bag.jpg",
  },
  {
    id: 9,
    categoryName: "dress",
    title: "dresses",
    image: "./images/dress-bag.jpg",
  },
  {
    id: 10,
    categoryName: "heels",
    title: "flats & heels",
    image: "./images/heels.jpg",
  },
  {
    id: 11,
    categoryName: "handbag",
    title: "handbags",
    image: "./images/handbags.jpg",
  },
  {
    id: 12,
    categoryName: "shorts",
    title: "shorts",
    image: "./images/shorts.jpg",
  },
];

export default function CategoriesList() {
  return (
    <div className="container-fluid mb-5">
      <div className="row">
        {categories.map((category) => {
          return <Category key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
}

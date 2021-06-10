import React from "react";

export default function OfferImage({ image }) {
  return (
    <section>
      <div className="container-fluid">
        <img className="px-2 py-3" src={image} alt="offer" width="100%" />
      </div>
    </section>
  );
}

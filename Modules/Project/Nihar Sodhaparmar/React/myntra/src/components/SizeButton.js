import React from "react";

export default function SizeButton({ size, selected, setSelectedSize }) {
  return (
    <button
      className={`size-button m-2 ${
        selected ? "size-button-selected" : null
      } text-uppercase`}
      onClick={() => setSelectedSize(size)}
    >
      {size}
    </button>
  );
}

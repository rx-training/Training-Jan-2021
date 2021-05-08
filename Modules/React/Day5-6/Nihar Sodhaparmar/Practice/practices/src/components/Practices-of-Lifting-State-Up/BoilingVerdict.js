import React from "react";

export default function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return (
      <p className="mt-3 text-success font-weight-bold">
        The water would boil.
      </p>
    );
  } else {
    return (
      <p className="mt-3 text-danger font-weight-bold">
        The water would not boil.
      </p>
    );
  }
}

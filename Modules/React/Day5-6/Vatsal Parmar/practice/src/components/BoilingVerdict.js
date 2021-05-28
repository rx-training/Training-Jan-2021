import React from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return (
      <p className="text-success">
        <b>The water would boil.</b>
      </p>
    );
  }
  return (
    <p className="text-danger">
      <b>The water would not boil.</b>
    </p>
  );
}

export default BoilingVerdict;

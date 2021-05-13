import React from "react";
import PropTypes from "prop-types";

const Person = (props) => {
  const { img, name, age, info } = props.person;
  return (
    <article className="col-md-6 col-lg-3">
      <div className="text-center my-5 card w-75 mx-auto">
        <img className="d-block" src={img} alt="person" />
        <div className="card-body">
          <h4>{name}</h4>
          <h5>{age}</h5>
          <h6 className="text-muted">{info || "default info"}</h6>
        </div>
      </div>
    </article>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired,
  }),
};

Person.defaultProps = {};

export default Person;

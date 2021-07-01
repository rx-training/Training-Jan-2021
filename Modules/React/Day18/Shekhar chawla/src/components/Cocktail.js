import React from "react";
import { Link } from 'react-router-dom'

export default function Cocktail({ cocktail }) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={cocktail.image} alt={cocktail.info} ></img>
        <div className="coctail-footer">
          <h3>{cocktail.name}</h3>
          <h4>{cocktail.glass}</h4>
          <p>{cocktail.info}</p>
          <Link to={`/cocktail/${cocktail.id}`} className="btn btn-primary btn-details">
            details
          </Link>
        </div>
      </div>
    </article>
  )
}

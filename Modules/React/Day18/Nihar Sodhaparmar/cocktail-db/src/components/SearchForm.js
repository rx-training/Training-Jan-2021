import React, { useEffect, useRef } from "react";

export default function SearchForm({ setSearchTerm }) {
  const searhValue = useRef("");

  useEffect(() => {
    searhValue.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const searchCocktail = () => {
    setSearchTerm(searhValue.current.value);
  };
  return (
    <section className="section">
      <h2 className="section-title">search cocktails</h2>
      <form action="" className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={searchCocktail}
            ref={searhValue}
          />
        </div>
      </form>
    </section>
  );
}

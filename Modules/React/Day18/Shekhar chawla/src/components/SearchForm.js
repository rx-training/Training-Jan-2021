import React, { useRef, useEffect } from "react";

export default function SearchForm({ setSearchText }) {
  const searchValue = useRef('')

  useEffect( () => {
    searchValue.current.focus()
  }, [])
  const hanldeSubmit = (event) => {
    event.preventDefault()
  }
  const searchCocktail = () => { 
    setSearchText(searchValue.current.value)
  }

  return (
    <section className="section">
      <h2 className="section-title">Search Cocktail</h2>
      <form className="form search-form" hanldeSubmit={hanldeSubmit}>
        <div className="form-control">
          <label htmlFor="name">search you favorite cocktails</label>
          <input type="text" name="name" id="name" onChange={searchCocktail} ref={searchValue}></input>
        </div>
      </form>
    </section>
  )
}

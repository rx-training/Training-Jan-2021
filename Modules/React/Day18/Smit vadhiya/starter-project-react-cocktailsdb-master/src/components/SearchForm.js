import React from "react";



export default function SearchForm({setSearchTerm}) {
  const searchValue = React.useRef("")

  React.useEffect(() => {
    searchValue.current.focus();
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const searchCocktail = () =>{
    setSearchTerm(searchValue.current.value)
  }

  return(
    <section className="section">
      <h2 className="section-title">
        <form onSubmit={handleSubmit} className="form search-form">
          <div className="form-control">
            <label htmlFor="name">search your favorite cocktail</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              onChange={searchCocktail}
              ref={searchValue}
              />
          </div>
        </form>
      </h2>
    </section>
  )
}

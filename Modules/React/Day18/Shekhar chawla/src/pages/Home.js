import React, { useState, useEffect } from "react";
import SeachForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [searchText, setSearchText] = useState('a')
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    setLoading(true)
    async function getDrinks() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
        const data = await response.json()
        const { drinks } = data
        if (drinks) {
          const newCocktails = drinks.map((item) => {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
            return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass }
          })
          setCocktails(newCocktails)
        } else {
          setCocktails([])
        }
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
      setLoading(false)
    }
    
    getDrinks()
  }, [searchText])
  return (
    <main>
      <SeachForm setSearchText={setSearchText} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
}

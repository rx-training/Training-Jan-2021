import React,{useState,useEffect} from "react";
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

export default function Home() {
  const [loading,setLoading] = useState(false);
  const [searchTerm,setSearchTerm] = useState('a');
  const [cocktails,setCocktails] = useState([]);
  useEffect(()=>{
    setLoading(true);
    async function getData(){
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        const data = await response.json();
        const {drinks} = data;
        if(drinks){
          const newCocktails = drinks.map(item=>{
            const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
            return {
              id:idDrink,
              name:strDrink,
              image:strDrinkThumb,
              info:strAlcoholic,
              glass:strGlass
            }
          });
          setCocktails(newCocktails)
        }
        else{
          setCocktails([]);
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false);
    }
    getData();
  },[searchTerm])
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
}

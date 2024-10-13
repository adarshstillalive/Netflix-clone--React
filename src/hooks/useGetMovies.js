import { useEffect, useState } from "react"
import { TMDB_MOVIES_URL, TMDB_OPTIONS } from "../utils/constant";

const useGetMovies = (category)=>{
  const [movies, setMovies] = useState(null);

  const getMovies = async ()=>{

    try {
  
      const data = await fetch(TMDB_MOVIES_URL + category + "?&page=1", TMDB_OPTIONS );
  
      const json = await data.json()
  
      setMovies(json.results);
    } catch (error) {
  
      console.log(error);
      
    }

  }
  useEffect(()=>{
    getMovies()
  },[])

return movies

}
 export default useGetMovies;
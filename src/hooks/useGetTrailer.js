import { useEffect, useState } from "react";
import { TMDB_OPTIONS } from "../utils/constant";


const useGetTrailer = (id)=>{

  const [trailerKey, setTrailerKey] = useState(null)

  const getTrailer = async () => {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, TMDB_OPTIONS);
      const json = await data.json();
      const trailers = json.results.filter(video => video.type === 'Trailer');
      if (trailers.length > 0) {
        setTrailerKey(trailers[0].key);
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  }

  useEffect(() => {
    getTrailer()
  }, [id])

  return trailerKey

}

export default useGetTrailer;
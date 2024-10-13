import { useEffect, useState } from 'react';
import { TMDB_OPTIONS } from '../utils/constant';

const useNowPlaying = () => {
  const [movie, setMovie] = useState({
    id: null,
    originalTitle: null,
    overview: null,
  });

  const getNowPlaying = async () => {
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?page=1',
        TMDB_OPTIONS
      );
      const json = await data.json();
      
      const firstMovie = json.results[0];

      setMovie({
        id: firstMovie.id,
        originalTitle: firstMovie.original_title,
        overview: firstMovie.overview,
      });
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  return movie;
};

export default useNowPlaying;


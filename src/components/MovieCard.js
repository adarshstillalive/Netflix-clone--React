import React from 'react'
import { TMDB_MOVIE_IMG } from '../utils/constant'

const MovieCard = ({movie, onClick}) => {
  
  return (
    <div className="h-64 w-44 m-4 cursor-pointer" onClick={onClick}>
      <img alt="Movie poster" src={TMDB_MOVIE_IMG + movie.poster_path} />
    </div>
  )
}

export default MovieCard

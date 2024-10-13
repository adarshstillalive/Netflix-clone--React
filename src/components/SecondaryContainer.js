import React from 'react'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  return (
    <div className="bg-black/90">
      <div className="relative z-5 -mt-60">
        <MovieList category={"now_playing"} />
        <MovieList category={"popular"} />
        <MovieList category={"top_rated"} />
        <MovieList category={"upcoming"} />
      </div>
    </div>
  )
}

export default SecondaryContainer

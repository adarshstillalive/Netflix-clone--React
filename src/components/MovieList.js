import React, { useRef, useState } from 'react'
import useGetMovies from '../hooks/useGetMovies'
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';

const MovieList = ({ category }) => {
  const scrollRef = useRef(null);
  const [selectedMovie, setSelectedMovie] = useState(null)
  
  const movies = useGetMovies(category)
  if (movies) console.log(movies);
  
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMovieClick = (movie)=>{
    setSelectedMovie(movie)
  }

  const closeModal = ()=>{
    setSelectedMovie(null)
  }

  return movies && (
    <div className="relative">
      <h2 className="text-2xl font-bold text-white mb-4 px-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div className="group">
        <div 
          ref={scrollRef} 
          className="flex overflow-x-scroll scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex">
            {movies.map(movie => (<MovieCard key={movie.id} movie={movie} onClick={()=>handleMovieClick(movie)} />))}
          </div>
        </div>
        <div onClick={() => scroll('left')} className="absolute cursor-pointer top-0 bottom-0 left-0 flex items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="text-white cursor-pointer px-2">◀️</button>
        </div>
        <div onClick={() => scroll('right')} className="absolute cursor-pointer top-0 bottom-0 right-0 flex items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="text-white cursor-pointer px-2">▶️</button>
        </div>
      </div>
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  )
}

export default MovieList
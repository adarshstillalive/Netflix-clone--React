import React, { useState } from 'react';
import useGetTrailer from '../hooks/useGetTrailer';

const MovieModal = ({ movie, onClose }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const trailerKey = useGetTrailer(movie.id)
  console.log(trailerKey);
  

  const playTrailer = () => {
    setShowTrailer(true);
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg max-w-4xl w-full relative">
        <h2 className="text-2xl font-bold text-white mb-4">{movie.title}</h2>
        
        {showTrailer ? (
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              src={"https://www.youtube.com/embed/" + trailerKey}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto rounded-lg mb-4"
          />
        )}
        
        <p className="text-gray-300 mb-4">{movie.overview}</p>
        
        <div className="flex space-x-4 mb-4">
          <button 
            onClick={playTrailer}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
          >
            {showTrailer ? 'Hide Trailer' : 'Watch Trailer'}
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
            More Info
          </button>
        </div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl hover:text-gray-300 transition duration-300"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default MovieModal;
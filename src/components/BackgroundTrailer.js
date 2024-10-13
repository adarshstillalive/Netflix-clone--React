import React from 'react'
import useNowPlayingTrailer from '../hooks/useNowPlayingTrailer'

const BackgroundTrailer = ({ id }) => {

  const trailerKey = useNowPlayingTrailer(id);

  return (
    <div className="absolute w-screen aspect-video overflow-hidden">
      {trailerKey && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
          <div className=" w-full h-full pt-[56.25%]">
            <iframe
              className="absolute top-1/2 left-1/2 w-[150%] h-[110%] -translate-x-1/2 -translate-y-1/2"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerKey}&enablejsapi=1`}
              title="Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </>
      )}

    </div>
  )
}

export default BackgroundTrailer
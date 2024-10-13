import React from 'react'

const ForegroundTrailer = ({ title, overview, backgroundImage }) => {
  return (
    <div className="relative h-[56.25vw] lg:h-[56.5vw]">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      <div className="absolute bottom-[40%] left-[4%] text-white max-w-[32%]">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3">{title}</h1>
        <p className="text-sm md:text-base mb-4 line-clamp-3">{overview}</p>
        <div className="flex space-x-3">
          <button className="bg-white text-black py-1 md:py-2 px-4 md:px-6 rounded font-bold flex items-center hover:bg-opacity-80 transition">
            <span className="mr-2">▶</span> Play
          </button>
          <button className="bg-gray-500/50 text-white py-1 md:py-2 px-4 md:px-6 rounded font-bold flex items-center hover:bg-gray-500/80 transition">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForegroundTrailer
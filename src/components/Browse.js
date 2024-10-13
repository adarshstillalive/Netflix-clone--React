import  { useEffect, useState } from 'react'
import Header from "./Header";
import { TMDB_OPTIONS } from '../utils/constant';
import BackgroundTrailer from './BackgroundTrailer';
import ForegroundTrailer from './ForegroundTrailer';
import useNowPlaying from '../hooks/useNowPlaying';

const Browse = () => {
  const {id, originalTitle, overview} = useNowPlaying()

  return (
    <div>
      <Header />
      {id && <BackgroundTrailer id={id} />}
      {originalTitle && overview && <ForegroundTrailer title={originalTitle} overview={overview}/>}
    </div>
  )
}

export default Browse

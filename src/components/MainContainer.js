import React from 'react'
import BackgroundTrailer from './BackgroundTrailer'
import ForegroundTrailer from './ForegroundTrailer'
import useNowPlaying from '../hooks/useNowPlaying'

const MainContainer = () => {
  const {id, originalTitle, overview} = useNowPlaying()
  return (
    <>
      {id && <BackgroundTrailer id={id} />}
      {originalTitle && overview && <ForegroundTrailer title={originalTitle} overview={overview}/>}
    </>
  )
}

export default MainContainer

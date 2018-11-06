import React from 'react'
import './Video.scss'

export const Video = ({ id }) => (
  <div className='Video'>
    <iframe 
      src={`https://player.vimeo.com/video/${id}?background=1&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0`}
      frameBorder='0' 
      allowFullScreen
      />  
  </div>
)

export default Video

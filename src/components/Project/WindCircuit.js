import React from 'react'
import image01 from 'static/wind/wind_1600.jpg'
import Project from './Project'
import Video from '../Video/Video'

export const HeartCircuit = () => (
  <Project className='wind-circuit'>
    <section>
      <h2>Circuit for Voice and Wind</h2>
      <p>
        2015<br />
      </p>
      <p className='add-margin-bottom'>
        Five AC dimmers controled by an external input. This circuit facilitates the translation of voice and wind.
      </p>
      <img src={image01} />
      <Video id='298848690' />
      <Video id='298849869' />
      <script src='https://player.vimeo.com/api/player.js'></script>
    </section>
  </Project>
)

export default HeartCircuit

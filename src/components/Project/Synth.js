import React from 'react'
import image01 from 'static/synth/synth_1600_01.jpg'
import image02 from 'static/synth/synth_1600_02.jpg'
import Project from './Project'

export const Synth = () => (
  <Project className='synth'>
    <section>
      <h2>Spoken Synth</h2>
      <p>
        2013<br />
        Collaboration with Huong Ngo.
      </p>
      <p>
        Speakjet chip turned into a five oscillator additive synthesizer. The code for interfacing with Arduino is available online.
      </p>
      <ul className='add-margin-bottom related'>
        <li><span>Code:</span> <a href='https://github.com/orzubalsky/spoken-synth' target='_blank'>Github repository</a></li>
        <li><span>Related projects:</span> Do You Consider Yourself a Candidate for Space Travel?</li>
        <li><span>Related platforms:</span> Nasa.lu</li>
      </ul>
      <img src={image01} />
      <img src={image02} />
    </section>
  </Project>
)

export default Synth

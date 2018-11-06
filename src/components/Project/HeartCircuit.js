import React from 'react'
import { Link } from 'react-router-dom'
import image01 from 'static/meeting-table/heart_circuit_01.jpg'
import image02 from 'static/meeting-table/heart_circuit_02.jpg'
import image03 from 'static/meeting-table/heart_circuit_03.jpg'
import image04 from 'static/meeting-table/heart_circuit_04.jpg'
import Project from './Project'

export const HeartCircuit = () => (
  <Project className='heart-circuit'>
    <section>
      <h2>Circuit for Listening to the Heart</h2>
      <p>
        2014<br />
      </p>
      <p>
        Custom made circuit with a pre amplifiter and 2nd order Sallen-Key low pass filter. The electrical components have been selected in order to amplify the frequencies of a heart beat and attenuate others significantly. A second circuit design regulates the power from a single 18 Volt DC supply to a dual +9/-9 Volt. This design mixes five amplified and filtered heartbeat signals into one output. Combined with modified stethoscopes, these ciruits facilitate specific listening experiences.
      </p>
      <ul className='add-margin-bottom related'>
        <li><span>Related projects:</span><Link to='meeting-table'>Meeting Table</Link></li>
      </ul>      
      <img src={image01} />
      <img src={image02} />
      <img src={image03} />
      <img src={image04} className='small-image' />
    </section>
  </Project>
)

export default HeartCircuit

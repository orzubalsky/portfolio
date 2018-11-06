import React from 'react'
import { Link } from 'react-router-dom'
import Section from 'components/Section/Section'
import moldImage from 'static/drum-mold.jpg'
import heartImage from 'static/heart-circuit.jpg'
import windImage from 'static/wind.jpg'
import synthImage from 'static/synth.jpg'
import './ToolList.scss'

export const ToolList = () => (
  <Section title='Tools'>
    <Link to='/project/mold-for-marching-drum'>
      <img src={moldImage} />
      <h3>Mold for Marching Drum</h3>
    </Link>
    <Link to='/project/circuit-for-voice-and-wind'>
      <img src={windImage} />
      <h3>Circuit for Voice and Wind</h3>
    </Link>
    <Link to='/project/circuit-for-listening-to-the-heart'>
      <img src={heartImage} />
      <h3>Circuit for Listening to the Heart</h3>
    </Link>      
    <Link to='/project/spoken-synth'>
      <img src={synthImage} />
      <h3>Spoken Synth</h3>
    </Link>        
  </Section>
)

export default ToolList

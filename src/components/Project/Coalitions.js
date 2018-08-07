import React from 'react'
import image01 from 'static/coalitions/coalitions_01.jpg'
import image02 from 'static/coalitions/coalitions_02.jpg'
import image03 from 'static/coalitions/coalitions_03.jpg'
import image04 from 'static/coalitions/coalitions_04.jpg'
import Project from './Project'

export const Coalitions = () => (
  <Project className='coalitions'>
    <section>
      <h2>Coalitions</h2>
      <p className='meta'>
        2017<br />
        Poplar, polyester film, polyester rope, graphite, digital print
      </p>
      <img className='coalitions-01' src={image01} />
      <img className='coalitions-02' src={image02} />
      <img className='coalitions-03' src={image03} />
      <img className='coalitions-04' src={image04} />
    </section>
  </Project>
)

export default Coalitions

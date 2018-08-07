import React from 'react'
import image02 from 'static/o/i_02.jpg'
import textbook01 from 'static/o/textbook_01.jpg'
import textbook02 from 'static/o/textbook_02.jpg'
import textbook04 from 'static/o/textbook_installation.jpg'
import Project from './Project'

export const TimeTravels = () => (
  <Project className='time-travels'>
    <section>
      <h3>Time Travels: Building a State in the Middle East</h3>
      <p className='meta'>
        2016-2018<br />
        Israeli High School History Textbooks
      </p>
      <img className='time-travels-03' src={textbook01} />
      <img className='time-travels-04' src={textbook02} />
      <img className='time-travels-01' src={image02} />
      <img className='time-travels-02' src={textbook04} />
    </section>
  </Project>
)

export default TimeTravels

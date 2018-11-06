import React from 'react'
import table01 from 'static/time-travels/table_1600_01.jpg'
import table02 from 'static/time-travels/table_1600_02.jpg'
import cover01 from 'static/time-travels/cover_square_1600_01.jpg'
import cover02 from 'static/time-travels/cover_square_1600_02.jpg'
import cover03 from 'static/time-travels/cover_square_1600_03.jpg'
import cover04 from 'static/time-travels/cover_square_1600_04.jpg'
import cover05 from 'static/time-travels/cover_square_1600_05.jpg'
import cover06 from 'static/time-travels/cover_square_1600_06.jpg'
import cover07 from 'static/time-travels/cover_square_1600_07.jpg'
import spread01 from 'static/time-travels/spread_1600_01.jpg'
import spread02 from 'static/time-travels/spread_1600_02.jpg'
import spread03 from 'static/time-travels/spread_1600_03.jpg'
import spread04 from 'static/time-travels/spread_1600_04.jpg'
import Project from './Project'

export const TimeTravels = () => (
  <Project className='time-travels'>
    <section>
      <h3>Time Travels: Building a State in the Middle East</h3>
      <p className='meta'>
        2018<br />
        Israeli High School History Textbooks
      </p>
      <img className='time-travels-table-01' src={table01} />
      <img className='time-travels-spread' src={spread01} />
      <img className='time-travels-spread' src={spread02} />
      <img className='time-travels-spread' src={spread03} />
      <img className='time-travels-spread' src={spread04} /> 
      <img className='small-image' src={cover01} />
      <img className='small-image' src={cover02} />
      <img className='small-image' src={cover03} />
      <img className='small-image' src={cover04} />
      <img className='small-image' src={cover05} />          
      <img className='small-image' src={cover06} />
      <img className='small-image' src={cover07} />       
    </section>
  </Project>
)

export default TimeTravels

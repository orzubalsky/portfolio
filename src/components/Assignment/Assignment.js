import React from 'react'
import './Assignment.scss'

export const Assignment = ({ name, student, course, school, description, goals, considerations }) => (
  <div className='Assignment'>
    <div className='Assignment__title'>
      <div className='Assignment__names'>
        <div className='Assignment__name'>
          <span>Assignment:</span> {name}
        </div>
        <div className='Assignment__course'>
          {course}
        </div>
        <div className='Assignment__school'>
          {school}
        </div>
      </div>
      <div className='Assignment_code'>
      </div>
    </div>
    <p className='Assignment__description'>
      {description}
    </p>
    <div className='Assignment__content'>
      <div className='Assignment__goals'>
        <h5>Goals</h5>
        <ul>
          {goals.map((goal, i) => <li key={i}>{goal}</li>)}
        </ul>
      </div>
      { considerations
        ? <div className='Assignment__considerations'>
          <h5>Considerations</h5>
          <ul>
            {considerations.map((goal, i) => <li key={i}>{goal}</li>)}
          </ul>
        </div>
        : null
      }
    </div>
  </div>
)

export default Assignment

import React from 'react'
import './SyllabusItem.scss'

export const SyllabusItem = ({ title, link, school = 'Parsons School of Design', isActive = true }) => (
  <a
  	className={`SyllabusItem ${isActive ? '' : 'SyllabusItem--inactive'}`}
  	href={link}
  	target='_blank'
  >
    <h3>{title}</h3>
    <h4>{school}</h4>
    {isActive ? <i className='far fa-file-alt' /> : null}
  </a>
)

export default SyllabusItem

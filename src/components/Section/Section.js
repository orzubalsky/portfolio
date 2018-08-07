import React from 'react'
import './Section.scss'

export const Section = ({ children, className, title }) => (
  <section className={`Section ${className}`}>
    <h2>{title}</h2>
    <div className='Section__content'>
      {children}
    </div>
  </section>
)

export default Section

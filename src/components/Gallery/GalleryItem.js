import React from 'react'
import './GalleryItem.scss'

export const GalleryItem = ({ source, student, course, year, assignment, previous, next, className = '' }) => {
  const Assignment = assignment

  return (
    <div className={`GalleryItem ${className}`}>
      <div className='GalleryItem__frame' onClick={() => next()}>
        <img className='GalleryItem__image' src={source} />
      </div>
      <div className='GalleryItem__navigation'>
        <div className='GalleryItem__previous' onClick={() => previous()}>
          <i className='fas fa-angle-left' />
        </div>
        <div className='GalleryItem__caption'>
          {student}, {course}, {year}
        </div>
        <div className='GalleryItem__next' onClick={() => next()}>
          <i className='fas fa-angle-right' />
        </div>
      </div>
      <Assignment student={student} year={year} />
    </div>
  )
}

export default GalleryItem

import React from 'react'
import image01 from 'static/invisible-library/01.jpg'
import image02 from 'static/invisible-library/03.jpg'
import Project from './Project'

export const InvisibleLibrary = () => (
  <Project className='invisible-library'>
    <section>
      <h2>Invisible Library</h2>
      <p>
        2013<br />
        Online platform and installation<br />
        <a href='http://invisiblelibrary.us' target='_blank'>
          http://invisiblelibrary.us
        </a><br />
        collaboration with Huong Ngo
      </p>
      <img src={image01} />
      <p>
        On September 16, 2013, the Randolph County Board of Education in Central North Carolina banned Ralph Ellison's book "The Invisible Man" after a student's mother complained about the adult content in the book. One board member supported her complaint, stating that he "didn't find any literary value" in Ellison's account of African-American alienation in the United States in the early 20th century. The ban remained for a mere nine days until it was lifted by the North Carolina School Board under much fire by the public.
      </p>
      <p className='add-margin-bottom'>
        As a response to the ban, we created an online platform asking for participants to record and upload parts of the book as a collective act of solidarity with those who are still invisible in our society.
      </p>
      <div className='embed'>
        <iframe src='https://player.vimeo.com/video/180592788' />
      </div>
      <img src={image02} />
    </section>
  </Project>
)

export default InvisibleLibrary

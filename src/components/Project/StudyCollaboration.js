import React from 'react'
import image01 from 'static/study-collaboration/01.png'
import Project from './Project'

export const StudyCollaboration = () => (
  <Project className='study-collaboration'>
    <section>
      <h2>Study Collaboration</h2>
      <p>
        2017<br />
        Online platform<br />
        Collaboration with Caroline Woolard and Leonard Nalencz<br />
        <a href='http://studycollaboration.com' target='_blank'>
          http://studycollaboration.com
        </a><br />
        <a href='https://github.com/orzubalsky/wou' target='_blank'>
          https://github.com/orzubalsky/wou
        </a>
      </p>
      <img src={image01} />
      <p>
        The Study Center for Group Work is an online resource and an in-person network of artists who meet to share methods of collaboration with one another. The Center provides: (1) an online resource of lesson plans, readings, and objects, (2) gatherings for artists to share resources, and (3) accessible public trainings in methods of listening, attention, and collaboration. Just as dancers take classes throughout their lives, the Center aims to cultivate a network of visual artists who are committed to group work through daily practice.
      </p>
      <p>
        This site was made possible with support from the New York Foundation for the Arts' Arts Business Incubator Program and a residency at Eyebeam.
      </p>
    </section>
  </Project>
)

export default StudyCollaboration

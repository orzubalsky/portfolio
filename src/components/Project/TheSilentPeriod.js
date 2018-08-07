import React from 'react'
import image01 from 'static/the-silent-period/01.jpg'
import Project from './Project'

export const TheSilentPeriod = () => (
  <Project className='the-silent-period'>
    <section>
      <h2>The Silent Period</h2>
      <p>
        2013<br />
        Multi-channel sound installation, contract<br />
        collaboration with Huong Ngo
      </p>
      <img src={image01} />
      <p>
        The Silent Period is a term used in the study of linguistics to describe the stage during which a new language learner refuses to speak her/his new language. In this three channel sound installation, We mobilize the phrase as a metaphor for possible strategies of resistance against impositions of a dominant language, often implicated in and enacted on multiple registers of culture, education, commerce, and governance. Through strategic uses of silence in the reading of appropriated texts, the installation renders a “lack” of spoken language production into a call for acts of critical listening.
      </p>
    </section>
  </Project>
)

export default TheSilentPeriod

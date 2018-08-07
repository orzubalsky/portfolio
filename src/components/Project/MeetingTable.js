import React from 'react'
import image01 from 'static/meeting-table/01.jpg'
import image02 from 'static/meeting-table/02.jpg'
import image03 from 'static/meeting-table/03.jpg'
import image04 from 'static/meeting-table/04.jpg'
import image05 from 'static/meeting-table/05.jpg'
import Project from './Project'

export const MeetingTable = () => (
  <Project className='meeting-table'>
    <section>
      <h2>Meeting Table</h2>
      <p>
        2014<br />
        Drum, stethoscopes, electronics
      </p>
      <img src={image01} />
      <p>
        Meeting Table explores group dynamics, ways of articulation, expression, and being together through the reconfiguration of sonic space. The table, constructed as a responsive drum, amplifies the performers' heartbeats, becoming a collective resonant body. Through a series of performances that juxtapose speech, singing, and heartbeat sounds, the audience is invited to consider how individuals can share airtime and learn how to listen to each other.
      </p>
      <p className='add-margin-bottom'>
        Five handheld devices are connected to the drum for performers to hold against their chest. The signals are passed to a series of analog electronic circuits that are embedded on the inside of the drum, where they are filtered, amplified, and mixed together. The drum then plays itself using an actuator that vibrates the bottom membrane. As the sounds all blend together in the drum, it becomes impossible to distinguish between the heartbeats of the people sitting around the table. The drum plays a continually changing pulse of the group that uses it.
      </p>
      <img src={image02} />
      <img src={image03} />
      <img src={image04} />
      <p className='add-margin-bottom'>
        From <em>Self Portrait</em>, a performance by Sable Elyse Smith, Simone Tyson, Sara Jimenez, and Bonita Oliver.
      </p>
      <img src={image05} />
      <p>
        From <em>A Poem from 1967 That Makes Me Think About My Mother</em>, a performance by Christhian Diaz.
      </p>
    </section>
  </Project>
)

export default MeetingTable

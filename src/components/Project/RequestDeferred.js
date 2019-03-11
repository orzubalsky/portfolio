import React from 'react'
import Video from '../Video/Video'
import image01 from 'static/request-deferred/01.jpg'
import image02 from 'static/request-deferred/02.jpg'
import image03 from 'static/request-deferred/03.jpg'
import image04 from 'static/request-deferred/04.jpg'
import Project from './Project'

export const RequestDeferred = () => (
  <Project className='request-deferred'>
    <section>
      <h2>Request Deferred</h2>
      <p>
        2019<br />
        Found national archive website, software, digitally printed index cards, vinyl lettering, 8.5 x 10 ft<br />
      </p>
      <img src={image01} />
      <p>
        Request Deferred is the first chapter in a project concerning the ongoing digitization process of the Israel State Archive. As of recently, physical access to the records is not available to the public. Instead, material from the archive is only available through an online interface. The majority of records that have not been digitized as of 2019 and can be requested by filling out an online form.
      </p>
      <p className='add-margin-bottom'>
        In this piece, the process of requesting unavailable records is automated, focusing on hundreds of records pertaining to requests that were made to Israel’s short lived Ministry of Minorities. The ministry was established as part of the provisional government in 1948 and was shut down in 1949. It was supposed to address the needs of the “minorities”.
      </p>
      {/* <img className='small-image' src={image02} /> */}
      <img className='small-image' src={image03} />
      <img className='small-image add-margin-bottom' src={image04} />
      <Video id='321998200' />

    </section>
  </Project>
)

export default RequestDeferred

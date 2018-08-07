import React from 'react'
import chant01 from 'static/o/chant_01.jpg'
import chant02 from 'static/o/chant_02.jpg'
import Project from './Project'

export const HowDoYouSingIt = () => (
  <Project className='how-do-you-sing-it'>
    <section>
      <h2>How Will You Write it in a Sentence? How Will You Sing it?</h2>
      <p className='meta'>
        2016<br />
        2 Channel digital video, 6:18
      </p>
      <img src={chant01} />
      <img src={chant02} />
    </section>
  </Project>
)

export default HowDoYouSingIt

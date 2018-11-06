import React from 'react'
import image02 from 'static/marx-for-cats/02.jpg'
import Project from './Project'

export const MarxForCats = () => (
  <Project className='marx-for-cats'>
    <section>
      <h2>Marx for Cats</h2>
      <p className='meta'>
        2018<br />
        Collaboration with Caroline Woolard and Leigh Claire La Berge
      </p>
      <img className='' src={image02} />
      <p>
        In On The Catpitalist Mode of Production, an unnamed cat and New York based visual artists
        Caroline Woolard and Or Zubalsky ask critical theorist Leigh Claire La Berge to explain
keywords in contemporary capitalism. The interviews will be presented online via a dedicated
website of short cat-and-capitalism videos that obsessively records the attention given to the videos and the space in between them by viewers. 
This is the animal of the wild-cat strike rather than the fat-cat. This is
sab-cat [sabotage cat] also known as the sabo-tabby, who the International Workers of the
World used to herald a “slow-down,” a refusal of the compulsory labor time of capitalism. 
      </p>
      <p>
        <a href='http://marxforcats.com' target='_blank'>http://marxforcats.com</a>
      </p>
    </section>
  </Project>
)

export default MarxForCats

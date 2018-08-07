import React from 'react'
import supposeImg1 from 'static/suppose-we-rave-a-bit/suppose-we-rave-1.jpg'
import supposeImg2 from 'static/suppose-we-rave-a-bit/suppose-we-rave-2.jpg'
import supposeImg3 from 'static/suppose-we-rave-a-bit/suppose-we-rave-3.jpg'
import supposeImg4 from 'static/suppose-we-rave-a-bit/suppose-we-rave-4.jpg'
import supposeImg5 from 'static/suppose-we-rave-a-bit/suppose-we-rave-5.jpg'
import supposeImg6 from 'static/suppose-we-rave-a-bit/suppose-we-rave-6.jpg'
import maskImg from 'static/suppose-we-rave-a-bit/suppose-we-rave-mask.jpg'
import Project from './Project'

export const SupposeWeRaveABit = () => (
  <Project className='suppose'>
    <section>
      <h3>Suppose We Rave a Bit</h3>
      <p className='meta'>
        2015<br />
        Online digital videos<br />
        Collaboration with Christhian Diaz<br />
        Participants include Alona Weiss, Kevin Connell, and other anonymous speakers.
      </p>
      <img src={supposeImg1} />
      <p>
        On March 3rd 2015, Israeli Prime Minister Benjamin Netanyahu came to the U.S. to speak before congress about nuclear negotiations between U.S. and Iran. In what is criticized as a political stunt just prior the elections in Israel, Netanyahu followed his pattern of fear mongering and diverting attention from his own failures.
      </p>
      <p>
        We recognize that both the speech itself as well as the controversy surrounding it put aside the pressing issues of the occupation in Palestine, from social inequality to racism and injustice. As a way to protest Netanyahu’s visit to Congress, we invited the public to imagine the speech that they would like the Israeli Prime Minister to give and perform it themselves.
      </p>
      <p>
        The title of the series is taken from an introduction to a poem by Uruguayan writer Eduardo Galeano, asking to "set our sights beyond the abominations of today to divine another possible world." We ask to turn the impossibilities embedded in this political spin into the possible.
      </p>
      <img className='suppose-image suppose-image-1' src={supposeImg2} />
      <img className='suppose-image suppose-image-2' src={supposeImg3} />
      <img className='suppose-image suppose-image-2' src={supposeImg4} />
      <img className='suppose-image suppose-image-3' src={supposeImg5} />
      <img className='suppose-image suppose-image-2' src={supposeImg6} />
      <img className='suppose-image suppose-image-mask' src={maskImg} />
    </section>
  </Project>
)

export default SupposeWeRaveABit

import React from 'react'
import image01 from 'static/trade-school/01.jpg'
import Project from './Project'

export const TradeSchool = () => (
  <Project className='trade-school'>
    <section>
      <h2>Trade School</h2>
      <p>
        2011-2015<br />
        Online platform<br />
        <a href='http://tradeschool.coop' target='_blank'>
          http://tradeschool.coop
        </a><br />
        <a href='https://github.com/orzubalsky/tradeschool' target='_blank'>
          https://github.com/orzubalsky/tradeschool
        </a>
      </p>
      <img src={image01} />
      <p>
        Trade School is a volunteer run, self-organized school that runs on barter. Teachers propose classes and ask for barter items from students. Students sign up for classes by agreeing to bring a barter item for the teacher. The Trade School Everywhere network is made up of more than 50 self-organized barter based schools around the world. The open source platform is shared with organizers who want to open a Trade School in their area.
      </p>
      <p>
        Fellow Trade School New York organizers include Caroline Woolard, Christhian Diaz, Aimee Lutkin, Rachel Steinberg, Louise Ma, and other organizers worldwide.
      </p>
    </section>
  </Project>
)

export default TradeSchool

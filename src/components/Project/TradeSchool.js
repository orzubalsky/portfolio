import React from 'react'
import Highlight from 'react-highlight'
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
      <p className='add-margin-bottom'>
        Fellow Trade School New York organizers included Caroline Woolard, Christhian Diaz, Aimee Lutkin, Rachel Steinberg, Louise Ma, and other organizers worldwide.
      </p>
      <Highlight className='python'>
{`
class Person(AbstractBaseUser, PermissionsMixin, Base):
    """
    A custom model in place of Django's auth.User model.

    A Person in the Trade School system can be an organizer,
    teacher, and student. Their interaction with the system
    determines their roles:

    When a person registers to a class, they are acknowledged as a student.
    When a person teaches an approved class, they are acknowledged as a teacher
    When a person is given is_staff=True, they are acknowledged as an organizer
    """
`}
      </Highlight>
    </section>
  </Project>
)

export default TradeSchool

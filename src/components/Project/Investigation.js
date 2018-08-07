import React from 'react'
import chant01 from 'static/o/chant_01.jpg'
import chant02 from 'static/o/chant_02.jpg'
import image02 from 'static/o/i_02.jpg'
import image04 from 'static/o/i_04.jpg'
import image05 from 'static/o/i_05.jpg'
import image06 from 'static/o/i_06.jpg'
import textbook01 from 'static/o/textbook_01.jpg'
import textbook02 from 'static/o/textbook_02.jpg'
import textbook04 from 'static/o/textbook_installation.jpg'
import Project from './Project'

export const Investigation = () => (
  <Project className='draft'>
    <section>
      <h2>How Will You Write it in a Sentence? How Will You Sing it?</h2>
      <p className='meta'>
        2016<br />
        2 Channel digital video, 6:18
      </p>
      <img src={chant01} />
      <img src={chant02} />
    </section>

    <section>
      <h3>Time Travels: Building a State in the Middle East</h3>
      <p className='meta'>
        2016<br />
        High School History Textbooks, whiteout, table
      </p>
      <img className='time-travels-03' src={textbook01} />
      <img className='time-travels-04' src={textbook02} />
      <img className='time-travels-01' src={image02} />
      <img className='time-travels-02' src={textbook04} />
    </section>

    <section>
      <h3>30.650508, 34.779922, 2012 (draft for an investigation)</h3>
      <p className='meta'>
        2015<br />
        Installation with recorder, rock, wall, and transducers
      </p>
      <img className='draft-01' src={image05} />
      <img className='draft-02' src={image06} />
      <p>
        A recorded investigation recounts events that occurred in Israel and Palestine in 2012 regarding the motion of celestial bodies, the movement of rocks on the ground, and undercover security forces at protests. A voice describes fragments of the events, a rock emanates static radio sound, and a wall is beating with what changes from the sound of heartbeats to the sound of far away gunshots.
      </p>
    </section>

    <section>
      <h3>Portraits of Flowers Before Oslo, 1992</h3>
      <p className='meta'>
        2016<br />
        Digitized VHS footage, 2:51
      </p>
      <div className='embed'>
        <iframe src='https://player.vimeo.com/video/235991501' />
      </div>
      <p>
        Edited found footage that was shot in Israel in 1992.
      </p>
    </section>

    <section>
      <h3>Suppose We Rave a Bit</h3>
      <p className='meta'>
        2015<br />
        Online digital videos<br />
        Collaboration with Christhian Diaz<br />
        Participants include Alona Weiss, Kevin Connell, and other anonymous speakers.
      </p>
      <img src={image04} />
      <p>
        On March 3rd 2015, Israeli Prime Minister Benjamin Netanyahu came to the U.S. to speak before congress about nuclear negotiations between U.S. and Iran. In what is criticized as a political stunt just prior the elections in Israel, Netanyahu followed his pattern of fear mongering and diverting attention from his own failures.
      </p>
      <p>
        We recognize that both the speech itself as well as the controversy surrounding it put aside the pressing issues of the occupation in Palestine, from social inequality to racism and injustice. As a way to protest Netanyahu’s visit to Congress, we invited the public to imagine the speech that they would like the Israeli Prime Minister to give and perform it themselves.
      </p>
      <p>
        The title of the series is taken from an introduction to a poem by Uruguayan writer Eduardo Galeano, asking to "set our sights beyond the abominations of today to divine another possible world." We ask to turn the impossibilities embedded in this political spin into the possible.
      </p>
      <div className='embed'>
        <iframe src='https://player.vimeo.com/video/120766381' />
      </div>
    </section>
  </Project>
)

export default Investigation

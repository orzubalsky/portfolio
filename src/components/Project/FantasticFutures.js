import React from 'react'
import ffWeb01 from 'static/fantastic-futures/ff_web_01.jpg'
import ffNewMuseum02 from 'static/fantastic-futures/ff_new_museum_02.jpg'
import ffILand02 from 'static/fantastic-futures/ff_iland_02.jpg'
import ffILand03 from 'static/fantastic-futures/ff_iland_03.jpg'
import Project from './Project'

export const FantasticFutures = () => (
  <Project className='fantastic-futures'>
    <section>
      <h2>Fantastic Futures</h2>
      <p className='meta'>
        2010 - 2014<br />
        Online archive, performances
      </p>
      <img className='cover ff__web' src={ffWeb01} />
      <p>
        Fantastic Futures began as collective of artists, designers, students, doctors, and activists from Iraq and the U.S. The project developed from conversations about the importance of sharing stories and collectively envisioning the future. To that end, we created an interactive sound archive through which we collected and shared sounds from different locations and collage them together to form chance-based compositions. The group’s practice includes methods of collective field recording techniques, interviewing and listening exercises.
      </p>
    </section>
    <section>
      <h3>The Future Is Fantastic (If You Want It)</h3>
      <p className='meta'>
        2012<br />
        Multi-channel sound performance
      </p>
      <div className='embed'>
        <iframe src='https://player.vimeo.com/video/180594276?title=0&byline=0&portrait=0' />
      </div>
      <img className='ff__newmuseum__02' src={ffNewMuseum02} />
      <p>
        With support from Rhizome, Fantastic Futures created a movement-based performance for The New Museum to experiment with modes of attentive listening. In this event, audience members are blindfolded as performers move around the space playing sounds from the archive using minimal, low-tech megaphones.
      </p>
      <p>
        Members include: Gabby Guglielmelli and Sarah Albayaty. Yousif Ability, Ibrahim Hayder Al-Zararee, and Adam Fernandez. Caeser Alward, George Monteleone, and Ali Salim Abood. Rafal Al Nasiri and Dena Soukieh. Hussein Basheer Hassafa, Ali Sameer, and Phil Stearns. Duaa Al-Musawi, Forqan Kadhem, and Solgil Oh. Sarah Al-Qadir and Or Zubalsky. Phuong Nguyen and Idil Yakut. Hala Almahdi, Al-Nasir Bellah Ishrak Al-Nasiry, and Sable Elyse Smith. Oras M. Alani and Daniella Krihely. Zaydoon W. Ali, Julio Hernandez, and Ali Nabil. Ban Alwan, Cindy Liang, and Nadeen Al-Sheikh. Teeba Alqassab, Ahyoung Moon, and Lina Thamer. Omar Greene and Tiba Mohammed. Dergam Haitham, Andrew Persoff, and Bahir Salah Ali. Shahad Al-Ebady, Huong Ngo, and Ma’an Thwainy. Mohammed Nayyef and Taha Asaad Albaiaty. Yossor Jamal and Radhwan Al Heety.
      </p>
    </section>
    <section>
      <h3>Through Body, Through Earth, Through Speech</h3>
      <p className='meta'>
        2013<br />
        Multi-channel sound performance
      </p>
      <img className='ff__iland__01 inline' src={ffILand02} />
      <img className='ff__iland__02 inline' src={ffILand03} />
      <p>
        In the summer of 2013 we collaborated with evolutionary biologist Jason Munshi-South to investigate the biodiversity of Queens Flushing Meadows-Corona Park and current changes around its use as a public space.
      </p>
      <p>
        We conducted a series of interviews, collective recordings and sound walks. The activities in the site provoked questions and discussions around diversity, visions of the future, and entitlement of space. The project resulted in a multi-channel sound performative installation from collective recording exercises and interviews done by the group. Members of audience were engaged in forty minutes of focused listening that recreated soundscapes in the park together with voices alluding to the way these spaces are used by humans and animals. The work was presented at Eyebeam as part of CT-Swam, Organized by Daniel Neumann, and again at the Queens Museum of Art.
      </p>
      <p>
        Active members include Julio Hernandez, Huong Ngo, Phuong Nguyen, Solgil Oh, and Sable Elyse Smith.
      </p>
    </section>
  </Project>
)

export default FantasticFutures

import React from 'react'
import image01 from 'static/portraits-of-flowers/portraits-of-flowers-1.png'
import image02 from 'static/portraits-of-flowers/portraits-of-flowers-2.png'
import image03 from 'static/portraits-of-flowers/portraits-of-flowers-3.png'
import image04 from 'static/portraits-of-flowers/portraits-of-flowers-4.png'
import image05 from 'static/portraits-of-flowers/portraits-of-flowers-5.png'
import Project from './Project'

export const PortraitsOfFlowers = () => (
  <Project className='portraits'>
    <section>
      <h3>Portraits of Flowers Before Oslo, 1992</h3>
      <p className='meta'>
        2016<br />
        Digitized VHS footage, 2:51
      </p>
      <img className='portraits-of-flowers-1' src={image01} />
      <p>
        Edited found home movie footage that was shot in Israel in 1992.
      </p>
      <img className='portraits-of-flowers portraits-of-flowers-2' src={image02} />
      <img className='portraits-of-flowers portraits-of-flowers-3' src={image03} />
      <img className='portraits-of-flowers portraits-of-flowers-4' src={image04} />
      <img className='portraits-of-flowers portraits-of-flowers-5' src={image05} />
    </section>
  </Project>
)

export default PortraitsOfFlowers

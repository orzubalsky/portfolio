import React from 'react'
import { Link } from 'react-router-dom'
import Section from 'components/Section/Section'
import fantasticFuturesImage from 'static/fantastic-futures.jpg'
import invisibleLibraryImage from 'static/invisible-library.jpg'
import studyCollaborationImage from 'static/study-collaboration.jpg'
import tradeSchoolImage from 'static/trade-school.jpg'
import './PlatformList.scss'

export const PlatformList = () => (
  <Section title='Platforms'>
    <Link to='/project/study-collaboration'>
      <img src={studyCollaborationImage} />
      <h3>Study Collaboration</h3>
    </Link>
    <Link to='/project/invisible-library'>
      <img src={invisibleLibraryImage} />
      <h3>Invisible Library</h3>
    </Link>
    <Link className='fantastic-futures' to='/project/fantastic-futures'>
      <img src={fantasticFuturesImage} />
      <h3>Fantastic Futures</h3>
    </Link>
    <Link className='trade-school' to='/project/trade-school'>
      <img src={tradeSchoolImage} />
      <h3>Trade School</h3>
    </Link>
  </Section>
)

export default PlatformList

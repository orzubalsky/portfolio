import React from 'react'
import { Link } from 'react-router-dom'
import Section from 'components/Section/Section'
import coalitionsImage from 'static/coalitions.jpg'
import draftImage from 'static/draft.jpg'
import meetingTableImage from 'static/meeting-table.jpg'
import theSilentPeriodImage from 'static/the-silent-period.jpg'
import howDoYouSingItImage from 'static/how-do-you-sing-it.jpg'
import portraitsOfFlowersImage from 'static/portraits-of-flowers.png'
import supposeWeRaveABitImage from 'static/suppose-we-rave-a-bit-1.png'

export const ProjectList = () => (
  <Section title='Projects'>
    <Link to='/project/coalitions'>
      <img src={coalitionsImage} />
      <h3>Coalitions</h3>
    </Link>
    <Link to='/project/how-will-you-write-it-in-a-sentence-how-will-you-sing-it'>
      <img src={howDoYouSingItImage} />
      <h3>How Will You Write it in a Sentence? How Will You Sing it?</h3>
    </Link>
    <Link to='/project/portraits-of-flowers-before-oslo-1992'>
      <img src={portraitsOfFlowersImage} />
      <h3>Portraits of Flowers Before Oslo, 1992</h3>
    </Link>
    <Link to='/project/time-travels-building-a-state-in-the-middle-east'>
      <img src={draftImage} />
      <h3>Time Travels: Building a State in the Middle East</h3>
    </Link>
    <Link to='/project/suppose-we-rave-a-bit'>
      <img src={supposeWeRaveABitImage} />
      <h3>Suppose We Rave a Bit</h3>
    </Link>
    <Link to='/project/meeting-table'>
      <img src={meetingTableImage} />
      <h3>Meeting Table</h3>
    </Link>
    <Link to='/project/the-silent-period'>
      <img src={theSilentPeriodImage} />
      <h3>The Silent Period</h3>
    </Link>
  </Section>
)

export default ProjectList

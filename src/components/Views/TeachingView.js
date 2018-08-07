import React from 'react'
import About from 'components/About/About'
import PlatformList from 'components/PlatformList/PlatformList'
import ProjectList from 'components/ProjectList/ProjectList'
import TeachingPortfolio from 'components/TeachingPortfolio/TeachingPortfolio'
import Contact from 'components/Contact/Contact'
import './TeachingView.scss'

export const TeachingView = () => (
  <div className='Teaching'>
    <About />
    <TeachingPortfolio />
    <PlatformList />
    <ProjectList />
    <Contact />
  </div>
)

export default TeachingView

import React from 'react'
import About from 'components/About/About'
import PlatformList from 'components/PlatformList/PlatformList'
import ToolList from 'components/ToolList/ToolList'
import ProjectList from 'components/ProjectList/ProjectList'
import Contact from 'components/Contact/Contact'
import './HomeView.scss'

export const HomeView = () => (
  <div className='home'>
    <About />
    <ProjectList />
    <PlatformList />
    <ToolList />
    <Contact />
  </div>
)

export default HomeView

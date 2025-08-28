import React from 'react'
import Header from './Header'
import Skills from './Skills'
import SkillsPage from '../skills/page'
import Roadmap from '../roadmap/page'
import RoadmapPage from '../components/RoadmapPage'
import ExpertsPlatform from './ExpertsPlatform'
import ServicesPage from './Services'


const Home = () => {
  return (
    <div>
      <Header/>
      <ExpertsPlatform/>
      <ServicesPage/>
      <Skills/>
      <SkillsPage/>
      <RoadmapPage/>
      <Roadmap/>
    </div>
  )
}

export default Home

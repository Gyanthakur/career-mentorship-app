import React from 'react'
import Header from './Header'
import Skills from './Skills'
import SkillsPage from '../skills/page'
import Roadmap from '../roadmap/page'
import RoadmapPage from '../components/RoadmapPage'
import ExpertsPlatform from './ExpertsPlatform'
import ServicesPage from './Services'
import AIChat from '../components/AIChat'


const Home = () => {
  return (
    <div>
      <Header/>
      <ExpertsPlatform/>
      <ServicesPage/>
      <Skills/>
      {/* <SkillsPage/> */}
      <RoadmapPage/>
      <Roadmap/>
      <AIChat />
    </div>
  )
}

export default Home

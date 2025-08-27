import React from 'react'
import Header from './Header'
import Skills from './Skills'
import SkillsPage from '../skills/page'
import Roadmap from '../roadmap/page'
import RoadmapPage from '../components/RoadmapPage'


const Home = () => {
  return (
    <div>
      <Header/>
      <Skills/>
      <SkillsPage/>
      <RoadmapPage/>
      <Roadmap/>
    </div>
  )
}

export default Home

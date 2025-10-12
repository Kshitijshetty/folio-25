import React from 'react'
import AboutHero from './Hero'
import AboutStory from './AboutStory'
import AboutExperience from './AboutExpirence'
import Skills from '@/components/skills'
import AboutOffHours from './AboutOffHours'
import FinalText from '@/components/FinalText'


const about = () => {
  return (
    <div>
    <AboutHero />
    <AboutStory /> 
    <AboutExperience />
    <Skills />
    <AboutOffHours />
    <FinalText />
    </div>
    )
}

export default about

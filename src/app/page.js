import React from 'react'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Navsec from './components/Navsec'

const page = () => {
  return (
    <div>
      <Navsec />
      <Hero />
      <Contact />
    </div>
  )
}

export default page
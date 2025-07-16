import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/Hero'
import AboutSection from './components/About'
import MusicSection from './components/MusicSection'
import ContactSection from './components/Contact'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App

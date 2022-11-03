import AnimatedLetters from '../AnimatedLetters/animated'
import './about.scss'
import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', '_', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>I'm very ambitious</p>
        <p>
          I'm very confident, naturally ambitious and perpetually working on
          improving my knowledge one design problem at a time.
        </p>
        <p>define myself in one sentence</p>
      </div>

      <Loader type="pacman" active={true} />
    </div>
  )
}

export default About

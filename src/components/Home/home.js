import './home.scss'
// import M from '../../assets/images/M.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/animated'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['M', 'a', 'k', 's', 'y', 'm']
  const jobArray = [
    'w',
    'e',
    'b',
    '_',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.'
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['H', 'i', ',', ' ', 'i',' ', 'a', 'm', ' ']}
              idx={0}
            />
            {/* <img src={M} alt="developer" /> */}
            <AnimatedLetters className='aksym'
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer / JS Junior</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Loader type="pacman" />
      </div>
    </>
  )
}

export default Home

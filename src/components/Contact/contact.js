import Loader from 'react-loaders'
import './contact.scss'
import AnimatedLetters from '../AnimatedLetters/animated'
import React, { useState, useEffect } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '_', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            {/* write how a good of a frontend i am */}I am a Frontend Developer
            with a passion for creating beautiful websites and applications. I
            am currently looking for a job as a Frontend Developer. I am a fast
            learner and I am always looking for new challenges. I am a team
            player and I am always ready to help others. I am a hard worker and
            I am always ready to learn new things.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Message"
                    type="text"
                    name="message"
                    required
                  />
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

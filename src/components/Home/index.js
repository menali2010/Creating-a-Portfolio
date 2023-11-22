import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['e', 'a', 'n', 'd', 'r', 'o', ',']
  const jobArray = [
    'D',
    'a',
    't',
    'a',
    ' ',
    'a',
    'n',
    'a',
    'l',
    'y',
    's',
    't',
    ' ',
    'a',
    'n',
    'd',
    ' ',
    'S',
    'c',
    'i',
    'e',
    'n',
    't',
    'i',
    's',
    't',
    '.',
  ]

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I'</span>
            <span className={`${letterClass} _14`}> m</span>
            <img src={LogoTitle} alt="SpecialLetter" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={14}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Petroleum Engineer | Python Expert | Business Intelligence </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home

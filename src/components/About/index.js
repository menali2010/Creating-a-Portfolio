import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGitAlt,
  faJsSquare,
  faPython,
  faCss3,
  faHtml5,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh.
          </p>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faPython} color="#223659" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

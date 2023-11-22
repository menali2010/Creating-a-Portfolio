import './index.scss'
import '../Layout/index.scss'
import React from 'react'
import TextSphere from '../TextSphere'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const Skills = () => {
  const [letterClass] = useState('text-animate')
  return (
    <>
      <div id="page" className="en">
        <div className="container skills-page">
          <span className="tags top-tags"></span>
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['S', 'k', 'i', 'l', 'l', 's']}
                idx={15}
              />
            </h1>
            <p>
              I have been working with data for over 4 years, and during this
              time, I have been acquiring and applying knowledge in the
              following tools:
              <span className="tech-tag"> Python</span>,
              <span className="tech-tag"> SQL</span>,
              <span className="tech-tag"> VBA</span>,
              <span className="tech-tag"> TypeScript</span>,
              <span className="tech-tag"> JavaScript</span>,
              <span className="tech-tag"> SCSS</span>,
              <span className="tech-tag"> HTML</span>,
              <span className="tech-tag"> Power BI</span>,
              <span className="tech-tag"> Tableau</span>, etc.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ultricies neque malesuada lectus aliquet, in dapibus arcu
              accumsan. Ut non augue eu eros consectetur aliquet ac eget nibh.
              Integer justo purus, pulvinar vel vehicula mollis, pulvinar quis
              tortor. Nunc convallis mauris a felis lacinia eleifend. Praesent
              nec lobortis ligula, at pharetra enim.
            </p>
          </div>

          <span className="tags bottom-tags"></span>
          <div>
            <TextSphere />
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills

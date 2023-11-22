import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import Loader from 'react-loaders'
import Slider from './3d-slider-work1'
import Slider2 from './3d-slider-work2'
import Slider3 from './3d-slider-work3'
import Slider4 from './3d-slider-work4'
import Slider5 from './3d-slider-work5'

const Portfolio = () => {
  const [letterClass] = useState('text-animate')

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f ', 'o', 'l', 'i', 'o']}
              idx={15}
            />
          </h1>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
          </p>
          <br />
          <br />
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
          </p>
          <br /> <br />
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
          </p>
          <br /> <br />
          <h5>Lorem Ipsum</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
          </p>
          <br />
          <br />
          <h6>Lorem Ipsum</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ultricies neque malesuada lectus aliquet, in dapibus arcu accumsan.
            Ut non augue eu eros consectetur aliquet ac eget nibh. Integer justo
            purus, pulvinar vel vehicula mollis, pulvinar quis tortor. Nunc
            convallis mauris a felis lacinia eleifend. Praesent nec lobortis
            ligula, at pharetra enim.
          </p>
          <br />
          <br />
        </div>
        <div>
          <Slider />
          <Slider2 />
          <Slider3 />
          <Slider4 />
          <Slider5 />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Portfolio

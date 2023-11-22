import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { IonIcon } from '@ionic/react'
import { mail, location } from 'ionicons/icons'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <div className="box">
            <div className="contact form">
              <h3>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h3>
              <form action="https://formspree.io/f/mrgwdwdq" method="POST">
                <div className="formBox">
                  <div className="row50">
                    <div className="inputBox">
                      <span>First Name</span>
                      <input
                        type="text"
                        name="First Name"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="inputBox">
                      <span>Last Name</span>
                      <input
                        type="text"
                        name="Last Name"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="row50">
                    <div className="inputBox">
                      <span>Email</span>
                      <input
                        type="text"
                        name="Email"
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                    <div className="inputBox">
                      <span>Mobile</span>
                      <input
                        type="text"
                        name="Mobile"
                        placeholder="+55 11 1234 4321"
                      />
                    </div>
                  </div>
                  <div className="row100">
                    <div className="inputBox">
                      <span>Message</span>
                      <textarea
                        name="Message"
                        placeholder="Write a message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="row100">
                    <div className="inputBox">
                      <input type="submit" value={'SEND'} />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="contact info">
              <div className="infoBox">
                <div>
                  <span>
                    <IonIcon icon={location}></IonIcon>
                  </span>
                  <p>
                    City, State <br />
                    COUNTRY
                  </p>
                </div>
                <div>
                  <span>
                    <IonIcon icon={mail}></IonIcon>
                  </span>
                  <a href="mailto:youremail@email.com">your_email@email.com</a>
                </div>
              </div>
            </div>

            <div className="contact map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65312634.03599424!2d-131.726315344348!3d-2.383395551416805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1700680460779!5m2!1spt-BR!2sbr"
                style={{ border: 'ipx solid black' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

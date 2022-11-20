import React from 'react';
import './About.css';
import { Me } from "../../assets"
import Container from "../../components/Container"

const About = () => {

  return (
    <Container>

      <div className='about'>
        <div className="info_container">
          <div className="container_text">
            <h3>01.  <b>About Me</b></h3>
            <div className="wrapper">
              <p>
                Hi👋, I'm <b>Ilhomjon</b> and live in Tashkent, Uzbekistan.
              </p>
            </div>
            <div className="wrapper">
              <p>
                I did learnt a Web development with curiosity and motivation to achieve my ambition. Now, I can safely say that I am a Web Developer who is really into making delightful and top-notch web applications. My ambition is finding a team to work together.</p>
            </div>
            <div className="wrapper">
              <p>While searching  for a job, I found a start-up project called <b> Gcenter </b> joined as a volunteer. Currently, I am working on this project.</p>
            </div>
            <div className="wrapper">
              <p>My hobbies are <b>#travelling</b>, <b>#flicking cards</b> and <b>#watching movies</b> </p>
            </div>
          </div>
          <div className="img">
            <img className='my__img' src={Me} alt="" />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About
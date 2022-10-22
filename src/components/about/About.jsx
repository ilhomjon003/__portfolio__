import React from 'react';
import './About.css';

const About = () => {

  return (
    <div className='about'>
      <div className="info_container">
        <div className="container_text">
          <h3>01.  <b>About Me</b></h3>
          <div className="wrapper">
            <p>
                 Hi👋, I'm <b>Ilhomjon</b> located in Tashkent, Uzbekistan.
            </p>
            <p>I've learned a web development for more a year and worked in this field. Now, I am a Junior Web Developer who is really into making delightful and top-notch web applications. My ambition is finding a team to work together.</p>
          </div>
          <div className="wrapper">
            <p>I mainly use  <b>HTML</b> <b>CSS</b> <b>SCSS</b> <b>Styled-Components</b> <b>Javascript</b> <b>Typescript</b> <b>ReactJS</b> to build well-designed and awesome websites.</p>
            <p>And I have experience using libraries, frameworks like <b>Bootstrap</b> <b>Ant Design</b> and also <b>Material UI</b>
            <b></b></p>
            <p>
              I graduated Frontend Developement course successfully on June, 2022.
            </p>
          </div>
        </div>
        <div className="img">
          <img className='my__img' src="https://d1bvpoagx8hqbg.cloudfront.net/originals/how-to-take-a-good-photo-for-your-cv-our-top-tips-e529cea3222e81502875a139a070a9fe.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
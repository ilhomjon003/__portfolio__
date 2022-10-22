import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home_page'>
      <div className="page_container">
        <div className="text_container">
          <h1>Hi,</h1>
          <div className='name'>
            <p>I'am Ilhomjon Isoqjonov.</p>
          </div>
          <h2>A Junior Web Developer</h2>
        </div>
        <div className="btn_container">
          <Link to="/contact">
            <button className='btn'>Contact me</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
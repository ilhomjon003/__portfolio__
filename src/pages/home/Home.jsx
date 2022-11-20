import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {

  return (
    <div className='home_page'>
      <div className="page_container">
        <div className="text_container">
          <h1>Hi,</h1>
          <h1>I'm Ilhomjon Isaqjonov</h1>
          <h2>I build websites</h2>
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
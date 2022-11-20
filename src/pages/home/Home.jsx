import React from 'react';
import Typed from "typed.js"
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import "./Home.css";

const Home = () => {

  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Ilhomjon Isaqjonov", "Web Developer"],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 20,
      backDelay: 200,
      smartBackspace: true,
      cursorChar: "",
    });

    return () => {
      typed.destroy()
    }
  }, []);

  return (
    <div className='home_page'>
      <div className="page_container">
        <div className="text_container">
          <h1>Hi,</h1>
          <div className='name'>
            <p>I'am <span ref={el}></span></p>
          </div>
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
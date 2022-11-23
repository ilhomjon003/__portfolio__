import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getTrackerPosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div className="home_page" onMouseMove={getTrackerPosition}>
      <div className="page_container">
        <div className="text_container">
          <h1>Hi,</h1>
          <h1>I'm Ilhomjon Isaqjonov</h1>
          <h2>I build websites</h2>
        </div>
        <div className="btn_container">
          <Link to="/contact">
            <button className="btn">Contact me</button>
          </Link>
        </div>
      </div>
      <div className="tracker" style={{ top: `${y}px`, left: `${x}px` }}></div>
      <div className="dot" style={{ top: `${y}px`, left: `${x}px` }}></div>
    </div>
  );
};

export default Home;

import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className="navigation">
        <Link to="/">
          <h2>
            <span>I</span>
            <span>I</span>
            <span>I</span>
          </h2>
        </Link>

        <ul className="navigation_collection">
          <Link to="/about"><li className='item'>01. <p>About</p></li></Link>
          <Link to="/work"><li className='item'>02. <p>Work</p></li> </Link>
          <Link to="/skills"><li className='item'>03. <p>Skills</p></li></Link>
          <Link to="/contact"><li className='item'>04. <p>Contact</p></li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Header;




// import React from 'react';
// import './Header.css';
// import { Link } from 'react-router-dom';
// import logo from "../../assets/logo of mine.mp4"

// const Header = () => {
//   return (
//     <div className='header'>
//       <div className="navigation">
//           <div className="navigation_logo">
//             <video src={logo}></video>
//           </div>

//           <ul className="navigation_collection">
//             <Link to="about"><li className='item'>01. <p>About</p></li></Link>
//             <Link to="work"><li className='item'>02. <p>Work</p></li> </Link>
//             <Link to="Skills"><li className='item'>03. <p>Skills</p></li></Link>
//             <Link to="contact"><li className='item'>04. <p>Contact</p></li></Link>
//           </ul>
//       </div>
//     </div>
//   )
// }

// export default Header;

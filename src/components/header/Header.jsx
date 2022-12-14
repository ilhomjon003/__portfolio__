import { useState } from "react";
import "./Header.css";
import { CloseIcon, MenuIcon } from "../../assets";
import { Link } from "react-router-dom";
import { NavRoutes } from "../../routes";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const changeMenuState = () => setIsMenuVisible(!isMenuVisible);

  const sliced = NavRoutes.slice(0, 4);
  return (
    <div className="header">
      <div className="navigation">
        <Link to="/">
          <h2>
            <span>I</span>
            <span>I</span>
            <span>I</span>
          </h2>
        </Link>

        <div className="icons__container">
          {isMenuVisible ? (
            <CloseIcon className="icon" onClick={changeMenuState} />
          ) : (
            <MenuIcon className="icon" onClick={changeMenuState} />
          )}
        </div>

        <ul className={isMenuVisible ? "dropdown" : "navigation_collection"}>
          {sliced?.map(({ path, title, id }) => (
            <Link to={path} key={id} onClick={() => setIsMenuVisible(false)}>
              <li className="item">
                0{id}. <p>{title}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

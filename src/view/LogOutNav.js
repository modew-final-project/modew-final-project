import React from "react";
import searchLogo from "../images/main_search.png";
import menuLogo from "../images/main_menu.png";
import { Link } from "react-router-dom";

const LogOutNav = () => {
  return (
    <>
      <div className="header_right">
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Sign">Sign in</Link>
          </li>
          <li>
            <img src="" />
            <Link to="">
              <img src={searchLogo} alt="main_search.png" />
            </Link>
          </li>
          {/* <li>
            <img src="" />
            <Link to="">
              <img src={menuLogo} alt="main_menu.png" />
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default LogOutNav;

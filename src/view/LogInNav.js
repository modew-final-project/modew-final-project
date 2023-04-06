import React from "react";
import searchLogo from "../images/main_search.png";
import { Link } from "react-router-dom";
import { authService } from "../fbase";

// 로그인 했을 시 부여지는 네비게이션 바

const LogInNav = () => {
  const onLogOutClick = () => authService.signOut();

  return (
    <>
      <div className="header_right">
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="" onClick={onLogOutClick}>
              LogOut
            </Link>
          </li>
          <li>
            <Link to="/UserInfo">My Page</Link>
          </li>
          <li>
            <Link to="/MyDrive">My Drive</Link>
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

export default LogInNav;

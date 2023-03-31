import React, { useState } from "react";
import searchLogo from "../images/main_search.png"
import menuLogo from "../images/main_menu.png"
import { Link } from "react-router-dom";




const LogInNav = ()=>{


    return(
        <>
        <div className="header_right">
            <ul>
                <li><Link to="/">Main</Link></li>
                <li><Link to="">LogOut</Link></li>
                <li><Link to="/UserInfo">My Page</Link></li>
                <li><Link to="/MyDrive">My Drive</Link></li>
                <li><img src=""/><Link to=""><img src={searchLogo} alt="main_search.png"/></Link></li>
                <li><img src=""/><Link to=""><img src={menuLogo} alt="main_menu.png"/></Link></li>
            </ul>
            </div>
            </>
    );
}

export default LogInNav;
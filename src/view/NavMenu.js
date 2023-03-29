import React, { useState } from "react";
import searchLogo from "../images/main_search.png"
import menuLogo from "../images/main_menu.png"



const Nav = ()=>{


    return(
        <>
                <ul>
                    <li><a href="">Login</a></li>
                    <li><a href="">Sign in</a></li>
                    <li><a href="">My Page</a></li>
                    <li><a href="">My Drive</a></li>
                    <li><img src=""/><img src={searchLogo} alt="main_search.png"/></li>
                    <li><img src=""/><img src={menuLogo} alt="main_menu.png"/></li>
                </ul>
            </>
    );
}

export default Nav;
import React, { useState } from "react";

import '../sources/css/common.css'
import '../sources/css/style.css'
import '../sources/css/font.css'

const Nav = ()=>{


    return(
        <div className="header_right">
                <ul>
                    <li><a href="">Login</a></li>
                    <li><a href="">Sign in</a></li>
                    <li><a href="">My Page</a></li>
                    <li><a href="">My Drive</a></li>
                    <li><img src=""/><img src="./images/main_search.png"/></li>
                    <li><img src=""/><img src="./images/main_menu.png"/></li>
                </ul>
            </div>
    );
}

export default Nav;
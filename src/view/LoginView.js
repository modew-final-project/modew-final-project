import React, { useState } from "react";
import { Route } from "react-router-dom";
import MyDrive from "./MyDrive";
import Main from "./Main";
import UserInfo from "./UserInfo";
import LogInNav from "./LogInNav";






const LoginView = ()=>{


    return(
        <>
            <div id="wrap">
            <div className="mainWrap">
              <LogInNav/>
              {/* <Route exact path="/Conditions"><Conditions/></Route> */}
                <Route exact path="/Mydrive"><MyDrive /></Route>
                <Route exact path="/UserInfo"><UserInfo /></Route>
                <Route exact path="/Main"><Main/></Route>
                <Route exact path="/"><Main/></Route>
             </div>  
          </div>
            </>
    );
}

export default LoginView;
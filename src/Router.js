import React, { useState } from "react";
import { HashRouter as Router, Route, Switch,Link } from "react-router-dom";
import Login from "./view/Login";
import Sign from "./view/Sign";
import MyDrive from "./view/MyDrive";
import Main from "./view/Main";
import UserInfo from "./view/UserInfo";
import LogInNav from "./view/LogInNav";
import LogOutNav from "./view/LogOutNav";


const AppRouter = ({isLoggedIn}) => {
  
    // 로그인 여부 판단
    

  return (
    <Router>

      <Switch>
        {isLoggedIn ? (             
          <div id="wrap">
            <div className="mainWrap">
              <LogInNav/>
                <Route exact path="/Mydrive"><MyDrive /></Route>
                <Route exact path="/UserInfo"><UserInfo /></Route>
                <Route exact path="/Main"><Main/></Route>
                <Route exact path="/"><Main/></Route>
             </div>  
          </div>

   ):
                    (
                      <div id="wrap">
                        <div className="mainWrap">
                          <LogOutNav/>
                          <Route exact path="/Sign"><Sign /></Route>
                          <Route exact path="/Login"><Login /></Route>
                          <Route exact path="/Main"><Main/></Route>
                          <Route exact path="/"><Main/></Route>
                        </div>  
                      </div>

                    
                    )
                    }
                    
                </Switch>
                
    </Router>
  );
};
export default AppRouter;
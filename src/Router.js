import React, { useState } from "react";
import { HashRouter as Router, Route, Switch,Link } from "react-router-dom";

import Conditions from "./view/Conditions";
import LoginView from "./view/LoginView";
import LogOutView from "./view/LogOutView";


const AppRouter = ({isLoggedIn}) => {
  
    // 로그인 여부 판단
    

  return (
    <Router>
      
      <Switch>
      <Route exact path="/Conditions"><Conditions/></Route>
        {isLoggedIn ? (     
          <>
            <Route path="/"><LoginView/></Route>
          </>        
          // <div id="wrap">
          //   <div className="mainWrap">
          //     <LogInNav/>
          //     {/* <Route exact path="/Conditions"><Conditions/></Route> */}
          //       <Route exact path="/Mydrive"><MyDrive /></Route>
          //       <Route exact path="/UserInfo"><UserInfo /></Route>
          //       <Route exact path="/Main"><Main/></Route>
          //       <Route exact path="/"><Main/></Route>
          //    </div>  
          // </div>
          // <Route path="/"><LoginView/></Route>

   ):
                    (
                      // <div id="wrap">
                      //   <div className="mainWrap">
                      //     <LogOutNav/>
                      //     {/* <Route exact path="/Conditions"><Conditions/></Route> */}
                      //     <Route exact path="/Sign"><Sign /></Route>
                      //     <Route exact path="/Login"><Login /></Route>
                      //     <Route exact path="/Main"><Main/></Route>
                      //     <Route exact path="/"><Main/></Route>
                      //   </div>  
                      // </div>
                        <Route path="/"><LogOutView/></Route>
                    
                    )
                    }
                    
                </Switch>

    </Router>
  );
};
export default AppRouter;
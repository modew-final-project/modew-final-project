import React, { useState } from "react";
import { HashRouter as Router, Route, Switch,Link } from "react-router-dom";
import Login from "./view/Login";
import Sign from "./view/Sign";
import Main from "./view/Main";
import UserInfo from "./view/UserInfo";
import LogInNav from "./view/LogInNav";
import LogOutNav from "./view/LogOutNav";


const AppRouter = ({isLoggedIn}) => {
  
    // 로그인 여부 판단
    

  return (
    <Router>
        <div id="wrap">
            <div className="mainWrap"> 
                <Switch>
                    {isLoggedIn ? (
                        <>
                        {/* 네비게이션 바 */}
                            <Route exact path="/"><LogInNav/></Route>
                             
                        {/* 구현된 네비게이션 바에 따른 선택지 */}
                            <Route exact path="/Sign"><Sign /></Route>
                            <Route exact path="/UserInfo"><UserInfo /></Route>

                        {/* 기본으로 보일 페이지 */}
                            <Route exact path="/"><Main/></Route>
                        </>
                        
                        
                    ):
                    (
                        <>
                            <Route exact path="/"><LogOutNav/></Route>
                            <Route exact path="/Sign"><Sign /></Route>
                            <Route exact path="/Login"><Login /></Route>
                            <Route exact path="/"><Main/></Route>
                        </>
                    
                    )
                    }
                    
                </Switch>

                <Switch>
                {isLoggedIn ? (
                <>
                    <Route exact path="/Sign"><Sign /></Route>
                    <Route exact path="/UserInfo"><UserInfo /></Route>
                    <Route exact path="/"><Main/></Route>
                </>
                ):
                (
                    <>
                    <Route exact path="/Sign"><Sign /></Route>
                    <Route exact path="/Login"><Login /></Route>
                    <Route exact path="/"><Main/></Route>
                </>

                )
                
                }
                </Switch>
                
            </div>
        </div>
      

{/* {       
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>


          </>

        )}
      </Switch> } */}

    </Router>
  );
};
export default AppRouter;
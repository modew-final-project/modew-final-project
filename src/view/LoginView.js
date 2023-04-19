import React, { useState } from "react";
import { Route } from "react-router-dom";
import MyDrive from "./MyDrive";
import Main from "./Main";
import UserInfo from "./UserInfo";
import LogInNav from "./LogInNav";
import Search from "./Search";

// 로그인 했을 때 보여지는 view

const LoginView = () => {
  const [isClicked, setIsClicked] = useState(false);
  console.log("로그인화면 ", isClicked);
  const setState = (updataeValue)=>{
    setIsClicked(updataeValue);
  }

  return (
    <>
      <div id="wrap">
        <div className="mainWrap">
          <LogInNav />
          <Route exact path="/Search">
            <Search />
          </Route>
          <Route exact path="/Mydrive">
            <MyDrive isClicked={isClicked} setState={setState}/>
          </Route>
          <Route exact path="/UserInfo">
            <UserInfo />
          </Route>
          <Route exact path="/Main">
            <Main isClicked={isClicked} />
          </Route>
          <Route exact path="/">
            <Main isClicked={isClicked} />
          </Route>
        </div>
      </div>
    </>
  );
};

export default LoginView;

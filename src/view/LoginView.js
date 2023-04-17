import React, { useState } from "react";
import { Route } from "react-router-dom";
import MyDrive from "./MyDrive";
import Main from "./Main";
import UserInfo from "./UserInfo";
import LogInNav from "./LogInNav";
import Search from "./Search";

// 로그인 했을 때 보여지는 view

const LoginView = () => {
  return (
    <>
      <div id="wrap">
        <div className="mainWrap">
          <LogInNav />
          <Route exact path="/Search">
            <Search />
          </Route>
          <Route exact path="/Mydrive">
            <MyDrive />
          </Route>
          <Route exact path="/UserInfo">
            <UserInfo />
          </Route>
          <Route exact path="/Main">
            <Main />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </div>
      </div>
    </>
  );
};

export default LoginView;

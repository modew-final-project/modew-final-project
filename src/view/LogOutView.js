import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Sign from "./Sign";
import Main from "./Main";
import LogOutNav from "./LogOutNav";

const LoginView = () => {
  return (
    <>
      <div id="wrap" className="scroll">
        <div className="mainWrap">
          <LogOutNav />
          <Route exact path="/Sign">
            <Sign />
          </Route>
          <Route exact path="/Login">
            <Login />
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

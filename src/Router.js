import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Conditions from "./view/Conditions";
import LoginView from "./view/LoginView";
import LogOutView from "./view/LogOutView";
import File from "./view/File";
import File_copy from "./view/File_copy";

const AppRouter = ({ isLoggedIn }) => {
  // 로그인 여부 판단

  return (
    <Router>
      <Switch>
        <Route exact path="/Conditions">
          <Conditions />
        </Route>
       <Route path="/File">
          <File />
        </Route> 
        <Route path="/File_copy">
          <File_copy />
        </Route> 

        {isLoggedIn ? (
          <>
            <Route path="/">
              <LoginView />
            </Route>
          </>
        ) : (
          <Route path="/">
            <LogOutView />
          </Route>
        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;

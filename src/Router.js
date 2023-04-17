import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Conditions from "./view/Conditions";
import CarAccident from "./view/CarAccident";
import Certification from "./view/Certification";
import Resignation from "./view/Resignation";
import LoginView from "./view/LoginView";
import LogOutView from "./view/LogOutView";
import File from "./view/File";
import File_copy from "./view/File_copy";
import Post from "./case/Post";
const AppRouter = ({ isLoggedIn }) => {
  // 로그인 여부 판단

  return (
    <Router>
      <Switch>
        <Route exact path="/Conditions">
          <Conditions />
        </Route>
        <Route exact path="/CarAccident">
          <CarAccident />
        </Route>
        <Route exact path="/Certification">
          <Certification />
        </Route>
        <Route exact path="/Resignation">
          <Resignation />
        </Route>
       <Route path="/File">
          <File />
        </Route> 
        <Route path="/File_copy">
          <File_copy />
        </Route> 
        <Route path="/Post">
          <Post />
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

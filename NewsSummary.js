import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import React from "react";
import Conditions from "./view/Conditions";
import LogOutView from "./view/LogOutView";
import File from "./view/File";
import NewsSummary from "./NewsSummary";  // NewsSummary 컴포넌트를 import

const AppRouter = ({ isLoggedIn }) => {
    
  return (
    <Router>
      <Switch>
        <Route exact path="/Conditions">
          <Conditions />
        </Route>
        <Route path="/File">
          <File />
        </Route>
        {isLoggedIn ? (
          <>
            {/* 로그인 한 사용자에게만 보여줄 페이지 설정 */}
            <Route exact path="/">
              <NewsSummary />
            </Route>
          </>
        ) : (
          <>
            {/* 로그인하지 않은 사용자에게 보여줄 페이지 설정 */}
            <Route path="/">
              <LogOutView />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;
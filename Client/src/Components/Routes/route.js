import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "../404NotFound/404";
import Account from "../Account/account";
import Forms from "../Forms/form";
import Homepage from "../HomePage";
import Login from "../LoginRegister/login";
import Register from "../LoginRegister/register";
import ForgetPassword from "../ForgetPassword/forgetPassword";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/forget-password" exact component={ForgetPassword}/>
        <Route path="/register" exact component={Register} />
        <Route path="/forms"  component={Forms}/>
        
        <Route path="/account" exact component={Account}/>
        <Route path="*" exact component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default Routes;

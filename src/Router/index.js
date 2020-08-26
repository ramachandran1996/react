// eslint-disable-next-line no-unused-vars
import React,{Component} from 'react';
import  Header from '../component/Header';
import { ProtectedRoute } from "./protectedRoute";
import  Logout from '../Screen/logout';
import { Switch, Route,} from 'react-router-dom';
const Router = props => {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Header} />
          <ProtectedRoute exact path="/app" component={Logout} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    );
  }
  export default Router;
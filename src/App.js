/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard'
import Preferences from './Components/Preferences/Preferences'
import './App.scss';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound'
import Login from './Components/Login/Login'
import Signup from "./Components/Signup/Signup";

const App = () => { 

  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>
          <Route strict path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/preferences">
            <Preferences />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

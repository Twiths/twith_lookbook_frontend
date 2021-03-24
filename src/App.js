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

import { logout } from "./Actions/auth";
import { clearMessage } from "./Actions/message";

import { history } from './helpers/history';


const App = () => { 
const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  return (
      <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route exact path="/home">
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
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

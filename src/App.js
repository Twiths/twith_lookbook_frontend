import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard'
import Preferences from './Components/Preferences/Preferences'
import './App.css';
import Login from './Components/Login';
import useToken from './Components/useToken';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound'




function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
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
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

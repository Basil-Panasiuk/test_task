/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  return (
    <div>
      <Header
        isAuth={isAuth}
      />
      <hr />
      <div>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} setIsAuth={setIsAuth} isAuth={isAuth} />
          </Route>
          <Route path="/profile">
            <Profile {...user} isAuth={isAuth} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

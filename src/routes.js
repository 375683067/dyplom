import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Menu from './containers/menuContainer';
import Login from './containers/loginContainer';
import Layout from './components/layout/layout';
import LevelManager from './containers/levelManager';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Login}/>
    <Route path="menu" component={Menu}/>
    <Route path="level/:id" component={LevelManager}/>
  </Route>
);

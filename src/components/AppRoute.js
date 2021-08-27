import React from 'react';
import { publicRoutes, privateRoutes } from '../routes';
import { Route, Switch, Redirect } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../util/constants';

const AppRoute = () => {
  const user = true;

  return user ? (
    <Switch>
      {
        privateRoutes.map(({path, Component}) => (
          <Route path={path} component={Component} exact="true" />
        ))
      }
      <Redirect to={CHAT_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {
        publicRoutes.map(({path, Component}) => (
          <Route path={path} component={Component} exact="true" />
        ))
      }
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  ); 
};

export default AppRoute;
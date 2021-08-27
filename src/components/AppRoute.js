import React, { useContext } from 'react';
import { publicRoutes, privateRoutes } from '../routes';
import { Route, Switch, Redirect } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../util/constants';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';

const AppRoute = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  console.log(user);

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={CHAT_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRoute;

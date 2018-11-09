import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login, NotFound } from '../views';
import AdminRoutes from './admin.routes';
import ClientRoutes from './client.routes';

export const routes = [
  {
    path: '/',
    component: Login,
    exact: true
  },
  {
    path: '/react-training',
    component: ClientRoutes,
    exact: false
  },
  {
    path: '/admin',
    component: AdminRoutes,
    exact: false
  },
  {
    path: '',
    component: NotFound,
    exact: false
  }
];

function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  );
}

export default Routes;

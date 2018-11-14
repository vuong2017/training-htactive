import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { DashBoard, NotFound } from '../views';
import Admin from '../views/admin';

export const routes = [
  {
    path: '/admin',
    component: DashBoard,
    exact: true
  },
  {
    path: '',
    component: NotFound,
    exact: false
  }
];

function AdminRoutes() {
  return (
    <React.Fragment>
      <Admin>
        <Switch>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Admin>
    </React.Fragment>
  );
}

export default AdminRoutes;

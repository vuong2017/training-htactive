import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  DashBoard,
  ReactTraining,
  Login,
  NotFound,
} from '../views'

import AdminRoutes from './admin.routes';

export const routes = [
  {
    path: "/",
    component: Login,
    exact: true,
  },
  {
    path: "/react-training",
    component: ReactTraining,
    exact: false,
  },
  {
    path: "/admin",
    component: AdminRoutes,
    exact: false,
  },
  {
    path: "",
    component: NotFound,
    exact: false,
  }
];


class Routes extends React.Component {
  render() {
    return (
        <Switch>
          {routes.map( route => {
            return <Route key={route.path} {...route} />
          })}
        </Switch>
    );
  }
}

export default Routes;

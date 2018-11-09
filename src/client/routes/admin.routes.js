import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  DashBoard,
  NotFound,
} from '../views'

import {
  Header,
  Sidebar,
  Content,
  Footer,
} from '../components/Layouts/Admin'

export const routes = [
  {
    path: "/admin",
    component: DashBoard,
    exact: true,
  },
  {
    path: "",
    component: NotFound,
    exact: false,
  }
];


class AdminRoutes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <Content>
          <Switch>
            {routes.map(route => {
              return <Route key={route.path} {...route} />
            })}
          </Switch>
        </Content>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AdminRoutes;

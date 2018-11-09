import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  ReactTraining,
  NotFound,
} from '../views'

import {
  Header,
  Sidebar,
  Content,
  Footer,
} from '../components/Layouts/Client'

export const routes = [
  {
    path: "/react-training",
    component: ReactTraining,
    exact: true,
  },
  {
    path: "",
    component: NotFound,
    exact: false,
  }
];


class ClientRoutes extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default ClientRoutes;

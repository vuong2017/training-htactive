import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ReactTraining, NotFound } from '../views';

import {
  Header,
  SideBar,
  Content,
  Footer,
} from '../components/Layouts/Client';

export const routes = [
  {
    path: '/react-training',
    component: ReactTraining,
    exact: true
  },
  {
    path: '',
    component: NotFound,
    exact: false
  }
];

function ClientRoutes() {
  return (
    <React.Fragment>
      <Header />
      <SideBar />
      <Content>
        <Switch>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Content>
      <Footer />
    </React.Fragment>
  );
}

export default ClientRoutes;

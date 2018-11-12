import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { DashBoard, NotFound } from '../views';

import {
  Header,
  SideBar,
  Content,
  Footer
} from '../components/Admin';

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

export default AdminRoutes;

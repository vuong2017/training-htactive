import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ReactTraining, NotFound } from '../views';

// db
import { SideBarData } from '../db';

import {
  Header,
  SideBar,
  Content,
  Footer,
} from '../components/Client';

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
      <div className="container">
        <SideBar data={SideBarData} />
        <Content>
          <Switch>
            {routes.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Content>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default ClientRoutes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ReactTraining, NotFound } from '../views';

// db
import { SideBarData, SideBarData1 } from '../db';

import { Header, SideBar, Content, Footer } from '../components/Client';

export const routes = [
  {
    path: '/:client',
    component: ReactTraining,
    exact: true
  },
  {
    path: '/:client/:id',
    component: ReactTraining,
    exact: true
  },
  {
    path: '',
    component: NotFound,
    exact: false
  }
];

class ClientRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      status: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.match.params.client === "react" ? this.setState({ data: SideBarData, status: true }) : this.setState({ data: SideBarData1, status: true })
      
    }, 1000);
  }

  render() {
    console.log( 'chinh', this.props.match.params.client );
    if (!this.state.status) {
      return <h1>dang fetch</h1>
    }
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <SideBar data={this.state.data} />
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
}

export default ClientRoutes;

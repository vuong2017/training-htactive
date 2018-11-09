import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import Routes from './routes';
import createStore from './store/configureStore';

const store = createStore(window.REDUX_DATA);

const jsx = (
  <ReduxProvider store={store}>
    <Router history={createBrowserHistory()}>
      <Routes />
    </Router>
  </ReduxProvider>
);

const app = document.getElementById('app');
ReactDOM.hydrate(jsx, app);

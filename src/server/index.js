import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Helmet from 'react-helmet';

import Routes, { routes } from '../client/routes';
import createStore, { initializeSession } from '../client/store/configureStore';
import htmlTemplate from './render';

const app = express();

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/*', (req, res) => {
  const context = {};
  const store = createStore();

  store.dispatch(initializeSession());

  const dataRequirements = routes
    .filter(route => matchPath(req.url, route)) // filter matching paths
    .map(route => route.component) // map to components
    .filter(comp => comp.serverFetch) // check if components have data requirement
    .map(comp => store.dispatch(comp.serverFetch())); // dispatch data requirement

  Promise.all(dataRequirements).then(() => {
    const jsx = (
      <ReduxProvider store={store}>
        <StaticRouter context={context} location={req.url}>
          <Routes location={req.url} />
        </StaticRouter>
      </ReduxProvider>
    );
    const reactDom = renderToString(jsx);
    const reduxState = store.getState();
    const helmetData = Helmet.renderStatic();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlTemplate(reactDom, reduxState, helmetData));
  });
});

app.listen(2048);

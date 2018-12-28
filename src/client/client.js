import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'

import { storeRedux } from './services/axios-services'
import Routes from './routes'
import createStore from './store/configureStore'

const store = createStore(window.REDUX_DATA)
storeRedux(store)

const jsx = (
  <ReduxProvider store={store}>
    <Router history={createBrowserHistory()}>
      <Routes />
    </Router>
  </ReduxProvider>
)

const app = document.getElementById('app')
const renderOrHydrate = app.innerHTML.trim().length ? 'hydrate' : 'render'
ReactDOM[renderOrHydrate](jsx, app)

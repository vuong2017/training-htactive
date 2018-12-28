import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'
import { NotificationContainer } from 'react-notifications'

import baseUrl from '../common/baseUrl'
import { Login, Category, NotFound } from '../views'
import AdminRoutes from './admin.routes'
import CategoryRoutes from './category.routes'

export const routes = [
  {
    path: '/',
    component: () => <h1>Home</h1>,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    layout: 'login'
  },
  {
    path: '/admin',
    component: AdminRoutes,
    exact: false,
    layout: 'admin'
  },
  {
    path: '/category',
    component: Category,
    exact: true
  },
  {
    path: '/category/:idSubjects',
    component: CategoryRoutes,
    exact: false
  },
  {
    path: '/fail',
    component: () => <h1>ko co quyen</h1>,
    exact: false
  },
  {
    path: '',
    component: NotFound,
    exact: false
  }
]

const PrivateRoute = (props) => {
  const checkAuth = window.localStorage.getItem("token")
  const checkRole = window.localStorage.getItem("positionNumber") > 1
  if (props.layout === 'login') return checkAuth ? document.location.replace("/category") : <Route {...props} />
  if (props.layout === 'admin') {
    if (!checkRole) {
      window.localStorage.removeItem("token")
      window.localStorage.removeItem("positionNumber")
    }
    return !checkAuth ? document.location.replace(baseUrl.URL_LOGIN) : checkRole ? <Route {...props} /> : <Redirect to={baseUrl.URL_FAIL} />
  }
  return <Route {...props} />
}

function Routes() {
  if (typeof(window) !== "undefined") {
    return (
      <React.Fragment>
        <NotificationContainer />
        <LoadingBar scope="sectionBar" style={{ zIndex: 9999 }} />
        <Switch>
          {routes.map(route => (
            <PrivateRoute key={route.path} {...route} />
          ))}
        </Switch>
      </React.Fragment>
    )
  }
  return null
}

export default Routes

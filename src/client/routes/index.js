import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Login, Category, NotFound } from '../views'
import AdminRoutes from './admin.routes'
import CategoryRoutes from './category.routes'

export const routes = [
  {
    path: '/',
    component: Login,
    exact: true
  },
  {
    path: '/admin',
    component: AdminRoutes,
    exact: false
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
    path: '',
    component: NotFound,
    exact: false
  }
]

function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  )
}

export default Routes

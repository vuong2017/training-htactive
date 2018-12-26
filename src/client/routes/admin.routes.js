import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { DashBoard, NotFound, Sections, Subject, Posts } from '../views'
import DrawerMemu from '../components/admin/drawerMenu'
import Sidebar from '../components/admin/siderBar'

export const routes = [
  {
    path: '/admin',
    component: DashBoard,
    exact: true
  },
  {
    path: '/admin/sections',
    component: Sections,
    exact: false
  },
  {
    path: '/admin/subject',
    component: Subject,
    exact: false
  },
  {
    path: '/admin/posts/:idSections',
    component: Posts,
    exact: false
  },
  {
    path: '',
    component: NotFound,
    exact: false
  }
]

function AdminRoutes() {
  return (
    <React.Fragment>
      <DrawerMemu />
      <Sidebar />
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </React.Fragment>
  )
}

export default AdminRoutes

import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import Helmet from 'react-helmet'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'

import Routes, { routes } from '../client/routes'
import createStore, { initializeSession } from '../client/store/configureStore'
import htmlTemplate from './render'
import routess from './routes'

const app = express()
const router = express.Router()

/** connect to MongoDB datastore */
mongoose.connect('mongodb://hello:27017/training', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('ket noi thanh cong')
})

/** static forder */
app.use(express.static('dist'))
app.use(express.static('public'))
app.use(express.static('uploads'))

/** set up middlewares */
app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use(bodyParser.json({limit: '50mb'}))
/** set up routes {API Endpoints} */
app.use('/api', router)
routess(router)

app.get('/*', (req, res) => {
  const context = {}
  const store = createStore()

  store.dispatch(initializeSession())

  const dataRequirements = routes
    .filter(route => matchPath(req.url, route)) // filter matching paths
    .map(route => route.component) // map to components
    .filter(comp => comp.serverFetch) // check if components have data requirement
    .map(comp => store.dispatch(comp.serverFetch())) // dispatch data requirement

  Promise.all(dataRequirements).then(() => {
    const jsx = (
      <ReduxProvider store={store}>
        <StaticRouter context={context} location={req.url}>
          <Routes location={req.url} />
        </StaticRouter>
      </ReduxProvider>
    )
    const reactDom = renderToString(jsx)
    const { url } = req
    const helmetData = Helmet.renderStatic()

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(htmlTemplate(reactDom, url, helmetData))
  })
})

app.listen(8080)

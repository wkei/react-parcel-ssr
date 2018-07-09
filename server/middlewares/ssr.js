// src/server/middlewares/ssr.js
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import { StaticRouter as Router } from 'react-router-dom'
import matchRoute from './matchRoute'
 
import App from '~/App'
import routes from '~/routes'
import configureStore from '~/store/configureStore'
import tmpl from './tmpl'
 
export default async (req, res, next) => {
  const { component, params } = matchRoute(req.path)
  if (!component) {
    return next()
  }

  const context = {}

  const store = configureStore()
  if (component.fetchData) {
    await component.fetchData(store.dispatch, params, req.query)
  }
  const preloadedState = store.getState()

  const markup = ReactDOMServer.renderToString(
    <Provider store={store}>
      <CookiesProvider cookies={req.universalCookies}>
        <Router location={req.url} context={context}>
          <App />
        </Router>
      </CookiesProvider>
    </Provider>
  )

  if (context.url) {
    return res.redirect(context.url)
  }

  const html = tmpl({ markup, preloadedState })
 
  res.send(html)
}

// src/server/middlewares/ssr.js
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { CookiesProvider } from 'react-cookie'
import { StaticRouter as Router } from 'react-router-dom'
 
import App from '~/App'
import tmpl from './tmpl'
 
export default function middleware(req, res) {
  const context = {}
  const markup = ReactDOMServer.renderToString(
    <CookiesProvider cookies={req.universalCookies}>
      <Router location={req.url} context={context}>
        <App />
      </Router>
    </CookiesProvider>
  )

  if (context.url) {
    console.log('context.url', context)
  }

  const html = tmpl(markup)
 
  res.send(html)
}

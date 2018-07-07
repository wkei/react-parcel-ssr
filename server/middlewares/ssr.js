// src/server/middlewares/ssr.js
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { CookiesProvider } from 'react-cookie'
 
import App from '~/containers/App'
import tmpl from './tmpl'
 
export default function middleware(req, res) {
  const markup = ReactDOMServer.renderToString(
    <CookiesProvider cookies={req.universalCookies}>
      <App />
    </CookiesProvider>
  )

  const html = tmpl(markup)
 
  res.send(html)
}

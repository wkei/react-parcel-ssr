// src/client.js
import React from 'react'
import ReactDOM from 'react-dom'
import { CookiesProvider } from 'react-cookie'
 
import App from '~/containers/App'
 
const appEl = document.getElementById('main-app')
 
ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  appEl
)

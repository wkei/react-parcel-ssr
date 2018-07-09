// src/client.js
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter as Router } from 'react-router-dom'
 
import App from '~/App'
import configureStore from './store/configureStore'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
 
ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <Router>
        <App />
      </Router>
    </CookiesProvider>
  </Provider>,
  document.getElementById('main-app')
)

if (module.hot) {
  module.hot.dispose(function () {
    console.log('module.hot.dispose')
    // module is about to be replaced
  });

  module.hot.accept(function () {
    // module or one of its dependencies was just updated
    console.log('module.hot.accept')
  });
}

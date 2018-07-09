// src/store.js
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './reducers'

const middlewares = [thunk]
if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  middlewares.push(logger)
}
const enhancers = applyMiddleware(...middlewares)

let store = null

export default (preloadedState = {}) => {
  // console.log('configureStore', store)
  if (!store) {
    store = createStore(reducers, preloadedState, enhancers)
  }
  // if (module.hot) {
  //   module.hot.accept('./reducers/index', () => {
  //     const nextReducers = require('./reducers/index')
  //     store.replaceReducer(nextReducers)
  //   })
  // }
  return store
}


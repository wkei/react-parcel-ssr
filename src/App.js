// src/components/App.js
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from './routes'

import '~/styles/main.css'

class App extends Component {
  componentDidMount () {
    console.log('App componentDidMount')
  }
  render () {
    return (
      <Switch>
        {routes.map(route =>
          <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
        )}
      </Switch>
    )
  }
}

export default App

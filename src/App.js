// src/components/App.js
import './App.less';
import '~/styles/main.css'

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from './routes'

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

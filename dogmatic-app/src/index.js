import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from 'components/Home'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

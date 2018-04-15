import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


import App from 'App'
import { Login } from 'pages/Login'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={App} />
      <Route component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

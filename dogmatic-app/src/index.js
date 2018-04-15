import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'



import App from 'App'
import { Login } from 'pages/Login'
import { Register } from 'pages/Register'
import { Home } from 'pages/Home'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path='/home' component={Home} />
      <Route exact path="/" component={App} />
      <Route component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

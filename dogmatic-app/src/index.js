import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import App from 'App'
import { Login } from 'pages/Login'
import { Register } from 'pages/Register'
import { Home } from 'pages/Home'
import { Options } from 'pages/Options'
import { Mybowls } from 'pages/Mybowls'
import { About } from 'pages/About'
import { Feedback } from 'pages/Feedback'
import { AddBowl } from 'pages/AddBowl'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/mybowls' component={Mybowls} />
      <Route exact path='/options' component={Options} />
      <Route exact path='/about' component={About} />
      <Route exact path='/feedback' component={Feedback} />
      <Route exact path='/addbowl' component={AddBowl} />
      <Route exact path="/" component={App} />
      <Route component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

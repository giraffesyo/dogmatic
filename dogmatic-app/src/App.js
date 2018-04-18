import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { NotLoggedIn } from 'pages/NotLoggedIn'
import { Login } from 'pages/Login'
import { Register } from 'pages/Register'
import { Home } from 'pages/Home'
import { Options } from 'pages/Options'
import { Mybowls } from 'pages/Mybowls'
import { About } from 'pages/About'
import { Feedback } from 'pages/Feedback'
import { AddBowl } from 'pages/AddBowl'
import { DeleteDog } from 'pages/DeleteDog'

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter basename="/dogmatic/app">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/deletedog" component={DeleteDog} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/mybowls" component={Mybowls} />
          <Route exact path="/options" component={Options} />
          <Route exact path="/about" component={About} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/addbowl" component={AddBowl} />
          <Route exact path="/" component={NotLoggedIn} />
          <Route component={NotLoggedIn} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

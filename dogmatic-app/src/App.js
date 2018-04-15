import React from 'react'
import { Login } from 'components/Login'
import { NotLoggedIn } from 'components/NotLoggedIn'

class App extends React.PureComponent {
  render() {
    return <NotLoggedIn />
  }
}

export default App

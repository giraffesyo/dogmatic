import React from 'react'
import { Login } from 'components/Login'
import { NotLoggedIn } from 'pages/NotLoggedIn'

class App extends React.PureComponent {
  render() {
    return <NotLoggedIn />
  }
}

export default App

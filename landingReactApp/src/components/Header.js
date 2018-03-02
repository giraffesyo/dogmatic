import React from 'react'
import { Jumbotron } from 'reactstrap'
import { Navbar } from 'reactstrap';
import 'stylesheets/styles.css'
import eatingdogs from 'images/eatingdogs.jpg'

class Header extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <header>
        <Navbar></Navbar>

        <Jumbotron  className={"header bg-dark"}>Test</Jumbotron>
      </header>
    )
  }
}

export { Header }

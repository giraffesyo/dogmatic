import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Header } from 'components/Header'
import { BottomNav } from 'components/BottomNav'
import { Link, Redirect } from 'react-router-dom'
import localForage from 'localforage'


class Options extends React.PureComponent {
  state = { name: '', username: '', loggedIn: true }

  signout = () => {
    localForage.setItem('currentUser', '').then(this.setState({loggedIn: false}))
  }

  render() {
    const { name, username, loggedIn } = this.state
    const { signout } = this
    return (
      <div>
        <Header />
        <Container style={{ marginLeft: '5vw', color: 'rgb(26, 154, 189)' }}>
          <Row style={{ marginTop: '10vh' }}>
            <Col>Name: {name}</Col>
          </Row>
          <Row>
            <Col>E-mail: {username}</Col>
          </Row>
          <Row>
            <Col>
              <Link style={{ color: 'rgb(26, 154, 189)' }} to={'/about'}>
                About Us
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link style={{ color: 'rgb(26, 154, 189)' }} to={'/feedback'}>
                Give us feedback
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <span onClick={signout}>Sign Out</span>
            </Col>
          </Row>
        </Container>
        <BottomNav />
        {loggedIn ? null : <Redirect to={'/'}></Redirect>}
      </div>
    )
  }
}

export { Options }

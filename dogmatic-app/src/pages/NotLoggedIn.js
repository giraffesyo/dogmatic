import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

import { Logo } from 'components/Logo'

class NotLoggedIn extends React.PureComponent {
  render() {
    return (
      <Container className="text-center">
        <Logo />
        <Row>
          <Col>
            <Button block style={Styles.button}>
              Log In
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button block style={Styles.button}>
              Sign Up
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

const Styles = {
  button: {
    margin: '4px',
    'background-color': 'rgb(26, 154, 189)',
    'border-color': 'none',
    color: 'rgb(243, 178, 36)',
    'border-radius': 0,
  },
}

export { NotLoggedIn }

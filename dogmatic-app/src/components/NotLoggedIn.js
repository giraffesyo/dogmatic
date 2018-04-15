import React from 'react'
import Logo from 'images/dogmatic-logo.png'
import { Container, Row, Col, Button } from 'reactstrap'

class NotLoggedIn extends React.PureComponent {
  render() {
    return (
      <Container className="text-center">
        <Row>
          <Col>
            <img className="img-fluid" src={Logo} alt="Dogmatic Logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ color: 'rgb(26, 154, 189)' }}>
              It's not just automatic:
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ color: 'rgb(243, 178, 36)' }}>It's Dogmatic.</p>
          </Col>
        </Row>
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

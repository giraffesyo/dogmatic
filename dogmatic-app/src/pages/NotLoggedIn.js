import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

import { Logo } from 'components/Logo'

class NotLoggedIn extends React.PureComponent {
  render() {
    return (
      <Container className="text-center">
        <Logo marginBottom={'20vh'} />
        <Row style={Styles.row}>
          <Col>
            <Button href="/login" block style={Styles.button}>
              Log In
            </Button>
          </Col>
        </Row>
        <Row style={Styles.row}>
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
  row: {
    margin: 8,
  },
  button: {
    width: 100,
    margin: '0 auto',
    backgroundColor: 'rgb(26, 154, 189)',
    borderColor: 'none',
    color: 'rgb(243, 178, 36)',
    borderRadius: 0,
  },
}

export { NotLoggedIn }

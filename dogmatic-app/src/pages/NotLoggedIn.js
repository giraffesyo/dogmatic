import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import localForage from 'localforage'
import { Redirect, Link } from 'react-router-dom'
import { Logo } from 'components/Logo'

class NotLoggedIn extends React.PureComponent {
  state = { currentUser: '' }

  componentDidMount() {
    localForage
      .getItem('currentUser')
      .then(currentUser => this.setState({ currentUser }))
  }

  render() {
    const { currentUser } = this.state
    return (
      <Container className="text-center">
        <Logo marginBottom={'20vh'} />
        <Row style={Styles.row}>
          <Col>
            <Link to="/login">
              <Button block style={Styles.button}>
                Log In
              </Button>
            </Link>
          </Col>
        </Row>
        <Row style={Styles.row}>
          <Col>
            <Link to="/register">
              <Button block style={Styles.button}>
                Sign Up
              </Button>
            </Link>
          </Col>
        </Row>
        {currentUser ? <Redirect to="/home" /> : null}
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

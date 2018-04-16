import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from 'reactstrap'
import localForage from 'localforage'
import { Redirect } from 'react-router-dom'

import { Logo } from 'components/Logo'

class Login extends React.PureComponent {
  state = { username: '', password: '', err: '', message: '' }


  login = async () => {
    const { username, password } = this.state
    if (!username) {
      this.setState({ err: 'warning', message: 'You must enter a username' })
      return
    } else if (!password) {
      this.setState({ err: 'warning', message: 'You must enter a password' })
      return
    }
    const users = await localForage.getItem('users')

    if (users) {
      if (!(username in users)) {
        this.setState({ err: 'danger', message: 'Incorrect Username' }) //account not registered
      } else if (users[username].password === password) {
        await localForage
          .setItem('currentUser', username)
          .then(() =>
            this.setState({ err: 'success', message: 'Success, logging in...' })
          )
      } else {
        this.setState({ err: 'danger', message: 'Incorrect Password' })
      }
    }
    //there are no accounts
    else {
      this.setState({ err: 'danger', message: 'You are not registered.' })
    }
  }

  onUsernameChange = e => {
    this.setState({ username: e.target.value })
  }

  onPasswordChange = e => {
    this.setState({ password: e.target.value })
  }

  render() {
    const offset = 1
    const labelSize = 3
    const inputSize = 7

    const { login, onPasswordChange, onUsernameChange } = this
    const { username, password, err, message } = this.state
    return (
      <Container className="text-center">
        <Logo />
        <Row>
          <Col>
            <Alert color={err}>{message}</Alert>
          </Col>
        </Row>
        <Row>
          <Col className="text-left">
            <Form>
              <FormGroup row>
                <Label xs={{ offset: offset, size: labelSize }} for="userEmail">
                  Email:
                </Label>
                <Col xs={inputSize}>
                  <Input
                    onChange={onUsernameChange}
                    value={username}
                    type="email"
                    name="email"
                    id="userEmail"
                    placeholder="example@domain.com"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label
                  xs={{ offset: offset, size: labelSize }}
                  for="userPassword"
                >
                  Password:
                </Label>
                <Col xs={inputSize}>
                  <Input
                    onChange={onPasswordChange}
                    value={password}
                    type="password"
                    name="password"
                    id="userPassword"
                    placeholder="password"
                  />
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row style={{ marginTop: '5vh' }}>
          <Col>
            <Button onClick={login} block style={Styles.button}>
              Log In
            </Button>
          </Col>
        </Row>
        <a
          href="/"
          style={Styles.backButton}
          className="fa fa-arrow-circle-o-left"
        >
          <div className="sr-only">Back</div>
        </a>
        {err === 'success' ? <Redirect to="/home" push /> : null}
      </Container>
    )
  }
}

const Styles = {
  button: {
    width: 100,
    margin: '0 auto',
    backgroundColor: 'rgb(26, 154, 189)',
    borderColor: 'none',
    color: 'rgb(243, 178, 36)',
    borderRadius: 0,
  },
  backButton: {
    fontSize: '64px',
    color: 'rgb(243, 178, 36)',
    position: 'absolute',
    left: 0,
    bottom: 0,
    paddingLeft: 16,
    paddingBottom: 16,
  },
}

export { Login }

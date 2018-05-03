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
import { /*Redirect,*/ Link } from 'react-router-dom'

import { Logo } from 'components/Logo'

class Register extends React.PureComponent {
  state = {
    users: null,
    name: '',
    username: '',
    password: '',
    message: '',
    err: '',
  }

  componentDidMount() {
    localForage
      .getItem('users')
      .then(users => this.setState({ users }))
      .catch(err => {
        this.setState({ message: err })
      })
  }

  onNameChange = e => {
    this.setState({ name: e.target.value })
  }

  onUsernameChange = e => {
    this.setState({ username: e.target.value })
  }

  onPasswordChange = e => {
    this.setState({ password: e.target.value })
  }

  register = () => {
    const { users, username, name, password } = this.state
    if (!username) {
      this.setState({ err: 'danger', message: 'Username cannot be blank' })
      return
    }
    if (!name) {
      this.setState({ err: 'danger', message: 'Name cannot be blank' })
      return
    }
    if (!password) {
      this.setState({ err: 'danger', message: 'Password cannot be blank' })
      return
    }
    if (users) {
      if (username in users) {
        const message = `It looks like ${username} is already an existing account.`
        this.setState({ err: 'danger', message })
        return
      }
    }
    const updatedUsers = { ...users }
    updatedUsers[username] = {
      name,
      password,
      dogs: [],
    }
    localForage
      .setItem('users', updatedUsers)
      .then(() =>
        localForage.setItem('currentUser', username).then(
          this.setState({
            message: 'Successfully registered!',
            err: 'success',
          })
        )
      )
      .catch(() =>
        this.setState({
          err: 'danger',
          message: 'Failed to register, please try again...',
        })
      )
  }

  render() {
    const offset = 1
    const labelSize = 3
    const inputSize = 7

    const { register, onPasswordChange, onUsernameChange, onNameChange } = this
    const { name, username, password, message, err } = this.state

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
                <Label xs={{ offset: offset, size: labelSize }} for="userName">
                  Name:
                </Label>
                <Col xs={inputSize}>
                  <Input
                    onChange={onNameChange}
                    value={name}
                    id="userName"
                    placeholder="John Appleseed"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label xs={{ offset: offset, size: labelSize }} for="userEmail">
                  Email:
                </Label>
                <Col xs={inputSize}>
                  <Input
                    onChange={onUsernameChange}
                    value={username}
                    type="email"
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
                    value={password}
                    onChange={onPasswordChange}
                    type="password"
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
            <Button onClick={register} block style={Styles.button}>
              Sign Up
            </Button>
          </Col>
        </Row>
        <Link
          to="/"
          style={Styles.backButton}
          className="fa fa-arrow-circle-o-left"
        >
          <div className="sr-only">Back</div>
        </Link>
        {/*err === 'success' ? <Redirect to="/addbowl" push /> : null*/}
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

export { Register }

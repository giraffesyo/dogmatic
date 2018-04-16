import React from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap'

import { Redirect } from 'react-router-dom'

import localForage from 'localforage'

import { Header } from 'components/Header'
import { BottomNav } from 'components/BottomNav'

import icon1 from 'images/icons/icon1.png'
import icon2 from 'images/icons/icon2.png'
import icon3 from 'images/icons/icon3.png'
import icon4 from 'images/icons/icon4.png'

const icons = [icon1, icon2, icon3, icon4]

class AddBowl extends React.PureComponent {
  state = { icon: 0, name: '', currentUser: '', err: '', message: '' }

  componentDidMount() {
    localForage.getItem('currentUser').then(currentUser => {
      this.setState({ currentUser })
      localForage
        .getItem('users')
        .then(users => this.setState({ dogs: users[currentUser].dogs }))
    })
  }

  chooseIcon = e => {
    this.setState({ icon: parseInt(e.target.id, 10) })
  }

  handleNameChange = e => {
    const name = e.target.value
    this.setState({ name })
  }

  addDog = () => {
    const { currentUser, dogs, name, icon } = this.state

    if (dogs.length >= 4) {
      console.log('Sorry too many dogs') //Should never happen since you can't get to the page
    } else {
      localForage.getItem('users').then(users => {
        users[currentUser].dogs.push({
          name,
          icon,
          waterLevel: 0,
          foodLevel: 0,
        })
        localForage
          .setItem('users', users)
          .then(this.setState({ err: 'success' }))
      })
    }
  }
  render() {
    const currentIcon = this.state.icon
    const { name, err } = this.state
    const { handleNameChange, chooseIcon, addDog } = this
    return (
      <div>
        <Header />
        <Container style={{ color: 'rgb(26, 154, 189)', marginTop: '5vh' }}>
          <Row>
            <Col>
              <h2 style={{ color: 'rgb(243, 178, 36)' }}>Add Bowl</h2>
            </Col>
          </Row>
          <Form>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="name">
                    <h4>Name:</h4>
                  </Label>
                  <Input
                    value={name}
                    onChange={handleNameChange}
                    id="name"
                    placeholder="Dog's name"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="serial">
                    <h4>Serial #:</h4>
                  </Label>
                  <Input id="serial" placeholder="Product Serial #" />
                </FormGroup>
              </Col>
            </Row>
          </Form>

          <Row>
            <Col>
              <h2>Icon:</h2>
            </Col>
          </Row>
          <Row>
            {icons.map((icon, i) => (
              <Col xs={3} key={'icon-' + i}>
                <img
                  alt={`Icon of dog number ${i}`}
                  style={
                    currentIcon === i
                      ? {
                          border: '2px solid rgb(243, 178, 36)',
                          borderRadius: 15,
                          width: '50%',
                        }
                      : { width: '50%'}
                  }
                  onClick={chooseIcon}
                  id={i}
                  src={icon}
                />
              </Col>
            ))}
          </Row>

          <Row>
            <Col xs={{ offset: 8, size: 2 }} style={{ marginTop: 20 }}>
              <Button onClick={addDog} block style={Styles.button}>
                Add Dog
              </Button>
            </Col>
          </Row>
          {err === 'success' ? <Redirect to="/mybowls" /> : null}
        </Container>
        <BottomNav />
      </div>
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
}

export { AddBowl }

import React from 'react'
import localForage from 'localforage'
import { Container, Row, Col, Button, Alert } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { Header } from 'components/Header'
import { BottomNav } from 'components/BottomNav'
import { Dog } from 'components/Dog'

class DeleteDog extends React.PureComponent {
  state = {
    currentUser: '',
    dogs: [],
    currentDog: -1,
    redirect: false,
    message: '',
  }

  async componentDidMount() {
    await localForage
      .getItem('currentUser')
      .then(currentUser =>
        localForage
          .getItem('users')
          .then(users =>
            this.setState({ currentUser, dogs: users[currentUser].dogs })
          )
      )
  }

  chooseDog = e => {
    const currentDog = parseInt(e.target.id, 10)
    if (currentDog >= 0) this.setState({ currentDog })
  }

  deleteDog = () => {
    const { currentDog, dogs, currentUser } = this.state
    if (currentDog < 0) {
      const message = 'Select a dog first...'
      this.setState({ message })
    } else {
      const newDogs = [
        ...dogs.slice(0, currentDog),
        ...dogs.slice(currentDog + 1),
      ]
      localForage.getItem('users').then(users => {
        users[currentUser].dogs = newDogs
        localForage
          .setItem('users', users)
          .then(this.setState({ redirect: true }))
      })
    }
  }

  render() {
    const { dogs, currentDog, redirect, message } = this.state
    const { chooseDog, deleteDog } = this
    return (
      <div>
        <Header />
        <Container style={{ clear: 'both' }}>
          <Row>
            {dogs.map((dog, i) => (
              <Col
                style={
                  currentDog === i
                    ? {
                        border: '2px solid rgb(243, 178, 36)',
                        borderRadius: 15,
                        boxSizing: 'border-box',
                        margin: 8,
                      }
                    : {
                        boxSizing: 'border-box',
                        margin: 8,
                      }
                }
                key={'col' + i}
              >
                <Dog
                  id={i}
                  chooseDog={chooseDog}
                  name={dog.name}
                  icon={dog.icon}
                />
              </Col>
            ))}
          </Row>
          <Row>
            <Col>
              <Button onClick={deleteDog} block style={Styles.button}>
                Delete
              </Button>
            </Col>
          </Row>
          <Row style={{marginTop: 10}}>
            <Col>
              {message ? <Alert color={'warning'}>{message}</Alert> : null}
            </Col>
          </Row>
          {redirect ? <Redirect to="/mybowls" /> : null}
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
export { DeleteDog }

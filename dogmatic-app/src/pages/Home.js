import React from 'react'
import localForage from 'localforage'
import { Container, Row, Col } from 'reactstrap'

import { Header } from 'components/Header'
import { BottomNav } from 'components/BottomNav'
import { Bowls } from 'components/Bowls'
import { Redirect } from 'react-router-dom'

/*
[
        {
          name: 'Joe',
          icon: 1,
          waterLevel: 25,
          foodLevel: 50,
        },
        {
          name: 'Jessica',
          icon: 2,
          waterLevel: 50,
          foodLevel: 80,
        },
        {
          name: 'Josh',
          icon: 0,
          waterLevel: 50,
          foodLevel: 60,
        },
        {
          name: 'Emily',
          icon: 0,
          waterLevel: 50,
          foodLevel: 10,
        },
      ]
*/

class Home extends React.PureComponent {
  state = {
    currentUser: '',
    dogs: [],
    loggedIn: true,
  }

  setFood = (index, amount) => {
    const { dogs } = this.state
    this.setState({
      dogs: [
        ...dogs.slice(0, index),
        { ...dogs[index], foodLevel: amount },
        ...dogs.slice(index + 1),
      ],
    })
  }

  refillFood = index => this.setFood(index, 100)

  setWater = (index, amount) => {
    let { dogs } = this.state
    this.setState({
      dogs: [
        ...dogs.slice(0, index),
        { ...dogs[index], waterLevel: amount },
        ...dogs.slice(index + 1),
      ],
    })
  }

  refillWater = index => this.setWater(index, 100)

  async componentDidMount() {
    localForage.setDriver(localForage.LOCALSTORAGE)
    await localForage
      .getItem('currentUser')
      .then(currentUser => this.setState({ currentUser }))
    const { currentUser } = this.state
    //if not logged in
    if (!currentUser) {
      this.setState({ loggedIn: false })
    } else {
      localForage
        .getItem('users')
        .then(users => this.setState({ dogs: users[currentUser].dogs }))

      this.interval = setInterval(() => {
        const { dogs } = this.state
        if (dogs.length < 1 || Math.random() < 0.9) return
        const index = Math.floor(dogs.length * Math.random())
        if (Math.random() >= 0.5) {
          this.setWater(index, Math.max(0, dogs[index].waterLevel - 1))
          const { waterLevel } = this.state.dogs[index]
          localForage.getItem('users').then(users => {
            users[currentUser].dogs[index] = {
              ...users[currentUser].dogs[index],
              waterLevel,
            }
            localForage.setItem('users', users)
          })
        } else {
          this.setFood(index, Math.max(0, dogs[index].foodLevel - 1))
          const { foodLevel } = this.state.dogs[index]
          localForage.getItem('users').then(users => {
            users[currentUser].dogs[index] = {
              ...users[currentUser].dogs[index],
              foodLevel,
            }
            localForage.setItem('users', users)
          })
        }
      }, 100)
    }
  }

  render() {
    const { dogs, loggedIn } = this.state
    const { refillFood, refillWater } = this
    return (
      <div>
        <Header />
        <Container style={{ clear: 'both', marginTop: '10vh' }}>
          <Row>
            <Col>
              <Bowls
                dogs={dogs}
                refillWater={refillWater}
                refillFood={refillFood}
              />
            </Col>
          </Row>
          {loggedIn ? null : <Redirect to="/" />}
        </Container>
        <BottomNav />
      </div>
    )
  }
}

export { Home }

import React from 'react'
import localForage from 'localforage'
import { Container, Row, Col } from 'reactstrap'

import { Header } from 'components/Header'
import { BottomNav } from 'components/BottomNav'
import { BowlsMB } from 'components/Bowls'

class Mybowls extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: '',
      dogs: [],
    }
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

  async componentDidMount() {
    await localForage
      .getItem('currentUser')
      .then(currentUser => this.setState({ currentUser }))
    const { currentUser } = this.state
    //if not logged in
    if (!currentUser) {
      console.log('not logged in') //TODO: bring us to the login page instead
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
    const { dogs } = this.state
    return (
      <div>
        <Header />
        <Container style={{ clear: 'both', marginTop: '10vh' }}>
          <Row>
            <Col>
              <BowlsMB dogs={dogs} />
            </Col>
          </Row>
        </Container>
        <BottomNav />
      </div>
    )
  }
}

export { Mybowls }

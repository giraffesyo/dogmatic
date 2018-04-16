import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import { Header } from 'components/Header'
import { BottomNav } from 'components/BottomNav'
import { Bowls } from 'components/Bowls'

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      dogs: [
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
      ],
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

  componentDidMount() {
    this.interval = setInterval(() => {
      const { dogs } = this.state
      if (dogs.length < 1 || Math.random() < 0.8) return
      const index = Math.floor(dogs.length * Math.random())
      if (Math.random() >= 0.5) {
        this.setWater(index, Math.max(0, dogs[index].waterLevel - 1))
      } else {
        this.setFood(index, Math.max(0, dogs[index].foodLevel - 1))
      }
    }, 100)
  }

  render() {
    const { dogs } = this.state
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
        </Container>
        <BottomNav />
      </div>
    )
  }
}

export { Home }

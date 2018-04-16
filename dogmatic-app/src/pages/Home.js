import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import { Header } from 'components/Header'
import { BottomNav } from 'components/BottomNav'
import { Bowls } from 'components/Bowls'

const dogs = [
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
    foodLevel: 85,
  },
  {},
  {},
]

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { user: {}, dogs }
  }

  refillFood = index => {
    console.log(index)
    this.setState()
  }

  refillWater = index => {
    console.log(index)
    this.setState()
  }

  render() {
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

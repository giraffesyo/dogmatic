import React from 'react'
import { BowlStatus, BowlStatusMB } from 'components/BowlStatus'
import { Row, Col } from 'reactstrap'

class Bowls extends React.PureComponent {
  render() {
    const { dogs, refillFood, refillWater } = this.props
    return (
      <React.Fragment>
        {dogs.map((dog, i) => (
          <Row key={`bowl-${i}`}>
            <Col>
              <BowlStatus
                {...dog}
                refillWater={() => refillWater(i)}
                refillFood={() => refillFood(i)}
              />
            </Col>
          </Row>
        ))}
      </React.Fragment>
    )
  }
}


class BowlsMB extends React.PureComponent {
  render() {
    const { dogs } = this.props
    return (
      <React.Fragment>
        {dogs.map((dog, i) => (
          <Row key={`bowl-${i}`}>
            <Col>
              <BowlStatusMB
                {...dog}
              />
            </Col>
          </Row>
        ))}
      </React.Fragment>
    )
  }
}

export { Bowls, BowlsMB }

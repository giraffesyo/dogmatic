import React from 'react'
import { Progress, Row, Col } from 'reactstrap'
import {Dog} from 'components/Dog'

class BowlStatus extends React.PureComponent {
  render() {
    const {
      waterLevel,
      foodLevel,
      name,
      icon,
      refillFood,
      refillWater,
    } = this.props

    const bigIconWidth = 3
    const refillWidth = 1
    const smallIconWidth = 1
    const progressRowWidth = 9
    return (
      <Row>
        <Col xs={bigIconWidth}>
          <Dog icon={icon} name={name} size="50%" />
        </Col>
        <Col xs={progressRowWidth}>
          <Row>
            <Col xs={smallIconWidth}>
              <span className="fa fa-tint" />
            </Col>
            <Col style={Styles.WaterBar}>
              <Progress animated value={waterLevel}>
                {waterLevel}%
              </Progress>
            </Col>
            <Col style={Styles.RefillCol} xs={refillWidth}>
              <span
                onClick={refillWater}
                style={Styles.Refill}
                className="fa fa-retweet"
              />
            </Col>
          </Row>
          <Row style={Styles.FoodBar}>
            <Col xs={refillWidth}>
              <span className="fa fa-cutlery" />
            </Col>
            <Col>
              <Progress animated color="success" value={foodLevel}>
                {foodLevel}%
              </Progress>
            </Col>
            <Col style={Styles.RefillCol} xs={refillWidth}>
              <span
                onClick={refillFood}
                style={Styles.Refill}
                className="fa fa-retweet"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

const Styles = {
  RefillCol: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  Refill: {
    fontSize: '1em',
    lineHeight: 1,
  },
  WaterBar: {
    marginTop: 4,
  },
  FoodBar: {
    marginTop: 11,
  },
}

export { BowlStatus }

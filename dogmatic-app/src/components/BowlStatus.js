import React from 'react'
import { Progress, Row, Col } from 'reactstrap'
import icon1 from 'images/icons/icon1.png'
import icon2 from 'images/icons/icon2.png'
import icon3 from 'images/icons/icon3.png'
import icon4 from 'images/icons/icon4.png'

const icons = [icon1, icon2, icon3, icon4]

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
    return (
      <Row>
        <Col style={{ textAlign: 'center' }} xs={3}>
          <img alt={name} style={{display: 'block', height: '50%' }} src={icons[icon]} />
          <span style={{display: 'block'}}>{name}</span>
        </Col>
        <Col xs={9}>
          <Row>
            <Col xs={9} style={{ marginTop: 5 }}>
              <Progress animated value={waterLevel}>
                {waterLevel}%
              </Progress>
            </Col>
            <Col xs={3}>
              <span
                onClick={refillWater}
                style={{ fontSize: 24, lineHeight: 1 }}
                className="fa fa-retweet"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={9} style={{ marginTop: 5 }}>
              <Progress animated color="success" value={foodLevel}>
                {foodLevel}%
              </Progress>
            </Col>
            <Col xs={3}>
              <span
                onClick={refillFood}
                style={{ fontSize: 24, lineHeight: 1 }}
                className="fa fa-retweet"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

class BowlStatusMB extends React.PureComponent {
  render() {
    const { waterLevel, foodLevel, name, icon } = this.props
    return (
      <Row>
        <Col style={{ textAlign: 'center' }} xs={3}>
          <img alt={name} style={{ display: 'block', height: '50%' }} src={icons[icon]} />
          <span style={{display: 'block'}}>{name}</span>
        </Col>
        <Col xs={9}>
          <Row>
            <Col style={{ marginTop: 5 }}>
              <Progress animated value={waterLevel}>
                {waterLevel}%
              </Progress>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginTop: 11 }}>
              <Progress animated color="success" value={foodLevel}>
                {foodLevel}%
              </Progress>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export { BowlStatus, BowlStatusMB }

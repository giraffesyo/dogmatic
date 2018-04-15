import React from 'react'
import { Row, Col } from 'reactstrap'

export const BottomNav = () => (
  <Row
    className="text-center"
    style={styles}
  >
    <Col>
      <a>
        <Row>
          <Col>
            <span style={{ fontSize: 48 }} className="fa fa-home" />
          </Col>
        </Row>
        <Row>
          <Col>Home</Col>
        </Row>
      </a>
    </Col>
    <Col>
      <a>
        <Row>
          <Col>
            <span style={{ fontSize: 48 }} className="fa fa-paw" />
          </Col>
        </Row>
        <Row>
          <Col>My Bowls</Col>
        </Row>
      </a>
    </Col>
    <Col>
      <a>
        <Row>
          <Col>
            <span style={{ fontSize: 48 }} className="fa fa-cog" />
          </Col>
        </Row>
        <Row>
          <Col>Options</Col>
        </Row>
      </a>
    </Col>
  </Row>
)

const styles = {
  color: 'rgb(243, 178, 36)',
  margin: 0,
  padding: 0,
  height: 85,
  width: '100vw',
  position: 'absolute',
  bottom: 0,
  backgroundColor: 'rgb(26, 154, 189)',
  fontSize: 24,
  lineHeight: 1,
}

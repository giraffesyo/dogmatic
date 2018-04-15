import React from 'react'
import 'components/BottomNav.css'
import { Row, Col } from 'reactstrap'

export const BottomNav = () => (
  <Row
    className="text-center mainRow"
  >
    <Col>
      <a href="/">
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
          <Col className="finalCol">
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

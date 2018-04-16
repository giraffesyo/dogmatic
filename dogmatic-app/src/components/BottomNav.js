import React from 'react'
import 'components/BottomNav.css'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

export const BottomNav = () => (
  <Row className="text-center bottomRow">
    <Col>
      <Link to={'/home'}>
        <Row>
          <Col>
            <span style={{ fontSize: 48 }} className="fa fa-home" />
          </Col>
        </Row>
        <Row>
          <Col>Home</Col>
        </Row>
      </Link>
    </Col>
    <Col>
      <Link to={'/mybowls'}>
        <Row>
          <Col>
            <span style={{ fontSize: 48 }} className="fa fa-paw" />
          </Col>
        </Row>
        <Row>
          <Col>My Bowls</Col>
        </Row>
      </Link>
    </Col>
    <Col>
      <Link to={'/options'}>
        <Row>
          <Col className="finalCol">
            <span style={{ fontSize: 48 }} className="fa fa-cog" />
          </Col>
        </Row>
        <Row>
          <Col>Options</Col>
        </Row>
      </Link>
    </Col>
  </Row>
)

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
            <span className="fa fa-home" />
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
            <span className="fa fa-paw" />
          </Col>
        </Row>
        <Row>
          <Col>Bowls</Col>
        </Row>
      </Link>
    </Col>
    <Col>
      <Link to={'/options'}>
        <Row>
          <Col className="finalCol">
            <span className="fa fa-cog" />
          </Col>
        </Row>
        <Row>
          <Col>Options</Col>
        </Row>
      </Link>
    </Col>
  </Row>
)

import React from 'react'
import LogoImage from 'images/dogmatic-logo.png'
import { Row, Col } from 'reactstrap'

const Header = () => (
  <Row className="d-flex align-items-center">
    <Col>
      <img className="img-fluid" src={LogoImage} alt="Dogmatic Logo" />
    </Col>
    <Col>
      <Row className="text-center">
        <Col>
          <p
            style={{ color: 'rgb(26, 154, 189)', fontSize: 18, lineHeight: 1 }}
          >
            It's not just automatic
          </p>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <p
            style={{ color: 'rgb(243, 178, 36)', fontSize: 18, lineHeight: 1 }}
          >
            It's Dogmatic.
          </p>
        </Col>
      </Row>
    </Col>
  </Row>
)

export { Header }

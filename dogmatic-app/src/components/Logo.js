import React from 'react'
import LogoImage from 'images/dogmatic-logo.png'
import { Row, Col } from 'reactstrap'

function Logo() {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <img className="img-fluid" src={LogoImage} alt="Dogmatic Logo" />
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ color: 'rgb(26, 154, 189)' }}>It's not just automatic:</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ color: 'rgb(243, 178, 36)' }}>It's Dogmatic.</p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export { Logo }

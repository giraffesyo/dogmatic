import React, { PureComponent } from 'react'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Navbar } from './Navbar'
//import { logo } from 'dogmatic-logo.png'

class Home extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Navbar />
          </Col>
        </Row>
        <Row>
          <Col>
            <img/>>
          </Col>
        </Row>
      </Container>
    )
  }
}

export { Home }

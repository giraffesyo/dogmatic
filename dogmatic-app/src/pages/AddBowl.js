import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import { Header } from 'components/Header'
import { BottomNav } from 'components/BottomNav'

class AddBowl extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Container style={{ color: 'rgb(26, 154, 189)', marginTop: '5vh'}}>
          <Row>
            <Col>
              <h1 style={{ color: 'rgb(243, 178, 36)' }}>Add Bowl</h1>

            </Col>
          </Row>
        </Container>
        <BottomNav />
      </div>
    )
  }
}

export { AddBowl }

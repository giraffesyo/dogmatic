import React from 'react'

import { Header } from 'components/Header'
import { BottomNav } from 'components/BottomNav'

import { Container, Row, Col } from 'reactstrap'

class About extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Container
          style={{
            position: 'relative',
            color: 'rgb(26, 154, 189)',
            marginTop: '5vh',
          }}
        >
          <Row>
            <Col>
              <h1 style={{ color: 'rgb(243, 178, 36)' }}>About Us</h1>
            </Col>
            <Col>
              <a
                style={{
                  fontSize: '64px',
                  color: 'rgb(243, 178, 36)',
                  position: 'relative',
                  float: 'right',
                  paddingLeft: 16,
                  paddingBottom: 16,
                }}
                href="/options"
                className="fa fa-arrow-circle-o-left"
              >
                <div className="sr-only">Back</div>
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Taking care of a pet can be a really difficult and
                time-consuming task. Worrying about whether or not your pet has
                eaten can cause unnecessary stress.
              </p>
              <p>
                With DogMatic, you no longer have any worries. We’ll notify you
                when your dog needs to be fed, and you can rest easy.
              </p>
            </Col>
          </Row>
        </Container>
        <BottomNav />
      </div>
    )
  }
}

export { About }

import React from 'react'

import { Header } from 'components/Header'
import { BottomNav } from 'components/BottomNav'

import { Link } from 'react-router-dom'
import { Container, Row, Col, Input, Button } from 'reactstrap'

class Feedback extends React.PureComponent {
  state = { received: false }

  sendFeedback = () => {
    this.setState({ received: true })
  }

  render() {
    const { received } = this.state
    const { sendFeedback } = this
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
              <h1 style={{ color: 'rgb(243, 178, 36)' }}>Feedback</h1>
            </Col>
            <Col>
              <Link
                style={{
                  fontSize: '64px',
                  color: 'rgb(243, 178, 36)',
                  position: 'relative',
                  float: 'right',
                  paddingLeft: 16,
                  paddingBottom: 16,
                }}
                to="/options"
                className="fa fa-arrow-circle-o-left"
              >
                <div className="sr-only">Back</div>
              </Link>
            </Col>
          </Row>
          {received ? (
            <span>Thanks for your feedback!</span>
          ) : (
            <FeedbackArea sendFeedback={sendFeedback} />
          )}
        </Container>

        <BottomNav />
      </div>
    )
  }
}

function FeedbackArea(props) {
  const { sendFeedback } = props
  return (
    <React.Fragment>
      <Row style={{ height: '30vh' }}>
        <Col>
          <Input
            placeholder="Write your feedback here!"
            style={{ height: '100%', overflow: 'hidden' }}
            type="textarea"
          />
        </Col>
      </Row>

      <Row style={{ marginTop: 25 }}>
        <Col>
          <Button onClick={sendFeedback} block style={Styles.button}>
            Send
          </Button>
        </Col>
        <Col>
          <Link to="/options">
            <Button block style={Styles.button}>
              Cancel
            </Button>
          </Link>
        </Col>
      </Row>
    </React.Fragment>
  )
}

const Styles = {
  button: {
    width: 100,
    margin: '0 auto',
    backgroundColor: 'rgb(26, 154, 189)',
    borderColor: 'none',
    color: 'rgb(243, 178, 36)',
    borderRadius: 0,
  },
}

export { Feedback }

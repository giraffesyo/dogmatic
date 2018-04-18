import React from 'react'
import localForage from 'localforage'
import { Container, Row, Col, Alert } from 'reactstrap'

import { Header } from 'components/Header'
import { BottomNav } from 'components/BottomNav'
import { Link } from 'react-router-dom'
import { Dog } from 'components/Dog'

class Mybowls extends React.PureComponent {
  state = {
    currentUser: '',
    dogs: [],
    plusVisible: true,
  }

  async componentDidMount() {
    await localForage
      .getItem('currentUser')
      .then(currentUser =>
        localForage
          .getItem('users')
          .then(users =>
            this.setState({ currentUser, dogs: users[currentUser].dogs })
          )
      )
    const { dogs } = this.state
    if (dogs.length >= 4) {
      this.setState({ plusVisible: false })
    }
  }


  render() {
    const { dogs, plusVisible } = this.state
    return (
      <div>
        <Header />
        <Container style={{ clear: 'both' }}>
          <Row>
            {dogs.map((dog, i) => (
              <Col key={'col' + i}>
                <Dog name={dog.name} icon={dog.icon} />
              </Col>
            ))}
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col xs={{ offset: 2, size: 4 }}>
              {plusVisible ? (
                <Link to="/addbowl" style={Styles.Add} className="fa fa-plus" />
              ) : (
                <span
                  style={{ ...Styles.Add, opacity: 0.5 }}
                  className="fa fa-plus"
                />
              )}
            </Col>
            <Col xs={4}>
              <Link
                to="/deletedog"
                style={Styles.Add}
                className="fa fa-minus"
              />
            </Col>
          </Row>
          {plusVisible ? null : (
            <Row style={{marginTop: 10}}>
              <Col >
                <Alert color="warning">
                  Maximum dogs added.
                </Alert>
              </Col>
            </Row>
          )}
        </Container>
        <BottomNav />
      </div>
    )
  }
}

const Styles = {
  Add: {
    fontSize: '64px',
    color: 'rgb(243, 178, 36)',
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgb(26, 154, 189)',
  },
  ButtonText: {
    fontSize: '32px',
  },
}

export { Mybowls }

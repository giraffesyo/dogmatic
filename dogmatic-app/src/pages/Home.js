import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import { Header } from 'components/Header'
import { BottomNav } from 'components/BottomNav'
import { BowlStatus } from 'components/BowlStatus'

const dogs = {
  dog1: {
    name: "Joe",
    icon: 1,
    waterLevel: 25,
    foodLevel: 50, 
  },
  dog2: {

  },
  dog3: {

  },
  dog4: {

  }
}


class Home extends React.PureComponent {


  constructor(props){
    super(props)
    this.state = {user: {}, dogs}
  }

  refill(dog) { 
    console.log(dog)
    this.setState()
  }



  render() {
    return (
      <div>
        <Header />
        <Container style={{clear: 'both', marginTop: '10vh'}}>
          <Row>
            <Col>
              <BowlStatus
                waterLevel={25}
                foodLevel={50}
                dog={{ name: 'Joe', icon: 0 }}
              />
            </Col>
          </Row>
        </Container>
        <BottomNav />
      </div>
    )
  }
}

export { Home }

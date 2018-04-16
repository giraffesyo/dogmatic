import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import { Header } from 'components/Header'
import { BottomNav } from 'components/BottomNav'

import icon1 from 'images/icons/icon1.png'
import icon2 from 'images/icons/icon2.png'
import icon3 from 'images/icons/icon3.png'
import icon4 from 'images/icons/icon4.png'

const icons = [icon1, icon2, icon3, icon4]

class AddBowl extends React.PureComponent {

  state = {icon : 0, name: ''}

  chooseIcon = e => {
    this.setState({icon: e.target.id})
  }
  render() {
    const currentIcon  = this.state.icon
    return (
      <div>
        <Header />
        <Container style={{ color: 'rgb(26, 154, 189)', marginTop: '5vh' }}>
          <Row>
            <Col>
              <h1 style={{ color: 'rgb(243, 178, 36)' }}>Add Bowl</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Icon:</h2>
              {icons.map((icon, i) => (
                <img style={(currentIcon == i)?{border: '2px solid rgb(243, 178, 36)', borderRadius: 15 } : {}} onClick={this.chooseIcon} id={i} key={'icon-' + i} src={icon} />
              ))}
            </Col>
          </Row>
        </Container>
        <BottomNav />
      </div>
    )
  }
}




export { AddBowl }

import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'

import { Logo } from 'components/Logo'

class Login extends React.PureComponent {
  render() {
    let offset = 1
    let labelSize = 3
    let inputSize = 7
    return (
      <Container className="text-center">
        <Logo marginBottom={'5vh'} />
        <Row>
          <Col className="text-left">
            <Form>
              <FormGroup row>
                <Label xs={{ offset: offset, size: labelSize }} for="userEmail">
                  Email:
                </Label>
                <Col xs={inputSize}>
                  <Input
                    type="email"
                    name="email"
                    id="userEmail"
                    placeholder="example@domain.com"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label
                  xs={{ offset: offset, size: labelSize }}
                  for="userPassword"
                >
                  Password:
                </Label>
                <Col xs={inputSize}>
                  <Input
                    type="password"
                    name="password"
                    id="userPassword"
                    placeholder="password"
                  />
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row style={{ marginTop: '5vh' }}>
          <Col>
            <Button block style={Styles.button}>
              Log In
            </Button>
          </Col>
        </Row>
        <a href="/" style={Styles.backButton} className="fa fa-arrow-circle-o-left">
          <div className="sr-only">Back</div>
        </a>
      </Container>
    )
  }
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
  backButton: {
    fontSize: '64px',
    color: 'rgb(243, 178, 36)',
    position: 'absolute',
    left: 0,
    bottom: 0,
    paddingLeft: 16,
    paddingBottom: 16,
  },
}

export { Login }

import React from 'react'
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap'
import 'stylesheets/styles.css'
import logo from 'images/dogmatic-logo.png'

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <img className="logo float-left" alt={'Dogmatic Logo'} src={logo} />
            <Nav>
              <NavItem>
                <NavLink href="#">Marvel App</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Product Interface</NavLink>
              </NavItem>
              <Dropdown
                nav
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle nav caret>
                  Deliveries
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>First Delivery</DropdownItem>
                  <DropdownItem disabled>Second Delivery</DropdownItem>
                  <DropdownItem disabled>Third Delivery</DropdownItem>
                  <DropdownItem disabled>Fourth Delivery</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Col>
        </Row>
      </Container>
    )
  }
}
export { Navbar }

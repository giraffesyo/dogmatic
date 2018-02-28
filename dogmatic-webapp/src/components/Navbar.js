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
          <Col xs={0} sm={7}>
          </Col>
          <Col xs={12} sm={5}>
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

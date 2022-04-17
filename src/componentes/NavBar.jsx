import React from 'react'
import { Navbar, Nav, NavDropdown, Button, FormControl, Form, Container } from 'react-bootstrap';

function NavBar() {
  return (
   
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Celulares" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Iphone</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Samsung</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  )
}

export default NavBar
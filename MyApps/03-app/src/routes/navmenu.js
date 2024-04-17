import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';


export function NavMenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
            <Navbar.Brand>Hello World</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/animals">
                <Nav.Link>Animals</Nav.Link>
            </LinkContainer>

            <NavDropdown title="albums" id="basic-nav-dropdown">
              <LinkContainer to="/albums" >
                <NavDropdown.Item>Albums</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/albums" >
                <NavDropdown.Item>Albums with love</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/albums" >
                <NavDropdown.Item>Rock albums</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

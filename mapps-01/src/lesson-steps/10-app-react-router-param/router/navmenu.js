import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from 'react-router';

export function NavMenu() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand>React-bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="../">Home</Nav.Link>
                <Nav.Link as={Link} to="../about">About</Nav.Link>
                <Nav.Link as={Link} to="../music">Music</Nav.Link>

                <NavDropdown title="Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="../animals/Leo/Tiger/7">Animals Leo</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="../animals/Simba/Elephant/25">Animals Simba</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="../page1">Page1</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

export const NavbarComponent = () => {


  return (
    <>
    <Navbar expand="lg" className="navBg">
    <Container>
      <Navbar.Brand as={Link}to='/'>Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link}to='/cliente' >Clientes</Nav.Link>
          <Nav.Link as={Link}to='/impuesto'>Impuestos</Nav.Link>
          <Nav.Link as={Link}to='/productos'>Productos</Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <section>
    <Outlet>

    </Outlet>
  </section>
  </>
  )
}

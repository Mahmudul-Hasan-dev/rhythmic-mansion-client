import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo1.png'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar expand="lg" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"> RHYTHMIC MANSION</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/">Home</Link>
              <Link to="/instructor">Instructor</Link>
              <Link to="/classes">Classes</Link>
              <Link to="/">Dashboard</Link>
            </Nav>
            <Nav>
                <Link to='/login'>
                    <Button >Login</Button>
                </Link>
                
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user ,logOut}= useAuth();
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}
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
              {
                user &&
                <Link to="/">Dashboard</Link>
              }
              
            </Nav>
            <Nav>
                
                {
            user ? <>
               
               <img src={user?.photoURL} alt="" width={'50px'} />
                <Button onClick={handleLogOut}  >LogOut</Button>
            </> : <>
                <Link to='/login'>
                    <Button >Login</Button>
                </Link>
            </>
        }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;
import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';

// admin@music.com A1234#

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
             <Container fluid>
        <Row>
               {/* Admin Sidebar */}
        <Col xs={2} className=" border-right bg-light " style={{minHeight: '50vh'}}>
            <Nav className="flex-column pt-3" >
              <Link style={{textDecoration: 'none'}} className='text-dark fs-4' to='/' >Dashboard</Link>
              <Link style={{textDecoration: 'none'}} className='text-dark fs-4' to='/' >Manage Classes</Link>
              <Link style={{textDecoration: 'none'}} className='text-dark fs-4' to='/dashboard/allUsers' >Manage Users</Link>

            </Nav>
          </Col>
             {/* Instructor Sidebar */}
            {/* <Col xs={2} id="sidebar-wrapper" className="bg-light border-right">
                <Nav className="flex-column">
                <Link to='/' >Dashboard</Link>
                <Link to='/' >Add a Class</Link>
                <Link to='/' >My Classes</Link>
                
                </Nav>
          </Col> */}
          {/* Student Sidebar */}
          {/* <Col xs={2} id="sidebar-wrapper" className="bg-light border-right">
            <Nav className="flex-column">
              <Link to='/' >Dashboard</Link>
              <Link to='/' >My Selected Classes</Link>
              <Link to='/' >My Enrolled Classes</Link>
              <Link to='/' >Payment History</Link>
            </Nav>
          </Col> */}

          
          {/* Main Content */}
          <Col xs={10} id="page-content-wrapper">
            <h2>Dashboard Content</h2>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
        </div>
    );
};

export default Dashboard;
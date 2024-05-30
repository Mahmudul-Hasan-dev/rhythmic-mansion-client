import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div>
             <Container fluid>
        <Row>
          {/* Left Sidebar */}
          <Col xs={2} id="sidebar-wrapper" className="bg-light border-right">
            <Nav className="flex-column">
              <Link to='/' >Dashboard</Link>
              <Link to='/' >My Selected Classes</Link>
              <Link to='/' >My Enrolled Classes</Link>
              <Link to='/' >Payment History</Link>
            </Nav>
          </Col>
          
          {/* Main Content */}
          <Col xs={10} id="page-content-wrapper">
            <h2>Dashboard Content</h2>
            
          </Col>
        </Row>
      </Container>
        </div>
    );
};

export default Dashboard;
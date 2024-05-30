import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import useAdmin from "../hooks/useAdmin";
import { FaChalkboard, FaCreditCard, FaGuitar, FaHouse, FaMusic, FaUsers } from 'react-icons/fa6';
import useSingleInstructor from '../hooks/useSingleInstructor';


// admin@music.com A1234#

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useSingleInstructor();
    return (
        <div>
            <Header></Header>
             <Container fluid>
        <Row>
          {isAdmin? 
          <Col xs={2} className=" border-right bg-light " style={{minHeight: '50vh'}}>
          <Nav className="flex-column pt-3" >
            <Link style={{textDecoration: 'none'}} className='text-dark fs-5 ' to='/' ><FaHouse /> Dashboard</Link>
            <Link style={{textDecoration: 'none'}} className='text-dark fs-5 ' to='/' > <FaChalkboard /> Manage Classes</Link>
            <Link style={{textDecoration: 'none'}} className='text-dark fs-5 ' to='/dashboard/allUsers' ><FaUsers/> Manage Users</Link>

          </Nav>
        </Col> :  isInstructor ?
           <Col xs={2}  className="bg-light border-right" style={{minHeight: '50vh'}}>
           <Nav className="flex-column  pt-5">
           <Link style={{textDecoration: 'none'}} className='text-dark fs-5 ' to='/' ><FaHouse /> Dashboard</Link> <br />
           <Link style={{textDecoration: 'none'}} className='text-dark fs-5 ' to='/dashboard/addClass' ><FaChalkboard /> Add a Class</Link> <br />
           <Link style={{textDecoration: 'none'}} className='text-dark fs-5 ' to='/' ><FaMusic /> My Classes</Link>
           
           </Nav>
           </Col> : 
           

            <Col xs={2}  className="bg-light border-right" style={{minHeight: '50vh'}}>
             <Nav className="flex-column  pt-3">
               <Link style={{textDecoration: 'none'}} className='text-dark fs-5 ' to='/' ><FaHouse /> Dashboard</Link>
               <Link style={{textDecoration: 'none'}} className='text-dark fs-5 ' to='/' > <FaChalkboard /> My Selected Classes</Link>
               <Link style={{textDecoration: 'none'}} className='text-dark fs-5 ' to='/' ><FaGuitar /> My Enrolled Classes</Link>
               <Link style={{textDecoration: 'none'}} className='text-dark fs-5 ' to='/' ><FaCreditCard /> Payment History</Link>
             </Nav>
           </Col> 
         
           

        }
               {/* Admin Sidebar */}
        
             {/* Instructor Sidebar */}
            {/*  */}
          

          
          {/* Main Content */}
          <Col xs={10} className='p-5'>
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
import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import logo from '../../../assets/logo1.png'
import { FaLocationDot, FaPhone,FaEnvelope, FaFacebook, FaInstagram, FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className='bg-dark '>
           
           <div>
           <Container className='fluid'>
           
           <Row>
               <Col>
                   <Row>
                       <Col className='pt-2'>
                           <img src={logo}  width="200" height="200"/> 
                       </Col>
                   </Row>
                   <Row>
                   
                       <Col className='pt-2 fs-5 text-white'>
                         <p><FaLocationDot /> 100, Dhaka, Bangladesh</p>
                          
                       </Col>
                   </Row>
                 
               
               </Col>
              
                   <Col className='pt-5 fs-5 text-white'>
                       <h3 className='pb-2'>Contact Us</h3>
                       <p> <FaPhone /> +880121954231</p>
                       <p> <FaEnvelope /> contact@rhythmicmansion.com</p>
                       <div className='fs-1 text-white'>
                       <FaFacebook /> <FaInstagram /> <FaSquareYoutube />
                       </div>
                       
                   </Col>
                    <Col className='pt-5 text-white fs-5'>
                        <h3 className='pb-2'>Go to</h3>
                        <li>Home</li>
                        <li>Instructor</li>
                        <li>Classes</li>
                    </Col>
               
           </Row>
           <hr />
           
       </Container >
           </div>
           <div className='bg-primary text-white py-1'>
                <Container className='fluid'>
                <Row >
                     <Col><h5 className='text-center '>Rhythmic Mansion &copy; 2024 | All rights reserved.</h5></Col>
                </Row>
                </Container>
           </div>
        </div>
    );
};

export default Footer;
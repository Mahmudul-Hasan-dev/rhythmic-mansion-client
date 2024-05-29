import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import kidImg from '../../../assets/musicGroup/kids.jpg';
import teenImg from '../../../assets/musicGroup/teens.jpg';
import adultImg from '../../../assets/musicGroup/adults.jpg';
import privateImg from '../../../assets/musicGroup/private.jpg'

const MusicGroup = () => {
    return (
        <div className='mt-5'>
            <Container className='bg-light py-3 mb-5 px-5'>
      
                <Row  className='text-center '>
                    <h1>Music Groups</h1>
                    <h2 className='text-info pb-3'>for</h2>
                    <Col>
                       
                        <Image src={kidImg} alt="" width={'100px'} roundedCircle/>
                        <h3 className='pt-3'>Kids</h3>
                        <p>Our school is a solution for families who would like to expose their children to the world of music.</p>
                    </Col>
                    <Col>
                        <Image src={teenImg} alt="" width={'100px'} roundedCircle/>
                        <h3 className='pt-3'>Teens</h3>
                        <p>Our classes help to develop the skills necessary for music learning and a lifelong enjoyment of music.</p>
                    </Col>
                    <Col>
                        <Image src={adultImg} alt="" width={'100px'} roundedCircle/>  
                        <h3 className='pt-3'>Adults</h3>
                        <p>We have programs for everyone. In addition to teaching music to children, we instruct adults and seniors.</p>
                    </Col>
                    <Col>
                         <Image src={privateImg} alt="" width={'100px'} roundedCircle/>
                        <h3 className='pt-3'>Private lessons</h3>
                        <p>Private music lessons provide one-on-one attention, so teachers can focus on an individual student’s needs.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MusicGroup;
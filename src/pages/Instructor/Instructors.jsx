import React from 'react';

import { Card, Container } from 'react-bootstrap';
import useInstructor from '../../hooks/useInstructor';

const Instructors = () => {
    const [instructors]= useInstructor();
    return (
        <>
        <h1 className='text-center  mt-5 fs-1 bg-light py-3'>Our Instructors</h1>
        <div className='instructor-container my-5'>
    
          
    {
        instructors.map( i=> 
          <div key={i._id}>
            <Container fluid>
            <Card >
                <Card.Img variant="top" src={i.image} height={'200px'} />
                <Card.Body>
                <Card.Title  className='fs-2'>  {i.instructor_name}</Card.Title>
                <Card.Title > Email: {i.email}</Card.Title>
      
                </Card.Body>
             </Card>
            </Container>
          </div>
           
       
            )
    }
  
</div>
        </>
    );
};

export default Instructors;
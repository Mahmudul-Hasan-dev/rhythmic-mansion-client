import React from 'react';
import useInstructor from '../../../hooks/useInstructor';
import { Card, Container } from 'react-bootstrap';

const PopulerInstructor = () => {
    const [instructors]= useInstructor()
    return (
        <div className='popular-instructor-container my-5'>
    
          
            {
                instructors.slice(0,6).map( i=> 
                  <div key={i._id}>
                    <Container fluid>
                    <Card >
                        <Card.Img variant="top" src={i.image} height={'200px'} />
                        <Card.Body>
                        <Card.Title >{i.instructor_name}</Card.Title>
      
              
                        </Card.Body>
                     </Card>
                    </Container>
                  </div>
                   
               
                    )
            }
          
        </div>
    );
};

export default PopulerInstructor;
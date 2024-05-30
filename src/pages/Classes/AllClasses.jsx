import React from 'react';
import useAllClass from '../../hooks/useAllClass';
import { Button, Card, Container } from 'react-bootstrap';

const AllClasses = () => {
    const [classes] = useAllClass()
    return (
        <div className='all-class-container my-5'>
    
          
            {
                classes.map( c=> 
                  <div key={c._id}>
                    <Container fluid>
                        { c.seats !== 0 ? 
                            
                                <Card >
                                <Card.Img variant="top" src={c.image} height={'200px'} />
                                <Card.Body>
                                <Card.Title className='fs-1' >{c.name}</Card.Title>
                                <h5 className='text-primary fs-bold'> Instructor: {c.instructor_name}</h5>
                                <h3> Available Seats: {c.seats}</h3>
                                <h4> Price: ${c.price} </h4>
                                </Card.Body>
                                <Card.Footer>
                                  <Button variant="primary">Select</Button>
                                </Card.Footer>
                             </Card> :
                             <Card className='bg-danger text-white'>
                             <Card.Img variant="top" src={c.image} height={'200px'} />
                             <Card.Body>
                             <Card.Title className='fs-1' >{c.name}</Card.Title>
                             <h5 className= 'fs-bold'> Instructor: {c.instructor_name}</h5>
                             <h3> Available Seats: {c.seats}</h3>
                             <h4> Price: ${c.price} </h4>
                             </Card.Body>
                             <Card.Footer>
                               <Button variant="primary" disabled>Select</Button>
                             </Card.Footer>
                          </Card>
                  }
                        
                     
                    
                    </Container>
                  </div>
                   
               
                    )
            }
          
        </div>
    );
};

export default AllClasses;
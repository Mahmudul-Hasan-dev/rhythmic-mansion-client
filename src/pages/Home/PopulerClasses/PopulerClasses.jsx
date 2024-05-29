import React from 'react';
import useClass from '../../../hooks/useClass';
import { Card,  Container} from 'react-bootstrap';
import '../Home/Home.css'

const PopulerClasses = () => {
const [classes] = useClass();
const popularClasses = classes;
    return (
        <div className='cards-container'>
    
          
            {
                popularClasses.map( pc=> 
                  <div key={pc._id}>
                    <Container fluid>
                    <Card  >
                        <Card.Img variant="top" src={pc.image} height={'200px'} />
                        <Card.Body>
                        <Card.Title className='fs-1'>{pc.name}</Card.Title>
                        <Card.Text>
                            <h4>Enrolled Students: {pc.students}</h4>
                        </Card.Text>
                        
                        </Card.Body>
                     </Card>
                    </Container>
                  </div>
                   
               
                    )
            }
          
        </div>
    );
};

export default PopulerClasses;
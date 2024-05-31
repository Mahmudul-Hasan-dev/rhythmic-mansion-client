import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';

const AllClasses = ({cls}) => {
const {_id, name, image, price,seats,instructor_name}  = props;
  const [,refetch]= useCart();
   console.log(props.name);
    const {user} = useAuth();
    
   
    const axiosSecure = useAxiosSecure()
    
   
    const handleSelect = cls => {
      console.log(cls);
    
       if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                classID: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} selected for you`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }

                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className='all-class-container my-5'>
    
          
          
                 
                    {/* <Container fluid>
                       { cls && cls.seats !== 0 ?  
                            
                                <Card >
                                <Card.Img variant="top" src={cls.image} height={'200px'} />
                                <Card.Body>
                                <Card.Title className='fs-1' >{cls.name}</Card.Title>
                                <h5 className='text-primary fs-bold'> Instructor: {cls.instructor_name}</h5>
                                <h3> Available Seats: {cls.seats}</h3>
                                <h4> Price: ${cls.price} </h4>
                                </Card.Body>
                                <Card.Footer>
                                  <Button onClick={()=> handleSelect(cls)} variant="primary">Select</Button>
                                </Card.Footer>
                             </Card> :
                             <Card className='bg-danger text-white'>
                              <Card.Img variant="top" src={cls.image} height={'200px'} />
                              <Card.Body>
                             <Card.Title className='fs-1' >{cls.name}</Card.Title>
                              <h5 className= 'fs-bold'> Instructor: {cls.instructor_name}</h5>
                              <h3> Available Seats: {cls.seats}</h3>
                              <h4> Price: ${cls.price} </h4>
                              </Card.Body>
                              <Card.Footer>
                                <Button  variant="primary" disabled>Select</Button>
                              </Card.Footer>
                           </Card>
                  } 
                        
                     
                    
                    </Container> */}
                 
                   
               
                    )
            
          
        </div>
    );
};

export default AllClasses;
import React from 'react';
import {  Card,Button } from 'react-bootstrap';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';
import useSingleInstructor from '../../hooks/useSingleInstructor';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';

const Classes = ({cls}) => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useSingleInstructor();
    const {_id, name ,image,instructor_name,seats,price} = cls;
    const [,refetch]= useCart();
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

   const from = location.state?.from?.pathname || "/";
   
    const axiosSecure = useAxiosSecure()
    const handleSelect = cls => {
        console.log(cls);
      
         if (user && user.email) {
              //send cart item to the database
              const cartItem = {
                  classID: _id,
                  email: user.email,
                  name,
                  instructor: instructor_name,
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
        <>
         <Helmet>
                <title>Rhythmic Mansion | Class</title>
            </Helmet>
        {  seats === 0 ?
            
            <Card className='bg-danger' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} height={'200px'} />
                <Card.Body className='text-white'>
                    <Card.Title className='fs-1'> {name}</Card.Title>
                    <Card.Text>
                    <Card.Title className='fw-bold '>Instructor name:{instructor_name}</Card.Title>
                        <h3>Available seats: {seats}</h3>
                        <h3>Price: ${price}</h3>
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer>
                  <Button  disabled variant="light">select</Button>
                    </Card.Footer>
            </Card> : 
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} height={'200px'} />
                <Card.Body>
                    <Card.Title className='fs-1'> {name}</Card.Title>
                    <Card.Text>
                    <Card.Title className='fw-bold text-primary'>Instructor name:{instructor_name}</Card.Title>
                        <h3>Available seats: {seats}</h3>
                        <h3>Price: ${price}</h3>
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer>
                  {isAdmin || isInstructor ? 
              <Button  disabled variant="primary">select</Button>     
:<Button  onClick={()=> handleSelect(cls)} variant="primary">select</Button> }
                   </Card.Footer>
            </Card>
        
        
        }
        </>
    );
};

export default Classes;
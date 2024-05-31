import React, { useContext } from 'react';
import { Button ,Container,Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { AuthContext } from "../../providers/AuthProvider";
import {  Link, useNavigate } from "react-router-dom";
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)

                    .then(() => {
                        const savedUser = {name: data.name, email: data.email, photo: data.photoURL }
                        fetch(`https://rhythmic-mansion-server.vercel.app/users`,{
                            method:'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body:JSON.stringify(savedUser)
                        })
                        .then(res=>res.json())
            .then (data=>{
                if (data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
                        //console.log('user profile info updated')
                       
                        navigate('/');

                    })
                    .catch(error => console.log(error))
            })
    };
   
   
   
    return (
        <div>
            <h1 className='text-center mt-5'>Registration Page</h1>
            <Container className='w-50 bg-light p-5 my-5'>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" {...register("name", { required: true })} name="name" placeholder="Your Name" />
                    {errors.name && <span className="text-danger">Name is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" {...register("email", { required: true })} name="email" placeholder="Enter email" />
                    {errors.email && <span className="text-danger">Email is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })}  name='password' placeholder="Password" />
                                {errors.password?.type === 'required' && <p className="text-danger">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-danger">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-danger">Password must have one Uppercase and one special character.</p>}
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="password" {...register('confirmPassword', {
            required: true,
          })} name='confirmPassword' placeholder="Confirm Password" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" {...register("photoURL", { required: true })} name='photoURL' placeholder="Photo URL" />
                    {errors.photoURL && <span className="text-danger">Photo URL is required</span>}
                </Form.Group>
        
            <Button variant="success" type="submit">
             Register
            </Button>
        </Form>
        <p className="text-center py-3">Already have an account <Link to="/login">Login</Link></p>
           
           
           <SocialLogin></SocialLogin>
          
           
        </Container>
        </div>
    );
};

export default Register;
import React from 'react';
import { Button ,Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (
        <div>
            register page
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" {...register("name", { required: true })} name="name" placeholder="Your Name" />
                    {errors.name && <span className="text-danger">Name is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" {...register("email", { required: true })} name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })}  name='password' placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="password" {...register('confirmPassword', {
            required: true,
            validate: value => value === password || 'Passwords do not match'
          })} name='confirm' placeholder="Confirm Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" {...register("photoURL", { required: true })} name='photoURL' placeholder="Photo URL" />
                </Form.Group>
        
            <Button variant="success" type="submit">
             Register
            </Button>
        </Form>
        </div>
    );
};

export default Register;
import React, { useContext } from 'react';
import { Button ,Container,Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

   const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, { replace: true });
        })
    };
    
    
    
    
    return (
        <div >
            <Container className='w-25 bg-light p-5 my-5'>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"  {...register("email", { required: true })} name="email" placeholder="Enter email" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"  {...register("password", {required: true,})} name='password' placeholder="Password" />
           
            </Form.Group>
            {errors.email && errors.password && <span className="text-danger">Wrong Credential</span>}
        
            <Button variant="primary" type="submit">
             Login
            </Button>
        </Form>
        <p className='text-center py-3'>New Here? <Link to="/register">Create an account</Link> </p>
           
           <SocialLogin></SocialLogin>
         </Container>
        </div>
    );
};

export default Login;
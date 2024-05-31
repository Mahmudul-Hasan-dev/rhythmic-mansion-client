import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa";
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
         googleSignIn()
         .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);

            const savedUser = {name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL}
            fetch(`https://rhythmic-mansion-server.vercel.app/users`,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(savedUser)
            })
            .then(res=>res.json())
            .then (()=>{
                navigate(from, { replace: true });
            })
        })
    }
    return (
        <div>
            <hr />
            <div className="d-grid gap-2">
                <Button onClick={handleGoogleSignIn} variant='outline-dark' >
                    <FaGoogle > </FaGoogle>
                {' '} Google
                </Button>
            </div>
            
        </div>
    );
};

export default SocialLogin;
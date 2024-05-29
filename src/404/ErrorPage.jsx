import React from 'react';
import { Link, useRouteError } from "react-router-dom";
import image from '../assets/error.gif'
import { Button } from 'react-bootstrap';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='text-center pt-5'>
            <img src={image} alt="" height={'300px'}/>
            <h2 className='text-danger'>Oops! an unexpected error has occurred.
            </h2>
            
            <h4>
            <i>{error.statusText || error.message}</i>
            </h4>
            <br />
            <Link to={'/'}><Button>Back to home</Button></Link>
        </div>
    );
};

export default ErrorPage;
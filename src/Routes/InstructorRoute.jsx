import React from 'react';
import useAuth from '../hooks/useAuth';

import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import useSingleInstructor from '../hooks/useSingleInstructor';

const InstructorRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isInstructor, isInstructorLoading]= useSingleInstructor()
    const location = useLocation();
    
    if(loading || isInstructorLoading){
        return <Spinner animation="border" variant="info" />
    }

    if (user && isInstructor) {
    return [children];
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;
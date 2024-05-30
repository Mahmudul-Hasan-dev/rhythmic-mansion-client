import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Spinner } from 'react-bootstrap';

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <Spinner animation="border" variant="warning" />
    }

    if (user && isAdmin) {
    return [children];
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;
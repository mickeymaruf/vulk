import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/UserContext';

const RestrictLoginUser = ({ children }) => {
    const { user } = useAuth();
    if (user && user.uid) {
        return <Navigate to="/"></Navigate>
    }
    return children;
};

export default RestrictLoginUser;
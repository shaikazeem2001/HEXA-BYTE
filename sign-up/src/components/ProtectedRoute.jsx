import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    const isGuest = localStorage.getItem('isGuest') === 'true';

    // If there is no token AND it's not a guest, redirect to login
    if (!token && !isGuest) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;

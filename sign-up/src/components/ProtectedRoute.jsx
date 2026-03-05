import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../api/Axios';

const ProtectedRoute = ({ children }) => {
    const isGuest = localStorage.getItem('isGuest') === 'true';
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        if (isGuest) {
            setIsAuthenticated(true);
            return;
        }

        const verifySession = async () => {
            try {
                // Axios will automatically send HttpOnly cookies with this request
                await axios.get('/api/auth/profile');
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Session invalid or expired");
                localStorage.clear();
                setIsAuthenticated(false);
            }
        };

        verifySession();
    }, [isGuest]);

    if (isAuthenticated === null) {
        // Render a loading state while validating
        return <div className="h-screen flex items-center justify-center bg-gray-50 dark:bg-black"><div className="w-8 h-8 border-4 border-iris-500 border-t-transparent rounded-full animate-spin"></div></div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;

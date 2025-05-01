import React from 'react';
import { Redirect  } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    return isAuthenticated === 'true' ? children : <Redirect  to="/admin" />;
}

export default ProtectedRoute;
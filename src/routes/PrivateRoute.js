import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { loggedInContext } from '../contexts/Context';

const PrivateRoute = ({ children }) => {
    const [loggedIn] = useContext(loggedInContext);
    const location = useLocation();

    if (!loggedIn) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;

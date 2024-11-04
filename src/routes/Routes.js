import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import UserRegister from '../pages/user-auth/UserRegister';
import UserLogin from '../pages/user-auth/UserLogin';
import PrivateRoute from './PrivateRoute';
import UserDashboard from '../pages/dashboard/UserDashboard';
import useVerifyToken from '../services/verifyToken';
import Note from '../pages/note/Note';



const Router = () => {

    useVerifyToken();


    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<UserRegister />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/dashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
                <Route path="/notes" element={<PrivateRoute><Note /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>

    );
};

export default Router;



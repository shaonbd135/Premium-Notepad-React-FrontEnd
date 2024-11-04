import React, { useContext, useEffect, useState } from 'react';
import './LoginForm.css';
import { loginFormSubmit } from '../../services/loginFormSubmit';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { loggedInContext, userContext, verifyLoggedinContext } from '../../contexts/Context';


const LoginForm = () => {
    const [user, setUser] = useContext(userContext);
    const [loggedIn, setLoggedIn] = useContext(loggedInContext);
    const [verifyLoggedIn, setVerifyLoggedIn] = useContext(verifyLoggedinContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await loginFormSubmit(formData);

        if (result && result.success) {
            alert('Login successful');
            setFormData({
                email: '',
                password: '',
            });
            setUser(result.user);
            setLoggedIn(true);
            navigate('/dashboard');
        } else if (result && !result.success) {
            alert(result.message);
        } else {
            alert('An error occurred');
        }
    };
    if (verifyLoggedIn === null) {
        return <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '24px', fontWeight: 'bold', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Loading...</div>;
    }

    if (verifyLoggedIn === 'verified') {
        return <Navigate to={from} replace  />;
    }
    



    return (
        <div className="login-container">
            <h2 className="form-title">Log in</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={handleChange}
                        name='email'
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={handleChange}
                        name='password'
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" className="btn-submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;

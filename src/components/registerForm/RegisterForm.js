import React, { useState } from 'react';
import './RegisterForm.css';
import { registerFormSubmit } from '../../services/registerFormSubmit';

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await registerFormSubmit(formData);
        if (result.success) {
            alert('Registration successful!');
            setFormData({
                name: '',
                email: '',
                password: '',
            });
            e.target.reset();

        } else if (!result.success) {
            alert(result.message);
        } else {
            alert('An unexpected error occurred.');
        }
    };

    return (
        <div className="register-container">
            <h2 className="form-title">User Sign Up</h2>
            <form className="register-form" onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={handleChange}
                        name='name'
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange}
                        name='email'
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group" >
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange}
                        name='password'
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" className="btn-submit">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;

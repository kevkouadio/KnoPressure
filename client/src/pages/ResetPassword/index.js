import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Form, Input } from "../../components/Form";

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isPasswordReset, setIsPasswordReset] = useState(false); // State to control input visibility

    const query = new URLSearchParams(useLocation().search);
    const token = query.get('token'); // Get token from URL

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Passwords don't match.");
            return;
        }
        try {
            const response = await axios.post('/resetPassword', { token, newPassword: password });
            // Include a link to the login page in the success message
            setMessage(
                <>
                    {response.data} 
                    <br />
                    <a href="/#/login">Click here to login</a>
                </>
            );
            setIsPasswordReset(true); // Hide input fields after successful reset
        } catch (error) {
            setMessage(error.response?.data || "An error occurred. Please try again.");
        }
    };

    return (
        <div className="card login-sign-Card">
            <h2>Reset Password</h2>
            <Form onSubmit={handleSubmit}>
                {/* Show password fields only if the password has not been reset */}
                {!isPasswordReset && (
                    <>
                        <div className="mb-3">
                            <label className="form-label">New Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm New Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </>
                )}
                <button type="submit" className="btn btn-primary" disabled={isPasswordReset}>
                    Reset Password
                </button>
            </Form>
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
};

export default ResetPassword;
